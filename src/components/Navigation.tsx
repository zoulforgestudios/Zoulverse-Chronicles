import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'library', label: 'Stories' },
    { id: 'characters', label: 'Characters' },
    { id: 'lore', label: 'Lore' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F29]/90 backdrop-blur-md border-b border-[#8A5DFF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('hero')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8A5DFF] to-[#24C3FF] flex items-center justify-center shadow-[0_0_20px_rgba(138,93,255,0.5)]">
              <span className="text-xl">⭐</span>
            </div>
            <span className="font-['Cinzel_Decorative'] text-2xl bg-gradient-to-r from-[#8A5DFF] via-[#24C3FF] to-[#FFD46A] bg-clip-text text-transparent">
              Zoulverse
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-['Bebas_Neue'] tracking-wider ${
                  currentSection === item.id
                    ? 'bg-[#8A5DFF] text-white shadow-[0_0_15px_rgba(138,93,255,0.5)]'
                    : 'text-gray-300 hover:text-white hover:bg-[#141A40]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#141A40] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F29] border-t border-[#8A5DFF]/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-['Bebas_Neue'] tracking-wider ${
                  currentSection === item.id
                    ? 'bg-[#8A5DFF] text-white shadow-[0_0_15px_rgba(138,93,255,0.5)]'
                    : 'text-gray-300 hover:text-white hover:bg-[#141A40]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
