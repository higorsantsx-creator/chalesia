import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Star, Quote, Hammer, PenTool, CheckCircle, TrendingUp, Sparkles, Ruler, Compass, HardHat, ChevronLeft, ChevronRight, Home, LayoutGrid, Pencil, Check, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { ParallaxImage } from "./ui/parallax-image";
import chale_1 from "@/assets/chale_1.jpeg.asset.json";
import chale_2 from "@/assets/chale_2.jpeg.asset.json";
import chale_3 from "@/assets/chale_3_new.jpg.asset.json";
import chale_4 from "@/assets/chale_4_new.jpg.asset.json";
import chale_5 from "@/assets/chale_5.jpg.asset.json";
import chale_6 from "@/assets/chale_6.jpg.asset.json";
import heroChaleAsset from "@/assets/hero-chale-new.png.asset.json";
import logoAssetV2 from "@/assets/logo-chales-ia-v2.png.asset.json";
import chaleNordicReferencia from "@/assets/chale_nordic_referencia.png.asset.json";
import chaleAlpinePool from "@/assets/chale_alpine_pool.png.asset.json";
import interiorChaleAsset from "@/assets/interior-chale.png.asset.json";

import gallery1 from "@/assets/gallery-1.png.asset.json";
import gallery2 from "@/assets/gallery-2.png.asset.json";
import gallery3 from "@/assets/gallery-3.png.asset.json";


const InteractiveGallery = () => {
  const [index, setIndex] = React.useState(0);
  const images = [
    { url: interiorChaleAsset.url, alt: "Interior de Luxo - Principal" },
    { url: gallery2.url, alt: "Arquitetura Contemporânea" },
    { url: gallery1.url, alt: "Vista Panorâmica" }
  ];

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setIsDragging(false);
  };


  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full aspect-[4/5] md:aspect-square group overflow-visible select-none cursor-none md:cursor-default"

    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-sm">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              scale: 1.1,
              clipPath: "inset(0% 100% 0% 0%)"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              x: mousePos.x * 20,
              y: mousePos.y * 20
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.95,
              clipPath: "inset(0% 0% 0% 100%)"
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              clipPath: { duration: 1, ease: [0.76, 0, 0.24, 1] }
            }}
            className="absolute inset-0 z-10"
          >
            <img 
              src={images[index].url} 
              alt={images[index].alt}
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* Lateral Peeks */}
        <div 
          className="absolute inset-y-0 -left-12 md:-left-24 w-24 md:w-48 z-20 opacity-0 md:opacity-40 group-hover:opacity-60 transition-opacity duration-700 cursor-pointer hidden md:block" 
          onClick={prev}
        >
           <div className="w-full h-full overflow-hidden rounded-sm scale-90 blur-sm hover:blur-none hover:scale-95 transition-all duration-700">
             <img src={images[(index - 1 + images.length) % images.length].url} className="w-full h-full object-cover opacity-50" />
           </div>
        </div>
        <div 
          className="absolute inset-y-0 -right-12 md:-right-24 w-24 md:w-48 z-20 opacity-0 md:opacity-40 group-hover:opacity-60 transition-opacity duration-700 cursor-pointer hidden md:block" 
          onClick={next}
        >
           <div className="w-full h-full overflow-hidden rounded-sm scale-90 blur-sm hover:blur-none hover:scale-95 transition-all duration-700">
             <img src={images[(index + 1) % images.length].url} className="w-full h-full object-cover opacity-50" />
           </div>
        </div>

      </div>

      {/* Navigation UI */}
      <div className="absolute bottom-8 left-8 right-8 z-30 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button 
            onClick={prev}
            className="text-white/40 hover:text-white transition-colors duration-300 p-2"
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
          <div className="flex flex-col gap-2">
             <span className="text-white text-[10px] tracking-[0.3em] font-medium font-sans">
               0{index + 1} / 0{images.length}
             </span>
             <div className="w-24 h-[1px] bg-white/10 overflow-hidden">
               <motion.div 
                 initial={false}
                 animate={{ x: `${(index / (images.length - 1)) * 100 - 100}%` }}
                 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                 className="w-full h-full bg-primary"
               />
             </div>
          </div>
          <button 
            onClick={next}
            className="text-white/40 hover:text-white transition-colors duration-300 p-2"
          >
            <ChevronRight size={24} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Floating Border */}
      <div className="absolute inset-0 border border-primary/20 m-8 -z-10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
    </div>
  );
};

