import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/landing";
import { motion } from "framer-motion";
import { Star, Wifi, Users, Maximize, Coffee, Wind, Shield, ArrowLeft } from "lucide-react";
import chaleRefAsset from "@/assets/chale-referencia.png.asset.json";

export const Route = createFileRoute("/chale/$chaleId")({
  component: ChaleDetailsPage,
});

const CHALE_DATA: Record<string, any> = {
  "1": {
    name: "Chalé Loft A-Frame",
    description: "Um ícone da arquitetura moderna, o Loft A-Frame combina a rusticidade da pedra com a leveza do vidro. Projetado para casais que buscam uma imersão completa no design sem abrir mão do conforto absoluto.",
    image: chaleRefAsset.url,
    price: "R$ 1.200 / noite",
    features: ["Fachada de vidro duplo", "Automação via IA", "Banheira de imersão", "Lareira suspensa"],
    specs: { size: "85m²", capacity: "2 Hóspedes", wifi: "600Mbps" }
  },
  "2": {
    name: "Chalé Alpine",
    description: "Inspirado nos refúgios dos Alpes Suíços, este chalé oferece uma vista panorâmica de tirar o fôlego. O deck privativo com borda infinita é o convite perfeito para manhãs contemplativas.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600",
    price: "R$ 1.500 / noite",
    features: ["Piscina aquecida", "Sauna seca privativa", "Cozinha gourmet", "Adega climatizada"],
    specs: { size: "120m²", capacity: "2 Hóspedes", wifi: "600Mbps" }
  },
  "3": {
    name: "Chalé Nordic",
    description: "O epítome do Hygge. Minimalismo escandinavo traduzido em texturas naturais, tons terrosos e uma iluminação cuidadosamente projetada para criar uma atmosfera de paz profunda.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1600",
    price: "R$ 1.100 / noite",
    features: ["Piso aquecido", "Enxoval 1000 fios", "Som ambiente hi-fi", "Claraboia para estrelas"],
    specs: { size: "75m²", capacity: "2 Hóspedes", wifi: "600Mbps" }
  }
};

function ChaleDetailsPage() {
  const { chaleId } = Route.useParams();
  const chale = CHALE_DATA[chaleId as keyof typeof CHALE_DATA] || CHALE_DATA["1"];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={chale.image} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-6 md:left-12">
            <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold mb-6 hover:text-primary transition-colors">
              <ArrowLeft size={14} /> Voltar para o início
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold tracking-tighter"
            >
              {chale.name}
            </motion.h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6">Sobre o Refúgio</h2>
                <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-serif italic">
                  "{chale.description}"
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10">
                <div className="flex flex-col items-center text-center gap-3">
                  <Maximize className="text-primary" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">{chale.specs.size}</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <Users className="text-primary" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">{chale.specs.capacity}</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <Wifi className="text-primary" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">{chale.specs.wifi}</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <Shield className="text-primary" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Privacidade Total</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold mb-8">Comodidades Exclusivas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chale.features.map((feature: string) => (
                    <div key={feature} className="flex items-center gap-4 p-6 bg-secondary/10 border border-white/5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm uppercase tracking-widest font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-card p-10 border border-white/10 shadow-2xl">
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">A partir de</span>
                  <p className="text-4xl font-serif font-bold text-primary">{chale.price}</p>
                </div>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest font-bold">
                    <span>Avaliação</span>
                    <span className="flex items-center gap-1">4.9 <Star size={12} fill="currentColor" className="text-primary" /></span>
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest font-bold">
                    <span>Taxa de Serviço</span>
                    <span className="text-muted-foreground italic">Inclusa</span>
                  </div>
                </div>

                <a 
                  href="/#orcamento" 
                  className="block w-full bg-primary text-primary-foreground py-5 text-center uppercase tracking-[0.2em] text-xs font-bold hover:opacity-90 transition-all shadow-xl shadow-primary/10"
                >
                  Solicitar Reserva
                </a>
                
                <p className="text-[9px] text-center mt-6 text-muted-foreground uppercase tracking-[0.2em] leading-loose">
                  *Sujeito a disponibilidade. O orçamento final será enviado em até 24h.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
