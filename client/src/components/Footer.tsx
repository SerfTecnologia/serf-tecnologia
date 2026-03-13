import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663382912357/aMaAfPo25GvY4ZPYLW5jJV/ChatGPTImage10demar.de2026,15_05_15_80f5149d.png"
              alt="SERF Tecnologia"
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-[#2ECC71] mb-2">
              SERF
            </h3>
            <p className="text-[#B0B0B0] italic mb-4">
              TI que resolve.
            </p>
            <p className="text-sm text-[#B0B0B0]">
              Consultoria de TI focada em suporte, prevenção de falhas e melhoria de performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#planos" className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors">
                  Como Funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#planos" className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors">
                  Plano Start
                </a>
              </li>
              <li>
                <a href="#planos" className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors">
                  Plano Business
                </a>
              </li>
              <li>
                <a href="#planos" className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors">
                  Plano Pro
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#desenvolvimento-web" className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contato</h4>
            <p className="text-[#B0B0B0] text-sm mb-4">
              Bauru, Piratininga, Duartina, Gália e Cabrália
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/serf_tecnologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://br.linkedin.com/company/serf-tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B0B0B0] hover:text-[#2ECC71] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333] pt-8">
          <p className="text-center text-[#B0B0B0] text-sm">
            © {currentYear} Serf Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