export const Navbar = () => {

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12",
        isScrolled ? "bg-background/95 backdrop-blur-2xl py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-border/5" : "bg-white/95 backdrop-blur-md"
      )}

    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src={logoAssetV2.url} 
              alt="Chalés IA" 
              className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110" 
            />
            <span className={cn(
              "text-2xl font-serif tracking-tighter hover:opacity-80 transition-opacity",
              !isScrolled && "text-black"
            )}>
              CHALÉS IA
            </span>
          </a>
          <div className={cn(
            "hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-sans",
            !isScrolled && "text-black/80"
          )}>
            <a href="/" className="hover:text-primary transition-colors">Início</a>
            <a href="/#projetos" className="hover:text-primary transition-colors">Projetos</a>
            <a href="/#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="/#processo" className="hover:text-primary transition-colors">Processo</a>
            <a href="/#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
            <a href="/#contato" className="hover:text-primary transition-colors">Contato</a>

          </div>
        </div>
        
        <a 
          href="#orcamento" 
          className="bg-primary text-primary-foreground px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 rounded-sm"
        >
          Solicitar Orçamento
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.nav>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroChaleAsset.url} 
          alt="Chalé de Luxo Arquitetônico"
          className="w-full h-full object-cover brightness-[0.6] contrast-[1.1] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)] md:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,transparent_60%)]"></div>

      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-6xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mb-12"
        >
          <div className="relative group">
            {/* Soft localized shadow behind the label for depth */}
            <div className="absolute inset-0 bg-black/40 blur-2xl rounded-full -z-10 scale-150 opacity-50"></div>
            
            <div className="bg-black/30 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full shadow-2xl transition-all duration-700 hover:bg-black/40 hover:border-white/20">
              <span className="text-white/90 text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-sans font-medium block whitespace-nowrap">
                Escritório de Arquitetura & Construção
              </span>
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-[11rem] font-serif font-bold leading-[0.75] mb-16 tracking-tighter drop-shadow-[0_2px_15px_rgba(0,0,0,0.4)] md:drop-shadow-[0_4px_30px_rgba(0,0,0,0.3)] text-white"
        >
          <span className="text-brand-gold">Arquitetura</span> <br />
          <span className="italic text-primary/90 font-medium">que respira.</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <a 
            href="#projetos"
            data-cursor="Explorar"
            className="group flex items-center gap-6 text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:text-primary transition-all duration-500"
          >
            <span>Ver Portfólio</span>
            <ArrowRight size={18} className="group-hover:translate-x-4 transition-transform duration-500" />
          </a>
          <a 
            href="#orcamento" 
            data-cursor="Iniciar"
            className="group relative inline-flex items-center bg-primary text-primary-foreground px-14 py-6 transition-all duration-700 uppercase tracking-[0.4em] text-[11px] font-bold rounded-sm shadow-[0_30px_70px_rgba(64,128,89,0.3)] hover:-translate-y-2 active:scale-95"
          >
            <span className="relative z-10">Solicitar Orçamento</span>
          </a>

          
          <a 
            href="#projetos" 
            className="inline-flex items-center gap-4 border border-white/20 px-14 py-6 hover:bg-white hover:text-black backdrop-blur-md transition-all duration-500 uppercase tracking-[0.2em] text-[11px] font-bold rounded-sm active:scale-95"
          >
            Explorar Obras
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary/60"
          />
        </div>
      </motion.div>
    </section>
  );
};


