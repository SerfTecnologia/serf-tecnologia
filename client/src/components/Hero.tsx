import { CheckCircle } from 'lucide-react';

export default function Hero() {
  const whatsappLink = 'https://wa.me/5514997821490?text=Olá!%20Gostaria%20de%20solicitar%20contato%20com%20a%20SERF%20Tecnologia.';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="serf-gradient-hero text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <CheckCircle size={16} className="text-[#2ECC71]" />
            <span className="text-sm font-medium">Atendimento rápido • Transparência • Segurança</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Suporte de TI e Consultoria para sua empresa funcionar sem parar
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
            Diagnóstico claro, soluções objetivas e acompanhamento de ponta a ponta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Solicitar contato
            </a>
            <button
              onClick={() => scrollToSection('planos')}
              className="inline-block bg-white hover:bg-[#F4F6F9] text-[#153E75] font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Ver serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
