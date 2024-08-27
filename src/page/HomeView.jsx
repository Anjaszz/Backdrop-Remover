import { useState } from "react";
import loadImage from "blueimp-load-image";
import UploadSection from "../components/UploadSection";
import ResultSection from "../components/ResultSection";
import ErrorModal from "../components/ErrorModal";

const Home = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resultBlob, setResultBlob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Default background color
  const apiKey = import.meta.env.VITE_API_KEY;

  const imgUpload = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setFileName(img.name);
  };

  const uploadImage = async () => {
    setIsLoading(true);

    const resizedImage = await loadImage(image, {
      maxWidth: 1500,
      maxHeight: 1500,
      canvas: true,
    });

    resizedImage.image.toBlob(async (inputBlob) => {
      const formData = new FormData();
      formData.append("image_file", inputBlob);

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });

      if (response.status === 200) {
        const outputBlob = await response.blob();
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const img = new Image();
        img.src = URL.createObjectURL(outputBlob);
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.fillStyle = selectedColor; // Set the selected color as the background
          ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with color
          ctx.drawImage(img, 0, 0); // Draw the image over the colored background

          canvas.toBlob((blob) => {
            setResultBlob(URL.createObjectURL(blob));
            setIsLoading(false);
          });
        };
      } else {
        setShowModal(true);
        setIsLoading(false);
      }
    });
  };

  const handleDownload = () => {
    setResultBlob(null);
    setImage(null);
    setFileName("");
  };

  return (
    <div className="flex flex-wrap justify-center py-8 px-4">
      <ResultSection resultBlob={resultBlob} isLoading={isLoading} onDownload={handleDownload} fileName={fileName} />
      <UploadSection
        imgUpload={imgUpload}
        uploadImage={uploadImage}
        image={image}
        isLoading={isLoading}
        fileName={fileName}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ErrorModal showModal={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home;
