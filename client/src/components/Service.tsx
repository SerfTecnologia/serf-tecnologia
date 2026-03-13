export default function Service() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="serf-section-title text-center">Atendimento em todo o Brasil</h2>
          
          <p className="text-lg md:text-xl text-[#5F6368] text-center mb-8 font-semibold">
            A Serf atua de forma híbrida, com suporte remoto estruturado e atendimento presencial sob demanda.
          </p>

          <div className="space-y-6 text-[#1C1C1C]">
            <div className="bg-[#F4F6F9] p-6 rounded-lg">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Quando necessário, a empresa ativa uma rede de técnicos parceiros qualificados na região do cliente. O objetivo é garantir agilidade sem perder padrão técnico.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                O atendimento presencial direto acontece na região de <span className="font-semibold">Bauru, Piratininga, Duartina, Gália e Cabrália</span>. Para demais localidades, o suporte remoto segue como primeiro passo, com possibilidade de visita técnica quando necessário.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#153E75]/10 to-[#2ECC71]/10 border border-[#153E75]/20 p-6 rounded-lg">
              <p className="text-sm font-semibold text-[#153E75] uppercase tracking-wide mb-2">
                Cobertura de Atendimento
              </p>
              <p className="text-base md:text-lg text-[#1C1C1C] leading-relaxed">
                Suporte remoto em todo o Brasil com possibilidade de atendimento presencial sob demanda através de nossa rede de parceiros qualificados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
