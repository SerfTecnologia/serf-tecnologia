export default function AboutUs() {
  return (
    <section id="quem-somos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="serf-section-title text-center">Quem Somos</h2>
          
          <p className="text-lg md:text-xl text-[#5F6368] text-center mb-8 font-semibold">
            A Serf Tecnologia é uma consultoria de TI focada em suporte, prevenção de falhas e melhoria de performance.
          </p>

          <div className="space-y-6 text-[#1C1C1C]">
            <p className="text-base md:text-lg leading-relaxed">
              A empresa atua com organização, documentação e transparência para que o cliente tenha previsibilidade e segurança. O propósito é levar tecnologia com clareza, responsabilidade técnica e soluções que realmente funcionam.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Entendemos que a tecnologia é um meio para o sucesso do seu negócio, não um fim em si mesma. Por isso, trabalhamos de forma estruturada, evitando jargões desnecessários e focando sempre em resultados práticos e mensuráveis.
            </p>

            <div className="bg-[#F4F6F9] border-l-4 border-[#2ECC71] p-6 rounded-lg mt-8">
              <p className="text-lg font-semibold text-[#153E75] italic">
                "TI que resolve."
              </p>
              <p className="text-sm text-[#5F6368] mt-2">
                Nossa assinatura de marca
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
