import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const socialLinks = [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/anjasRanii',
        icon: 'fa-brands fa-facebook',
        color: 'hover:text-blue-400'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/anjaszz_',
        icon: 'fa-brands fa-instagram',
        color: 'hover:text-pink-400'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Anjaszz',
        icon: 'fa-brands fa-github',
        color: 'hover:text-gray-300'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/anjas-rani-562396212',
        icon: 'fa-brands fa-linkedin',
        color: 'hover:text-blue-500'
      }
    ];

    return (
      <footer className="w-full mt-16">
        <div className="glass-effect rounded-t-3xl p-8">
          <div className="max-w-4xl mx-auto">
            {/* Creator Section */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
               
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Created by{' '}
                    <a 
                      href="https://anjaszzz.my.id" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:from-purple-400 hover:to-pink-400 transition-all duration-300 font-bold"
                    >
                      Anjaszzz
                    </a>
                  </h3>
                  <p className="text-white/60 text-sm">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 ${link.color} group`}
                  title={link.name}
                >
                  <i className={`${link.icon} fa-lg transition-transform duration-300 group-hover:scale-110`}></i>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

            {/* Bottom Section */}
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">
                Background Remover Tool
              </p>
              <p className="text-white/40 text-xs">
                © {new Date().getFullYear()} All rights reserved. Made with ❤️ using React & Tailwind
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-t-3xl">
            <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  