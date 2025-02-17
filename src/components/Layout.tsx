import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen  w-[100vw] ">
      <header className="fixed top-0 w-full bg-gray-800/40 backdrop-blur-sm z-50">
        <div className="max-w-7xl  mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <Link to="/" className="text-white font-bold text-xl">
              SpeakUp
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/topic" className="text-white/80 hover:text-white transition-colors">
                Practice
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 space-y-3">
              <Link 
                to="/" 
                className="block text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/topic" 
                className="block text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Practice
              </Link>
            </nav>
          )}
        </div>
      </header>
      <main className="pt-16 justify-center  w-full min-h-[calc(100vh-4rem)] flex flex-col items-center">
        <div className="w-full  max-w-7xl px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout; 