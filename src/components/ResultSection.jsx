/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const ResultSection = ({ resultBlob, isLoading, onDownload, fileName }) => {
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (resultBlob) {
      setShowResult(true);
    }
  }, [resultBlob]);

  const getModifiedFileName = () => {
    if (!fileName) return "background_removed.png";
    const fileParts = fileName.split(".");
    const baseName = fileParts.slice(0, -1).join(".") || fileName;
    return `${baseName}_bg_removed.png`;
  };

  const handleDownload = () => {
    onDownload();
    setShowResult(false);
  };

  return (
    <div className="w-full">
      <div className="glass-effect rounded-2xl p-8 hover-scale">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Hasil Background Removal
          </h2>
          
          <div className="relative min-h-[400px] rounded-2xl border-2 border-dashed border-white/20 bg-white/5 flex items-center justify-center overflow-hidden">
            {isLoading ? (
              <div className="text-center">
                <div className="loading-spinner mx-auto mb-4"></div>
                <p className="text-white/80 text-lg">Sedang memproses gambar...</p>
                <p className="text-white/60 text-sm mt-2">Mohon tunggu sebentar</p>
                <div className="flex justify-center mt-4 space-x-1">
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            ) : resultBlob ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-4">
                <div className={`transition-all duration-500 ${showResult ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <img
                    id="imageResult"
                    src={resultBlob}
                    alt="Result"
                    className="image-preview max-h-80 mx-auto mb-6"
                  />
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mb-4">
                    <p className="text-green-300 text-sm font-medium">
                      ✨ Background berhasil dihapus!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Hasil akan muncul di sini
                </h3>
                <p className="text-white/60">
                  Upload gambar untuk melihat hasilnya
                </p>
              </div>
            )}
          </div>
          
          {resultBlob && (
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  id="down"
                  href={resultBlob}
                  download={getModifiedFileName()}
                  className="btn-primary px-8 py-4 text-lg font-semibold inline-flex items-center justify-center space-x-2"
                  onClick={handleDownload}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span>Download Hasil</span>
                </a>
                
                <button
                  onClick={() => setShowResult(false)}
                  className="btn-secondary px-6 py-4 text-lg font-semibold"
                >
                  Reset
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-white/60 text-sm">
                  File: {getModifiedFileName()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {resultBlob && (
        <div className="mt-6 glass-effect rounded-xl p-4">
          <div className="flex items-center justify-between text-sm text-white/80">
            <span>Status:</span>
            <span className="text-green-300 font-medium">✅ Selesai diproses</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultSection;
