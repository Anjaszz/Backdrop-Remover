
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
        setResultBlob(URL.createObjectURL(outputBlob));
      } else {
        setShowModal(true);
      }

      setIsLoading(false);
    });
  };

  const handleDownload = () => {
    // Hapus hasil, nama file, dan set image menjadi null setelah download
    setResultBlob(null);
    setImage(null);
    setFileName(""); // Reset nama file
  };

  return (
    <div className="flex flex-wrap justify-center py-8 px-4">
     
      <ResultSection resultBlob={resultBlob} isLoading={isLoading} onDownload={handleDownload} />
      <UploadSection imgUpload={imgUpload} uploadImage={uploadImage} image={image} isLoading={isLoading} fileName={fileName} />
      <ErrorModal showModal={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};


export default Home;
