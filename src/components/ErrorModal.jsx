/* eslint-disable react/prop-types */


const ErrorModal = ({ showModal, onClose }) => {
  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-blue-500 font-semibold my-3">Gagal menghapus background. Silakan coba lagi.</p>
          <button
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default ErrorModal;
