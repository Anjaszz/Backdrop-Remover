/* eslint-disable react/prop-types */

const ResultSection = ({ resultBlob, isLoading, onDownload }) => {
  return (
    <div className="w-full md:w-1/2 px-4">
      <div className="text-center">
        <p className="italic text-green-500 mb-4">Hasil hapus background :</p>
        <div className="relative border-2 border-dashed border-gray-300 p-4 rounded-lg min-h-[200px]">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="lds-roller">
                {[...Array(8)].map((_, i) => (
                  <div key={i}></div>
                ))}
              </div>
            </div>
          ) : resultBlob ? (
            <img
              id="imageResult"
              src={resultBlob}
              alt="Result"
              className="rounded-lg shadow-md mx-auto"
            />
          ) : (
            <p className="text-gray-500">No image uploaded yet.</p>
          )}
        </div>
        {resultBlob && (
          <a
            id="down"
            href={resultBlob}
            download="result.png"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            onClick={onDownload} // Tambahkan onClick handler
          >
            Download
          </a>
        )}
      </div>
    </div>
  );
};

export default ResultSection;
