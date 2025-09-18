/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';

const UploadSection = ({ imgUpload, uploadImage, image, isLoading, fileName, selectedColor, setSelectedColor, addBackground, setAddBackground }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        imgUpload({ target: { files: [file] } });
        const reader = new FileReader();
        reader.onload = (e) => setImagePreview(e.target.result);
        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileSelect = (e) => {
    imgUpload(e);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const predefinedColors = [
    '#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff', 
    '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080'
  ];

  return (
    <div className="w-full">
      <div className="glass-effect rounded-2xl p-8 hover-scale">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Upload Gambar
        </h2>
        
        <div
          className={`drag-area rounded-2xl p-8 min-h-[300px] flex flex-col items-center justify-center transition-all duration-300 ${
            isDragging ? 'drag-over' : ''
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            id="upload"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          {imagePreview ? (
            <div className="text-center">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="image-preview mb-4 mx-auto"
              />
              <p className="text-white/80 text-sm mb-4">{fileName}</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="btn-secondary mr-2"
              >
                Ganti Gambar
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Drag & Drop gambar di sini
              </h3>
              <p className="text-white/60 mb-6">atau klik untuk memilih file</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="btn-primary"
              >
                Pilih Gambar
              </button>
              <p className="text-white/40 text-sm mt-4">
                Format: JPG, PNG, WEBP (Max 10MB)
              </p>
            </div>
          )}
        </div>

        {image && (
          <div className="mt-8">
            <div className="text-center mb-6">
              <button
                className={`btn-accent px-8 py-4 text-lg font-semibold ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={uploadImage}
                disabled={!image || isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="loading-spinner w-5 h-5"></div>
                    <span>Memproses...</span>
                  </div>
                ) : (
                  <span>🚀 Hapus Background</span>
                )}
              </button>
            </div>

            <div className="border-t border-white/20 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  Tambah Warna Background (Opsional)
                </h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addBackground}
                    onChange={(e) => setAddBackground(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {addBackground && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {predefinedColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded-full border-3 transition-all duration-300 hover:scale-110 ${
                          selectedColor === color
                            ? 'border-white ring-4 ring-white/30'
                            : 'border-white/30 hover:border-white/60'
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center space-x-3">
                      <span className="text-white/80 text-sm">Custom:</span>
                      <input
                        type="color"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="color-picker"
                      />
                    </div>
                  </div>
                </div>
              )}

              {!addBackground && (
                <p className="text-white/60 text-sm text-center">
                  Background akan transparan (PNG dengan alpha channel)
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadSection;
