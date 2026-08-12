import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/landing";
import { motion } from "framer-motion";
import { Hammer, Maximize, Ruler, Compass, HardHat, Layers, ArrowLeft } from "lucide-react";
import chale_1 from "@/assets/chale_1.jpeg.asset.json";
import chale_2 from "@/assets/chale_2.jpeg.asset.json";
import chale_3 from "@/assets/chale_3.jpeg.asset.json";
import chale_4 from "@/assets/chale_4.jpeg.asset.json";

export const Route = createFileRoute("/chale/$chaleId")({
  component: ChaleDetailsPage,
});

const CHALE_DATA: Record<string, any> = {
  "1": {
    name: "Chalé Contemporâneo",
    category: "Arquitetura Moderna",
    description: "Um ícone da arquitetura moderna, o Loft Contemporâneo combina a rusticidade da pedra com a leveza do vidro. Projetado para quem busca uma imersão completa no design contemporâneo.",
    image: chale_1.url,
    tagline: "Geometria limpa e vãos de vidro.",
    features: ["Fachada em Vidro Duplo", "Estrutura em Aço Corten", "Acabamento em Pedra Natural", "Automação Residencial"],
    specs: { size: "85m²", time: "6 Meses", energy: "A+" }
  },
  "2": {
    name: "Chalé Alpine Elite",
    category: "Conceito Nordic",
    description: "Inspirado nos refúgios dos Alpes, este projeto oferece uma estrutura robusta e acolhedora. O design A-frame é reinterpretado com materiais nobres e isolamento térmico de última geração.",
    image: chale_2.url,
    tagline: "Conforto térmico e design icônico.",
    features: ["Isolamento Térmico Premium", "Madeira de Lei Certificada", "Lareira de Alta Performance", "Piso Aquecido"],
    specs: { size: "120m²", time: "8 Meses", energy: "A++" }
  },
  "3": {
    name: "Chalé Hillside",
    category: "Integração Natureza",
    description: "Especialmente desenvolvido para terrenos íngremes. A estrutura suspensa minimiza o impacto ambiental enquanto maximiza a vista panorâmica.",
    image: chale_3.url,
    tagline: "Respeito ao relevo e à vegetação.",
    features: ["Fundação em Estacas", "Deck em Madeira Nobre", "Ventilação Cruzada Natural", "Recolhimento de Água Pluvial"],
    specs: { size: "95m²", time: "7 Meses", energy: "A" }
  },
  "4": {
    name: "Studio Minimalista",
    category: "Design Compacto",
    description: "A prova de que luxo não depende de tamanho. Eficiência espacial levada ao limite com acabamentos de altíssimo padrão.",
    image: chale_4.url,
    tagline: "Máxima sofisticação em espaço otimizado.",
    features: ["Mobiliário Sob Medida", "Iluminação Cênica", "Revestimentos Importados", "Conceito Aberto"],
    specs: { size: "45m²", time: "4 Meses", energy: "A++" }
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
                <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6">Conceito do Projeto</h2>
                <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-serif italic mb-6">
                  "{chale.description}"
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Cada detalhe foi meticulosamente planejado para oferecer uma experiência estética e funcional única. Este projeto prioriza a conexão com o entorno e o uso de materiais de altíssima qualidade.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-foreground/10">
                <div className="flex flex-col items-center text-center gap-3">
                  <Ruler className="text-primary" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">{chale.specs.size} de área</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <Compass className="text-primary" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Implantação Inteligente</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <Layers className="text-primary" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Classe {chale.specs.energy}</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <HardHat className="text-primary" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">~{chale.specs.time} de obra</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold mb-8">Diferenciais Técnicos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chale.features.map((feature: string) => (
                    <div key={feature} className="flex items-center gap-4 p-6 bg-secondary/10 border border-border/5 rounded-sm hover:bg-secondary/20 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs uppercase tracking-widest font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-card p-12 border border-border/5 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.08)] rounded-sm">
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Investimento Estimado</span>
                  <p className="text-3xl font-serif font-bold text-primary">Sob Consulta</p>
                </div>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold">
                    <span>Prazo de Entrega</span>
                    <span className="text-muted-foreground">{chale.specs.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold">
                    <span>Personalização</span>
                    <span className="text-primary">Disponível</span>
                  </div>
                </div>

                <a 
                  href="/#orcamento" 
                  className="block w-full bg-primary text-primary-foreground py-5 text-center uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/10"
                >
                  Solicitar Orçamento
                </a>
                
                <p className="text-[9px] text-center mt-6 text-muted-foreground uppercase tracking-[0.2em] leading-loose">
                  *Os valores e prazos variam de acordo com a localização e topografia do terreno.
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

