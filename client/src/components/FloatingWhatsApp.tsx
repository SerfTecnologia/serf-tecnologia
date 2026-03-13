import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappLink = 'https://wa.me/5514997821490?text=Olá!%20Gostaria%20de%20conversar%20com%20a%20SERF%20Tecnologia.';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Contato via WhatsApp"
    >
      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-[#2ECC71] rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Button */}
      <div className="relative bg-[#2ECC71] hover:bg-[#27AE60] text-white rounded-full p-4 shadow-lg transition-all duration-200 transform group-hover:scale-110">
        <MessageCircle size={24} />
      </div>
    </a>
  );
}
