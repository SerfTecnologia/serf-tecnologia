import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappLink = 'https://wa.me/5514997821490?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20a%20SERF%20Tecnologia.';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://d2xsxph8kpxj0f.clou ont.net/310519663382912357/aMaAfPo25GvY4ZPYLW5jJV/ChatGPTImage10demar.de2026,15_05_15_80f5149d.png"
              alt="SERF Tecnologia"
              className="h-20 md:h-24 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('quem-somos')}
              className="text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('planos')}
              className="text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('desenvolvimento-web')}
              className="text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Desenvolvimento Web
            </button>
          </nav>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block serf-btn-primary"
          >
            Fale Conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#153E75]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('quem-somos')}
              className="text-left text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('planos')}
              className="text-left text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-left text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('desenvolvimento-web')}
              className="text-left text-[#1C1C1C] hover:text-[#153E75] font-medium transition-colors"
            >
              Desenvolvimento Web
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="serf-btn-primary text-center"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
