/* eslint-disable react/prop-types */

const UploadSection = ({ imgUpload, uploadImage, image, isLoading, fileName, selectedColor, setSelectedColor }) => {
  return (
    <div className="w-full md:w-1/2 px-4">
      <div className="text-center">
        <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
          <input
            id="upload"
            type="file"
            onChange={imgUpload}
            className="hidden"
          />
          <label
            htmlFor="upload"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg top-4"
          >
            Upload
          </label>
          <label
            id="upload-label"
            htmlFor="upload"
            className="block text-sm text-gray-600 mt-3"
          >
            {fileName ? `File name: ${fileName}` : "Pilih file"} {/* Menampilkan nama file */}
          </label>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-500">Pilih warna background baru:</p>
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="mt-2"
          />
        </div>
        
        <button
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          onClick={uploadImage}
          disabled={!image || isLoading}
        >
          {isLoading ? "Menghapus..." : "Hapus Background"}
        </button>
      </div>
    </div>
  );
};

export default UploadSection;
