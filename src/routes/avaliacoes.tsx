import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/landing";
import { motion } from "framer-motion";
import { Star, Quote, Filter } from "lucide-react";

export const Route = createFileRoute("/avaliacoes")({
  head: () => ({
    title: "Avaliações | Chalés IA - Experiências Reais",
    meta: [
      { name: "description", content: "Veja o que nossos hóspedes dizem sobre sua estadia nos Chalés IA. Relatos de momentos inesquecíveis, conforto e conexão com a natureza." },
      { property: "og:title", content: "Avaliações | Chalés IA" },
      { property: "og:description", content: "Relatos reais de hóspedes que viveram a experiência Chalés IA." },
    ],
  }),
  component: ReviewsPage,
});

const ALL_REVIEWS = [
  {
    id: 1,
    author: "Marina Siqueira",
    role: "Designer de Interiores",
    content: "Uma experiência transformadora. O cuidado com o design e a integração com a natureza é algo que nunca vi igual no Brasil. Cada detalhe, desde o enxoval até a automação via IA do chalé, é impecável.",
    rating: 5,
    date: "Julho 2024",
    avatar: "https://i.pravatar.cc/150?u=11",
    images: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=400"]
  },
  {
    id: 2,
    author: "Ricardo Fontes",
    role: "Empresário",
    content: "O refúgio perfeito para quem busca desconectar sem abrir mão do luxo. O atendimento é impecável e a privacidade é o ponto alto. O sistema de check-in inteligente e o concierge digital funcionam perfeitamente.",
    rating: 5,
    date: "Junho 2024",
    avatar: "https://i.pravatar.cc/150?u=12"
  },
  {
    id: 3,
    author: "Elena Cavalcanti",
    role: "Fotógrafa",
    content: "Cada ângulo deste lugar é uma obra de arte. A luz, os materiais, a paz... Chalés IA elevou meu padrão para o que chamo de hospedagem boutique. As fotos do site não fazem justiça à beleza real.",
    rating: 5,
    date: "Maio 2024",
    avatar: "https://i.pravatar.cc/150?u=13",
    images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400"]
  },
  {
    id: 4,
    author: "Gabriel Menezes",
    role: "Arquiteto",
    content: "Fiquei impressionado com a estrutura sustentável e o uso inteligente da tecnologia. É o futuro da hotelaria de luxo. O conforto térmico e acústico dos chalés é superior a qualquer hotel 5 estrelas.",
    rating: 5,
    date: "Abril 2024",
    avatar: "https://i.pravatar.cc/150?u=14"
  },
  {
    id: 5,
    author: "Beatriz Lopes",
    role: "Chef de Cozinha",
    content: "A experiência gastronômica privativa foi o ponto alto. Cozinhar com aquela vista e com os equipamentos de ponta disponíveis no chalé foi um sonho. Tudo muito bem pensado.",
    rating: 5,
    date: "Março 2024",
    avatar: "https://i.pravatar.cc/150?u=15"
  },
  {
    id: 6,
    author: "Lucas Silveira",
    role: "Desenvolvedor",
    content: "A integração de IA no controle do ambiente (luzes, temperatura, som) é extremamente fluida. Um lugar onde a tecnologia serve ao conforto sem ser intrusiva. Perfeito para um 'workation'.",
    rating: 5,
    date: "Fevereiro 2024",
    avatar: "https://i.pravatar.cc/150?u=16"
  }
];

function ReviewsPage() {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="px-6 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm uppercase tracking-[0.3em] font-sans font-bold block mb-6"
            >
              Vozes de nossos hóspedes
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-serif font-bold tracking-tighter mb-8"
            >
              Relatos de uma <br />
              <span className="italic text-primary font-medium">Estadia Memorável</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-xl max-w-2xl mx-auto"
            >
              Mais do que uma hospedagem, os Chalés IA são o cenário para histórias reais de descanso, conexão e exclusividade.
            </motion.p>
          </div>
        </section>

        {/* Stats & Filters Bar */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto border-y border-border/10 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-12">
              <div className="text-center md:text-left">
                <p className="text-3xl font-serif font-bold">4.9/5</p>
                <div className="flex text-primary mt-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Média Geral</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-serif font-bold">500+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-2">Hóspedes Felizes</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 border border-border px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-colors">
                <Filter size={14} />
                Filtrar
              </button>
              <button className="bg-primary text-primary-foreground px-8 py-3 text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">
                Escrever Avaliação
              </button>
            </div>
          </div>
        </section>

        {/* Grid of Reviews */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {ALL_REVIEWS.map((review, idx) => (
                <motion.div 
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="break-inside-avoid bg-card p-10 relative group border border-transparent hover:border-primary/20 transition-all duration-500"
                >
                  <Quote className="absolute top-6 right-6 text-primary/5 group-hover:text-primary/10 transition-colors" size={60} />
                  
                  <div className="flex text-primary mb-6">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>

                  <p className="text-lg leading-relaxed mb-8 italic font-serif">
                    "{review.content}"
                  </p>

                  {review.images && (
                    <div className="mb-8 grid grid-cols-1 gap-2">
                      {review.images.map((img, i) => (
                        <div key={i} className="aspect-video overflow-hidden">
                          <img src={img} alt="Hospedagem" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest">{review.author}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{review.role}</span>
                        <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                        <span className="text-[10px] text-primary uppercase tracking-widest font-bold">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 mt-32">
          <div className="max-w-4xl mx-auto text-center py-20 bg-primary/5 border border-primary/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mt-16"></div>
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Pronto para escrever sua própria história?</h2>
               <a 
                href="/#orcamento" 
                className="inline-block bg-primary text-primary-foreground px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:opacity-90 transition-all"
               >
                 Reservar agora
               </a>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
