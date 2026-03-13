import { Check } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'Plano Start',
      tagline: 'Para começar com organização',
      price: 'R$ 420,00',
      period: '/ mês',
      microtext: 'Ideal para empresas que estão saindo do improviso.',
      features: [
        'Até 5 computadores e 2 impressoras',
        'Suporte remoto ilimitado (08h às 17h)',
        'Windows e Linux',
        'Instalação de softwares padrão',
        'Configuração de impressoras',
        'Inventário de equipamentos',
        'SLA: 12 horas (alta) | 1 dia útil (normal)',
      ],
      buttonText: 'Escolher Start',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o Plano Start da Serf Tecnologia.',
      featured: false,
    },
    {
      name: 'Plano Business',
      tagline: 'Prevenção + padrão técnico',
      price: 'R$ 650,00',
      period: '/ mês',
      microtext: 'Ideal para empresas em crescimento que precisam de estabilidade.',
      features: [
        'Até 8 computadores e 3 impressoras',
        'Suporte remoto ilimitado (08h às 17h)',
        'Windows e Linux',
        'Monitoramento preventivo',
        'Gestão de antivírus',
        'Verificação de backup',
        'Relatório mensal',
        'Automação e padronização com Ansible',
        'Análise e configuração de rede com acesso administrativo',
        'SLA: 8 horas (alta) | 1 dia útil (normal)',
      ],
      buttonText: 'Escolher Business',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o Plano Business da Serf Tecnologia.',
      featured: true,
    },
    {
      name: 'Plano Pro',
      tagline: 'Gestão mais completa',
      price: 'R$ 950,00',
      period: '/ mês',
      microtext: 'Para empresas que querem elevar o padrão e reduzir riscos.',
      features: [
        'Até 12 computadores e 4 impressoras',
        'Suporte remoto ilimitado (08h às 17h)',
        'Windows e Linux',
        'Monitoramento contínuo',
        'Automação avançada com Ansible',
        'Gestão Microsoft 365',
        'Gestão de backup com teste',
        'Relatório detalhado',
        'Análise e configuração de rede com acesso administrativo',
        'SLA: 6 horas (alta) | 1 dia útil (normal)',
      ],
      buttonText: 'Escolher Pro',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o Plano Pro da Serf Tecnologia.',
      featured: false,
    },
  ];

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5514997821490?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="planos" className="py-20 md:py-32 bg-[#F4F6F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="serf-section-title">Planos de Suporte & Gestão de TI</h2>
          <p className="serf-section-subtitle">
            Planos pensados para pequenas empresas que querem organização, previsibilidade e responsabilidade técnica.
          </p>
          <div className="bg-white inline-block px-6 py-3 rounded-lg shadow-sm mt-4">
            <p className="text-[#5F6368]">
              <span className="font-semibold">Atendimento limitado:</span> trabalhamos com número controlado de empresas para manter padrão técnico elevado.
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative serf-card transition-all duration-300 ${
                plan.featured
                  ? 'md:scale-105 md:shadow-lg border-2 border-[#2ECC71] hover:border-[#2ECC71]'
                  : 'border-2 border-transparent hover:border-[#153E75]'
              } flex flex-col h-full`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#153E75] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais contratado
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#153E75] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#5F6368] font-medium mb-4">
                  {plan.tagline}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-[#153E75]">
                    {plan.price}
                  </span>
                  <span className="text-[#5F6368] ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-[#2ECC71] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1C1C1C] text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 mt-auto">
                <button
                  onClick={() => handleWhatsApp(plan.whatsappMessage)}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                    plan.featured
                      ? 'bg-[#2ECC71] hover:bg-[#27AE60] text-white'
                      : 'bg-[#153E75] hover:bg-[#0F2847] text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
                <p className="text-center text-xs text-[#5F6368] italic">
                  {plan.microtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Information - Horizontal Layout */}
        <div className="bg-white rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Visita Técnica */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-[#153E75] mb-2">
                Visita Técnica Presencial
              </h3>
              <p className="text-[#5F6368] text-sm">
                A consultar
              </p>
              <p className="text-[#5F6368] text-xs mt-1">
                valor cobrado por ocorrência
              </p>
            </div>

            {/* Benefício Fidelidade */}
            <div className="text-center border-l border-r border-[#E8EAED]">
              <h3 className="text-lg font-bold text-[#153E75] mb-2">
                Benefício Fidelidade
              </h3>
              <p className="text-[#5F6368] text-sm">
                1 visita anual gratuita
              </p>
              <p className="text-[#5F6368] text-xs mt-1">
                a cada 12 meses de contrato
              </p>
            </div>

            {/* Atendimento */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-[#153E75] mb-2">
                Atendimento
              </h3>
              <p className="text-[#5F6368] text-sm">
                Segunda a sexta-feira
              </p>
              <p className="text-[#5F6368] text-xs mt-1">
                das 08h às 17h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
