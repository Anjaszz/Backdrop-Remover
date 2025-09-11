/* eslint-disable react/prop-types */
import { useEffect } from 'react';

const ErrorModal = ({ showModal, onClose }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => {
        document.body.style.overflow = 'unset';
        clearTimeout(timer);
      };
    }
  }, [showModal, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    showModal && (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
        onClick={handleBackdropClick}
      >
        <div className="glass-effect rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Oops! Terjadi Kesalahan
            </h3>
            <p className="text-white/80 leading-relaxed">
              Gagal menghapus background gambar. Pastikan gambar yang diupload valid dan coba lagi dalam beberapa saat.
            </p>
            <p className="text-white/60 text-sm mt-3">
              Jika masalah terus berlanjut, coba dengan gambar yang berbeda.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="btn-secondary px-6 py-3 font-semibold"
              onClick={onClose}
            >
              Coba Lagi
            </button>
          </div>

          {/* Auto close indicator */}
          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">
              Modal ini akan tertutup otomatis dalam 5 detik
            </p>
            <div className="w-full bg-white/10 rounded-full h-1 mt-2 overflow-hidden">
              <div className="h-full bg-gradient-secondary rounded-full animate-pulse" style={{
                animation: 'shrink 5s linear forwards'
              }}></div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <style jsx>{`
          @keyframes shrink {
            from { width: 100%; }
            to { width: 0%; }
          }
        `}</style>
      </div>
    )
  );
};

export default ErrorModal;
