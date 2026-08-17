import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/landing";
import { motion } from "framer-motion";
import { Hammer, Maximize, Ruler, Compass, HardHat, Layers, ArrowLeft, Quote, Star } from "lucide-react";
import chale_1 from "@/assets/chale_1.jpeg.asset.json";
import chale_2 from "@/assets/chale_2.jpeg.asset.json";
import chale_3 from "@/assets/chale-obra-3.jpg.asset.json";
import chale_4 from "@/assets/chale_4_new.jpg.asset.json";
import chale_5 from "@/assets/chale_5.jpg.asset.json";
import chale_6 from "@/assets/chale_6.jpg.asset.json";
import chaleNordicReferencia from "@/assets/chale_nordic_referencia.png.asset.json";
import chaleAlpinePool from "@/assets/chale_alpine_pool.png.asset.json";
import chaleObra4 from "@/assets/chale-obra-4.jpg.asset.json";

export const Route = createFileRoute("/chale/$chaleId")({
  component: ChaleDetailsPage,
});

const CHALE_DATA: Record<string, any> = {
  "1": {
    name: "Chalé A-Frame Classic",
    category: "Arquitetura Orgânica",
    description: "Estrutura triangular clássica em madeira, integrada perfeitamente a ambientes de mata nativa. Um ícone de aconchego e design sustentável.",
    image: chale_5.url,
    tagline: "O clássico que nunca sai de moda.",
    features: ["Estrutura 100% Madeira Certificada", "Design A-Frame Autêntico", "Deck Integrado", "Vedação de Alta Performance"],
    specs: { size: "45m²", time: "3 Meses", energy: "A" }
  },
  "2": {
    name: "Chalé Alpine Elite",
    category: "Conceito Nordic",
    description: "Inspirado nos refúgios dos Alpes, este projeto oferece uma estrutura robusta e acolhedora. O design A-frame é reinterpretado com materiais nobres.",
    image: chaleAlpinePool.url,
    tagline: "Conforto térmico e design icônico.",
    features: ["Isolamento Térmico Premium", "Esquadrias de PVC Wood", "Lareira Central", "Iluminação Zenital"],
    specs: { size: "75m²", time: "5 Meses", energy: "A++" }
  },
  "3": {
    name: "Residência Hillside",
    category: "Arquitetura Moderna",
    description: "Design contemporâneo com grandes vãos de vidro, unindo sofisticação urbana e refúgio natural. Perfeito para quem não abre mão da elegância.",
    image: chale_4.url,
    tagline: "Transparência e solidez arquitetônica.",
    features: ["Vãos Livres em Vidro", "Alvenaria Estrutural Aparente", "Pé Direito Duplo", "Acabamentos Premium"],
    specs: { size: "140m²", time: "8 Meses", energy: "A+" }
  },
  "4": {
    name: "Chalé Sunset View",
    category: "Design Icônico",
    description: "Interior iluminado e pé-direito duplo, projetado para capturar a luz natural. Uma obra-prima de transparência e calor.",
    image: chaleObra4.url,
    tagline: "A luz como elemento de design.",
    features: ["Fachada de Vidro de Segurança", "Mezanino Panorâmico", "Escada Helicoidal", "Revestimentos em Madeira Nobre"],
    specs: { size: "110m²", time: "7 Meses", energy: "A++" }
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
        <section className="relative h-[90vh] w-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            src={chale.image || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=90&w=2000&auto=format&fit=crop"} 
            className="w-full h-full object-cover grayscale-[0.2] brightness-75" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-black/20"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-24">
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Link to="/" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-bold mb-12 hover:text-primary transition-all group">
                  <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> 
                  <span>Voltar ao Portfólio</span>
                </Link>
                <span className="text-primary text-[10px] uppercase tracking-[0.6em] font-sans font-bold block mb-6">{chale.category}</span>
                <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter leading-[0.8] mb-8">
                  {chale.name.split(' ')[0]} <br />
                  <span className="italic font-medium text-primary">{chale.name.split(' ').slice(1).join(' ')}</span>
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-32 md:py-56 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
              {/* Left Column: Vision & Specs */}
              <div className="lg:col-span-7 space-y-32">
                <div className="relative">
                  <Quote className="text-primary/10 absolute -top-12 -left-12" size={80} />
                  <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-bold mb-12">Manifesto do Projeto</h2>
                  <p className="text-3xl md:text-5xl leading-[1.2] text-foreground font-serif italic mb-12 tracking-tight">
                    "{chale.description}"
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-serif">
                    Uma resposta arquitetônica que desafia a convenção, unindo a precisão da engenharia moderna com a alma orgânica dos materiais naturais. Cada linha foi traçada para honrar o terreno e elevar a experiência de habitar.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-16 gap-x-12 py-24 border-y border-foreground/5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-6 text-primary">
                      <Maximize size={24} strokeWidth={1.5} />
                      <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold">Escala</h4>
                    </div>
                    <p className="text-2xl font-serif font-bold">{chale.specs.size}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Área Construída</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-6 text-primary">
                      <Ruler size={24} strokeWidth={1.5} />
                      <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold">Precisão</h4>
                    </div>
                    <p className="text-2xl font-serif font-bold">Milimétrica</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Padrão Executivo</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-6 text-primary">
                      <Layers size={24} strokeWidth={1.5} />
                      <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold">Eficiência</h4>
                    </div>
                    <p className="text-2xl font-serif font-bold">{chale.specs.energy}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Certificação</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-6 text-primary">
                      <HardHat size={24} strokeWidth={1.5} />
                      <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold">Prazo</h4>
                    </div>
                    <p className="text-2xl font-serif font-bold">{chale.specs.time}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Execução Monitorada</p>
                  </div>
                </div>

                <div className="space-y-16">
                  <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Materialidade & <br /> <span className="text-primary italic font-medium">Componentes.</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {chale.features.map((feature: string, idx: number) => (
                      <motion.div 
                        key={feature} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-8 p-10 bg-secondary/5 border border-border/5 rounded-sm group hover:border-primary/30 transition-all duration-700"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Investment Card */}
              <div className="lg:col-span-5 lg:pl-12">
                <div className="lg:sticky lg:top-40 bg-foreground text-background p-12 md:p-20 rounded-sm shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
                  
                  <div className="relative z-10">
                    <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">Investimento</span>
                    <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tighter">Sob Consulta</h3>
                    <p className="text-sm opacity-50 mb-16 font-serif italic max-w-xs">Valorização estimada com base no padrão construtivo Chalés IA.</p>
                    
                    <div className="space-y-10 mb-16 pt-10 border-t border-background/10">
                      <div className="flex justify-between items-center group">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 group-hover:opacity-100 transition-opacity">Personalização</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Full Concept</span>
                      </div>
                      <div className="flex justify-between items-center group">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 group-hover:opacity-100 transition-opacity">Engenharia</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Inclusa</span>
                      </div>
                      <div className="flex justify-between items-center group">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 group-hover:opacity-100 transition-opacity">Garantia Executiva</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">10 Anos</span>
                      </div>
                    </div>

                    <a 
                      href="/#orcamento" 
                      className="block w-full bg-primary text-primary-foreground py-6 text-center uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-primary/95 transition-all shadow-[0_20px_40px_rgba(64,128,89,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95 rounded-sm"
                    >
                      Iniciar Viabilidade
                    </a>
                    
                    <p className="text-[9px] text-center mt-10 opacity-30 uppercase tracking-[0.3em] leading-loose max-w-[200px] mx-auto">
                      Sujeito a análise técnica de solo e localização geográfica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


