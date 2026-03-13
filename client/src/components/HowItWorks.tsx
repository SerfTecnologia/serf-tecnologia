export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Entendimento do cenário',
      description: 'Conhecemos sua operação, desafios e objetivos em profundidade.',
    },
    {
      number: '02',
      title: 'Diagnóstico e proposta',
      description: 'Análise detalhada e apresentação de soluções claras e viáveis.',
    },
    {
      number: '03',
      title: 'Execução e validação',
      description: 'Implementação profissional com testes e validação dos resultados.',
    },
    {
      number: '04',
      title: 'Acompanhamento e prevenção',
      description: 'Monitoramento contínuo e ações preventivas para evitar novos problemas.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="serf-section-title">Como Funciona</h2>
          <p className="serf-section-subtitle">
            Nosso processo estruturado garante resultados efetivos e transparentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-[#2ECC71] to-[#2ECC71]/20 -z-10"></div>
              )}

              <div className="serf-card h-full">
                <div className="text-4xl font-bold text-[#2ECC71] mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#153E75] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#5F6368] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
