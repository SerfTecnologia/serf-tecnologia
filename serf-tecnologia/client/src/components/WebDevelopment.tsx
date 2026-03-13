import { Check, Code2 } from 'lucide-react';

export default function WebDevelopment() {
  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5514997821490?text=${encodedMessage}`, '_blank');
  };

  const webDevMessage = 'Olá! Gostaria de saber mais sobre o serviço de Desenvolvimento Web da Serf Tecnologia.';

  const features = [
    'Front-end responsivo e moderno',
    'Backend robusto e escalável',
    'Integrações com sistemas externos',
    'Domínio incluso',
    'Hospedagem por 2 anos inclusa',
    'Manutenção simples por 1 ano inclusa',
    'Suporte técnico dedicado',
    'SEO otimizado',
  ];

  return (
    <section id="desenvolvimento-web" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 size={32} className="text-[#153E75]" />
            <h2 className="serf-section-title">Desenvolvimento Web</h2>
          </div>
          <p className="serf-section-subtitle">
            Deixe sua empresa visível na internet com sites profissionais, modernos e que convertem.
          </p>
        </div>

        {/* Web Development Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="serf-card border-2 border-[#153E75] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - Pricing */}
              <div>
                <h3 className="text-3xl font-bold text-[#153E75] mb-2">
                  Criação de Site
                </h3>
                <p className="text-[#5F6368] text-sm mb-6">
                  Solução completa para presença digital
                </p>

                {/* Original Price */}
                <div className="mb-6">
                  <p className="text-[#999999] text-lg line-through">
                    R$ 1.199,00
                  </p>
                  <p className="text-[#5F6368] text-xs">
                    Valor original
                  </p>
                </div>

                {/* Discounted Price */}
                <div className="mb-8 p-4 bg-[#F4F6F9] rounded-lg border-2 border-[#2ECC71]">
                  <p className="text-5xl font-bold text-[#153E75]">
                    R$ 489,90
                  </p>
                  <p className="text-[#5F6368] text-sm mt-2">
                    Valor com desconto (incluso front-end, backend e integrações)
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsApp(webDevMessage)}
                  className="w-full bg-[#153E75] hover:bg-[#0F2847] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Solicitar Orçamento
                </button>
              </div>

              {/* Right Side - Features */}
              <div>
                <h4 className="text-lg font-bold text-[#153E75] mb-6">
                  O que está incluído:
                </h4>
                <ul className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-[#2ECC71] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1C1C1C] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Additional Info */}
                <div className="bg-[#F4F6F9] p-4 rounded-lg border-l-4 border-[#2ECC71]">
                  <p className="text-sm text-[#1C1C1C] font-semibold mb-2">
                    Valores excedentes:
                  </p>
                  <p className="text-xs text-[#5F6368]">
                    Funcionalidades adicionais após 2 anos de hospedagem ou 1 ano de manutenção: <strong>A consultar</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discount Banner */}
        <div className="bg-[#2ECC71] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">
            Desconto Especial para Clientes de TI
          </h3>
          <p className="text-lg">
            Contrate um plano mensal de suporte de TI e ganhe <strong>desconto adicional</strong> na criação do seu site!
          </p>
        </div>
      </div>
    </section>
  );
}