export const Philosophy = () => {

  return (
    <section id="sobre" className="py-32 md:py-56 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-sans font-bold block mb-10">O Conceito</span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold leading-[0.9] mb-12 tracking-tighter">
              Arquitetura que <br />
              conecta o <span className="italic font-medium text-primary">homem</span> <br />
              ao seu lugar.
            </h2>
            <div className="space-y-8 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg font-serif italic">
              <p>
                Não construímos apenas chalés. Criamos experiências espaciais que respeitam a topografia, a luz natural e a materialidade bruta de cada terreno.
              </p>
              <p>
                Acreditamos que o luxo contemporâneo reside na simplicidade sofisticada e na integração absoluta com o ambiente.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 flex items-center gap-6"
            >
              <div className="w-16 h-[1px] bg-primary/30"></div>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Nossa Essência</p>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=90&w=2000&auto=format&fit=crop" 
              alt="Conceito Arquitetônico"
              containerClassName="aspect-[3/4] rounded-sm shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-16 -right-16 w-1/2 aspect-square hidden lg:block"
            >
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=90&w=2000&auto=format&fit=crop" 
                alt="Detalhe de Materialidade"
                containerClassName="w-full h-full rounded-sm border-8 border-background shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


const PROJETOS = [
  {
    id: 1,
    name: "Chalé A-Frame Classic",
    category: "Arquitetura Orgânica",
    description: "Estrutura triangular clássica em madeira, integrada perfeitamente a ambientes de mata nativa.",
    image: chale_5.url,
  },
  {
    id: 2,
    name: "Chalé Alpine Elite",
    category: "Conceito Nordic",
    description: "A-frame reinterpretado com materiais nobres e foco em conforto térmico extremo.",
    image: chaleAlpinePool.url,
  },
  {
    id: 3,
    name: "Residência Hillside",
    category: "Arquitetura Moderna",
    description: "Design contemporâneo com grandes vãos de vidro, unindo sofisticação urbana e refúgio natural.",
    image: chale_4.url,
  },
  {
    id: 4,
    name: "Chalé Sunset View",
    category: "Design Icônico",
    description: "Interior iluminado e pé-direito duplo, projetado para capturar a luz dourada do entardecer.",
    image: chale_6.url,
  }
];


export const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Arquitetura",
      desc: "Análise do terreno e desenvolvimento do conceito autoral.",
      icon: <Compass className="text-primary" size={24} />
    },
    {
      num: "02",
      title: "Engenharia",
      desc: "Cálculos estruturais e planejamento técnico rigoroso.",
      icon: <Ruler className="text-primary" size={24} />
    },
    {
      num: "03",
      title: "Execução",
      desc: "Construção com equipe própria e gestão de alto padrão.",
      icon: <HardHat className="text-primary" size={24} />
    },
    {
      num: "04",
      title: "Curadoria",
      desc: "Escolha minuciosa de revestimentos e acabamentos.",
      icon: <Sparkles className="text-primary" size={24} />
    }
  ];

  return (
    <section id="processo" className="py-32 md:py-56 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="lg:sticky lg:top-40">
            <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-sans font-bold block mb-10">O Percurso</span>
            <h2 className="text-6xl md:text-9xl font-serif font-bold leading-[0.8] tracking-tighter mb-12">
              Do terreno <br />
              <span className="italic font-medium text-primary">ao chalé.</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-md font-serif italic">
              Um processo verticalizado que garante a integridade do design da primeira linha do desenho até a última telha da obra.
            </p>
          </div>
          
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group flex gap-12 items-start pb-24 border-b border-border/10 last:border-0"
              >
                <div className="text-6xl md:text-8xl font-serif font-bold text-primary/5 group-hover:text-primary/20 transition-all duration-700 leading-none">
                  {step.num}
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      {step.icon}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-sm font-serif italic">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export const Details = () => {
  return (
    <section id="diferenciais" className="py-32 md:py-56 bg-background text-foreground overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <InteractiveGallery />

          
          <div>
            <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-sans font-bold block mb-10">Materialidade</span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold leading-[0.9] mb-12 tracking-tighter">
              A alma da <br />
              <span className="italic font-medium text-primary text-4xl md:text-7xl block mt-4">arquitetura premium.</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed mb-16 max-w-md font-serif italic">
              A curadoria de materiais — da madeira certificada à pedra bruta e ao vidro de alta performance — define a identidade e a longevidade de cada obra.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary">
                  <Sparkles size={20} />
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">Texturas Reais</h4>
                </div>
                <p className="text-sm opacity-50 leading-relaxed font-serif italic">Madeira natural, pedra vulcânica e concreto aparente em harmonia estrutural.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary">
                  <Hammer size={20} />
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">Rigor Técnico</h4>
                </div>
                <p className="text-sm opacity-50 leading-relaxed font-serif italic">Mão de obra especializada em estruturas complexas e acabamentos milimétricos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const Investment = () => {
  return (
    <section className="py-32 md:py-56 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-sans font-bold block mb-10">Viabilidade</span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tighter mb-12">
              Investir em <br />
              <span className="italic font-medium text-primary">patrimônio vivo.</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-md font-serif italic">
              Seja para moradia ou investimento, nossos projetos são otimizados para maximizar o valor de revenda e o potencial de retorno sobre o capital.
            </p>
          </div>
          <div className="relative">
            <TrendingUp className="text-primary/10 absolute -top-24 -right-12" size={300} strokeWidth={0.5} />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { t: "Uso Próprio", d: "Foco total no bem-estar, conforto térmico e exclusividade do morador." },
                { t: "Hospedagem", d: "Design estratégico para alta performance em plataformas de locação." },
                { t: "Land Equity", d: "Valorização imediata do terreno através de arquitetura de grife." },
                { t: "Sustentabilidade", d: "Eficiência energética que reduz custos fixos e atrai investidores." }
              ].map((item, idx) => (
                <motion.div 
                  key={item.t}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="bg-background p-10 border border-border/5 rounded-sm hover:border-primary/30 transition-all duration-700 group"
                >
                  <h4 className="font-serif text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-serif italic">
                    {item.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export const Projects = () => {
  return (
    <section id="projetos" className="py-32 md:py-56 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32 flex flex-col md:row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-sans font-bold block mb-6">Portfólio Editorial</span>
            <h2 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter leading-[0.8] mb-8">
              Obras que <br />
              <span className="italic font-medium text-primary">materializam</span> <br />
              visões.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl font-serif italic max-w-sm mb-4">
            Uma seleção de nossos projetos mais emblemáticos, onde a arquitetura contemporânea encontra a excelência executiva.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {PROJETOS.map((projeto, idx) => (
            <motion.div 
              key={projeto.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={cn("group cursor-pointer", idx % 2 === 1 ? "md:mt-48" : "")}
              data-cursor="Explorar"
            >
              <div className="relative overflow-hidden mb-12 rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] transition-all duration-700">
                <div className="aspect-[4/5]">
                  <ParallaxImage 
                    src={projeto.image} 
                    alt={projeto.name}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <div className="absolute top-8 left-8 text-white text-[10px] uppercase tracking-[0.3em] font-bold bg-primary/90 backdrop-blur-md px-6 py-3 z-20">
                  {projeto.category}
                </div>
              </div>
              
              <div className="space-y-6 px-4">
                <span className="text-primary text-[11px] uppercase tracking-[0.4em] font-bold block">Obra 0{projeto.id}</span>
                <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter group-hover:text-primary transition-colors duration-500">
                  {projeto.name}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md font-serif italic">
                  {projeto.description}
                </p>
                
                <Link 
                  to="/chale/$chaleId" 
                  params={{ chaleId: projeto.id.toString() }}
                  className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold pt-6 border-b border-primary/20 hover:border-primary transition-all duration-300"
                >
                  <span>Ver Detalhes da Obra</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




const REVIEWS = [
  {
    id: 1,
    author: "Bruno Andrade",
    role: "Proprietário de Terreno",
    content: "O acompanhamento da Chalés IA foi fundamental. Eles não apenas construíram um chalé, eles deram vida à visão que eu tinha para minha propriedade na serra.",
    rating: 5,
  },
  {
    id: 2,
    author: "Mariana Costa",
    role: "Investidora",
    content: "Construí três chalés para aluguel por temporada e o resultado superou todas as expectativas. O design atrai hóspedes e a qualidade construtiva é impecável.",
    rating: 5,
  },
  {
    id: 3,
    author: "Carlos Mendes",
    role: "Arquiteto Colaborador",
    content: "A precisão na execução dos detalhes arquitetônicos e a escolha dos materiais fazem da Chalés IA uma parceira de confiança para projetos de alto padrão.",
    rating: 5,
  }
];


export const SocialProof = () => {
  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="diferenciais" className="py-32 md:py-56 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-sans font-bold block mb-6">Depoimentos</span>
          <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-[0.9]">
            Vozes de quem <br />
            <span className="italic font-medium text-primary">construiu</span> conosco.
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-12 md:p-32 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-border/5 text-center relative"
            >
              <Quote className="absolute top-12 left-12 text-primary/5" size={120} />
              
              <div className="flex justify-center text-primary mb-12 gap-1">
                {[...Array(REVIEWS[index].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-2xl md:text-5xl font-serif italic leading-tight mb-16 tracking-tight text-foreground/90">
                "{REVIEWS[index].content}"
              </p>

              <div>
                <h4 className="text-xl font-serif font-bold tracking-tight mb-2">{REVIEWS[index].author}</h4>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">{REVIEWS[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-12 mt-16">
            <button 
              onClick={prev}
              className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500 active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
              0{index + 1} / 0{REVIEWS.length}
            </div>
            <button 
              onClick={next}
              className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500 active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-40 pt-24 border-t border-border/10">
          <p className="text-center text-[10px] uppercase tracking-[0.6em] text-muted-foreground/40 mb-16 font-bold">Destaque em Publicações de Prestígio</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-20 grayscale hover:opacity-60 transition-all duration-1000">
            {["VOGUE", "AD", "T+L", "MONOCLE", "ARCHDAILY"].map((brand) => (
              <span key={brand} className="text-2xl md:text-3xl font-serif font-bold tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export const BookingForm = () => {
  const [step, setStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    projectType: "",
    hasLand: "",
    landSize: "",
    landAccess: "",
    numberOfChalets: "1",
    objective: "",
    architectureStyle: "",
    features: [] as string[],
    budget: "",
    state: "",
    city: "",
    timeline: "",
    name: "",
    whatsapp: "",
    email: "",
    message: ""
  });

  const steps = [
    { title: "Tipo de Projeto" },
    { title: "Terreno" },
    { title: "Quantidade" },
    { title: "Objetivo" },
    { title: "Estilo Arquitetônico" },
    { title: "Ambientes" },
    { title: "Investimento" },
    { title: "Localização" },
    { title: "Prazo" },
    { title: "Dados Pessoais" },
    { title: "Mensagem" },
    { title: "Revisão" }
  ];

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Um chalé", desc: "Uso próprio ou lazer", val: "Um chalé" },
              { label: "Vários chalés", desc: "Hospedagem ou investimento", val: "Vários chalés" },
              { label: "Personalizado", desc: "Arquitetura sob medida", val: "Projeto personalizado" }
            ].map((opt) => (
              <button 
                key={opt.val}
                onClick={() => { updateField("projectType", opt.val); nextStep(); }}
                className={cn(
                  "p-8 border rounded-sm text-left transition-all hover:border-primary",
                  formData.projectType === opt.val ? "border-primary bg-primary/5" : "border-border"
                )}
              >
                <Home className="mb-4 text-primary" size={24} />
                <h3 className="font-serif font-bold text-lg mb-2">{opt.label}</h3>
                <p className="text-sm text-muted-foreground">{opt.desc}</p>
              </button>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Sim", "Ainda não", "Em negociação"].map((opt) => (
              <button 
                key={opt}
                onClick={() => { updateField("hasLand", opt); nextStep(); }}
                className={cn(
                  "p-8 border rounded-sm text-left transition-all hover:border-primary",
                  formData.hasLand === opt ? "border-primary bg-primary/5" : "border-border"
                )}
              >
                <Compass className="mb-4 text-primary" size={24} />
                <h3 className="font-serif font-bold text-lg mb-2">{opt}</h3>
              </button>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button 
                key={num}
                onClick={() => { updateField("numberOfChalets", num.toString()); nextStep(); }}
                className={cn(
                  "p-8 border rounded-sm transition-all hover:border-primary",
                  formData.numberOfChalets === num.toString() ? "border-primary bg-primary/5" : "border-border"
                )}
              >
                <span className="text-4xl font-serif font-bold">{num}</span>
              </button>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "REFÚGIO", desc: "Uso próprio, descanso e lazer.", val: "Refúgio" },
              { title: "INVESTIMENTO", desc: "Chalés para aluguel e renda.", val: "Investimento" },
              { title: "MORADIA", desc: "Um espaço pensado para viver.", val: "Moradia" },
              { title: "HOSPEDAGEM", desc: "Empreendimento profissional.", val: "Hospedagem" }
            ].map((opt) => (
              <button 
                key={opt.val}
                onClick={() => { updateField("objective", opt.val); nextStep(); }}
                className={cn(
                  "p-8 border rounded-sm text-left transition-all hover:border-primary",
                  formData.objective === opt.val ? "border-primary bg-primary/5" : "border-border"
                )}
              >
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-2 text-primary">{opt.title}</h3>
                <p className="text-sm text-muted-foreground">{opt.desc}</p>
              </button>
            ))}
          </div>
        );
      default:
        return <div className="p-20 text-center text-muted-foreground">Etapa {step + 1} em construção...</div>;
    }
  };

  return (
    <section id="orcamento" className="py-24 md:py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-2 block">Seu Projeto</span>
                  <h2 className="text-4xl font-serif">{steps[step].title}</h2>
               </div>
               <span className="text-xs font-bold font-mono tracking-widest text-muted-foreground">0{step + 1} / 0{steps.length}</span>
            </div>
            
            <div className="min-h-[400px]">
              {renderStep()}
            </div>
            
            <div className="flex justify-between mt-12 pt-8 border-t border-border">
              <button onClick={prevStep} disabled={step === 0} className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest disabled:opacity-30">
                <ChevronLeft size={16} /> Voltar
              </button>
              {step === steps.length - 1 ? (
                 <button className="bg-primary text-primary-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest">Solicitar Orçamento</button>
              ) : (
                 <button onClick={nextStep} className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest">
                   Continuar <ChevronRight size={16} />
                 </button>
              )}
            </div>
          </div>
          
          <div className="hidden md:block w-96 bg-card border border-border/10 p-12 relative overflow-hidden">
             <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground mb-8">Visão do Projeto</h4>
             <div className="aspect-square bg-muted/20 flex items-center justify-center border border-dashed border-border">
                <div className="relative w-full h-full">
                  {/* Base Layer */}
                  <motion.div 
                    animate={{ 
                      scale: formData.numberOfChalets === "1" ? 1 : 0.8,
                      x: formData.numberOfChalets === "1" ? 0 : -20
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                     <div className="w-24 h-32 bg-primary/20 border border-primary/40 relative">
                        <div className="absolute top-0 left-0 w-full h-0 border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[32px] border-b-primary/30 -translate-y-full"></div>
                     </div>
                  </motion.div>
                  
                  {/* Multiplier for more chalets */}
                  {(parseInt(formData.numberOfChalets) > 1) && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 20 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                       <div className="w-20 h-24 bg-primary/10 border border-primary/20 relative">
                          <div className="absolute top-0 left-0 w-full h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[24px] border-b-primary/20 -translate-y-full"></div>
                       </div>
                    </motion.div>
                  )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5582999357645?text=Olá! Conheci a Chalés IA e gostaria de conversar sobre a construção de um chalé."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-90 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap text-xs font-bold uppercase tracking-widest">
        Falar com Especialista
      </span>
    </a>
  );
};

export const Footer = () => {

  return (
    <footer id="contato" className="bg-background border-t border-border/10 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="/" className="text-3xl font-serif tracking-tighter block mb-8">CHALÉS IA</a>
          <p className="text-muted-foreground max-w-sm mb-10 leading-relaxed">
            Especialistas em projetar e construir chalés de alto padrão que integram arquitetura contemporânea à natureza.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-border flex items-center justify-center rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <span className="text-[10px] uppercase font-bold tracking-tighter">IG</span>
            </a>
            <a href="#" className="w-10 h-10 border border-border flex items-center justify-center rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Phone size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-border flex items-center justify-center rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest font-sans mb-8">Atuação</h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-sans">
            <li className="flex gap-3">
              <MapPin size={16} className="text-primary shrink-0" />
              Projetos em todo o Brasil.<br />Execução sob consulta.
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest font-sans mb-8">Navegação</h4>
          <ul className="space-y-4 text-sm text-muted-foreground uppercase tracking-wider font-sans text-[10px]">
            <li><a href="/" className="hover:text-primary transition-colors">Início</a></li>
            <li><a href="/#projetos" className="hover:text-primary transition-colors">Projetos</a></li>
            <li><a href="/#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
            <li><a href="/#processo" className="hover:text-primary transition-colors">Processo</a></li>
            <li><a href="/#orcamento" className="hover:text-primary transition-colors">Solicitar Orçamento</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border/10 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">© 2024 Chalés IA. Todos os direitos reservados.</p>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Design by Premium Experiences</p>
      </div>
    </footer>
  );
};
