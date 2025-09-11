function Header() {
    return (
      <header className="text-center py-12 px-4 glass-effect rounded-b-3xl mb-8">
        <div className="floating">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="text-black">Backdrop</span>
            <span className="text-white"> Remover</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
          Hapus background gambar dengan cepat menggunakan AI
        </p>
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </header>
    );
  }

export default Header;