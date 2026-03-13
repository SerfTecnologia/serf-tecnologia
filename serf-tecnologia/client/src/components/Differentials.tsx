import { CheckCircle, Eye, Shield } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: CheckCircle,
      title: 'Diagnóstico antes de trocar',
      description: 'Análise profunda para identificar a real causa dos problemas antes de qualquer ação.',
    },
    {
      icon: Eye,
      title: 'Transparência no atendimento',
      description: 'Comunicação clara sobre o que fazemos, por que fazemos e como conduzimos cada etapa do atendimento.',
    },
    {
      icon: Shield,
      title: 'Prevenção e continuidade',
      description: 'Foco em evitar falhas futuras e manter a operação da empresa estável e segura.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F4F6F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="serf-section-title">Nossos Diferenciais</h2>
          <p className="serf-section-subtitle">
            Tecnologia com transparência, suporte confiável e soluções que realmente funcionam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="serf-card">
                <div className="mb-4">
                  <Icon size={40} className="text-[#2ECC71]" />
                </div>
                <h3 className="text-xl font-bold text-[#153E75] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#5F6368] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
