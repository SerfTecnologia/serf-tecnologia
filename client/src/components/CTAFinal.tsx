export default function CTAFinal() {
  const whatsappLink = 'https://wa.me/5514991234567?text=Olá!%20Gostaria%20de%20entender%20como%20estruturar%20minha%20infraestrutura%20de%20TI%20de%20forma%20organizada%20e%20preventiva.';

  return (
    <section id="contato" className="serf-gradient-hero text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quer organizar sua TI com previsibilidade?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
            Fale com a Serf e entenda como estruturar sua infraestrutura de forma organizada, preventiva e profissional.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold py-4 px-10 rounded-lg transition-colors duration-200 text-lg"
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </div>
    </section>
  );
}
