import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

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
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-serif tracking-tighter hover:opacity-80 transition-opacity">
            CHALÉS IA
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-sans">
            <a href="#experiencia" className="hover:text-primary transition-colors">Experiência</a>
            <a href="#chales" className="hover:text-primary transition-colors">Chalés</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
        
        <a 
          href="#orcamento" 
          className="bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-all flex items-center gap-2"
        >
          Solicitar Orçamento
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop" 
          alt="Chalé de Luxo na Natureza"
          className="w-full h-full object-cover brightness-50"
        />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-primary text-sm md:text-base uppercase tracking-[0.4em] font-sans font-bold block mb-6"
        >
          Um refúgio exclusivo na montanha
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-6xl md:text-9xl font-serif font-bold leading-[0.85] mb-12 tracking-tighter"
        >
          Onde o luxo encontra a natureza
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a 
            href="#chales" 
            className="inline-flex items-center gap-3 border border-white/30 px-10 py-4 hover:bg-white hover:text-background transition-all duration-500 uppercase tracking-widest text-xs"
          >
            Conheça nossos chalés
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-12 bg-white/30 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-white after:rounded-full"></div>
      </motion.div>
    </section>
  );
};

export const Experience = () => {
  return (
    <section id="experiencia" className="py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-sans font-bold block mb-6">A Experiência</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Fuja da rotina sem abrir mão do conforto.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
              Nos Chalés IA, cada detalhe foi pensado para proporcionar uma imersão completa na tranquilidade da natureza. Uma curadoria de design e bem-estar para momentos inesquecíveis.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl mb-2">Privacidade</h4>
                <p className="text-sm text-muted-foreground">Localização isolada para total discrição.</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-2">Conforto</h4>
                <p className="text-sm text-muted-foreground">Enxovais premium e amenities de luxo.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200&auto=format&fit=crop" 
                alt="Natureza ao redor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square border border-primary/20 -z-10 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CHALES = [
  {
    id: 1,
    name: "Chalé Aurora",
    description: "Vista panorâmica para o nascer do sol e banheira de imersão.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Chalé Floresta",
    description: "Integrado à mata nativa com deck privativo e lareira.",
    image: "https://images.unsplash.com/photo-1449156006079-eb5881645a85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Chalé Zen",
    description: "Minimalismo e paz para retiros espirituais e descanso profundo.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
  }
];

export const Accommodations = () => {
  return (
    <section id="chales" className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-sans font-bold block mb-4">Acomodações</span>
          <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter">Escolha seu refúgio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CHALES.map((chale, idx) => (
            <motion.div 
              key={chale.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img 
                  src={chale.image} 
                  alt={chale.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <h3 className="text-3xl font-serif font-bold mb-3">{chale.name}</h3>
              <p className="text-muted-foreground text-base mb-6 leading-relaxed">{chale.description}</p>
              <button className="text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-primary/50 pb-1 group-hover:border-primary transition-all">Ver detalhes</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BookingForm = () => {
  return (
    <section id="orcamento" className="py-24 md:py-40 px-6">
      <div className="max-w-4xl mx-auto bg-card p-8 md:p-20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
        
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Planeje sua estadia</h2>
          <p className="text-muted-foreground">Preencha os dados abaixo e entraremos em contato com uma proposta personalizada.</p>
        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-sans text-muted-foreground">Nome Completo</label>
            <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors" placeholder="Seu nome" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-sans text-muted-foreground">E-mail</label>
            <input type="email" className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-sans text-muted-foreground">Data de Chegada</label>
            <input type="date" className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-sans text-muted-foreground">Quantidade de Pessoas</label>
            <select className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors appearance-none">
              <option>1 Pessoa</option>
              <option>2 Pessoas</option>
              <option>Mais de 2</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs uppercase tracking-widest font-sans text-muted-foreground">Mensagem (Opcional)</label>
            <textarea className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors resize-none" rows={3} placeholder="Algum pedido especial?"></textarea>
          </div>
          
          <div className="md:col-span-2 pt-8">
            <button className="w-full bg-primary text-primary-foreground py-5 uppercase tracking-[0.2em] font-medium text-xs hover:opacity-90 transition-all">Solicitar Orçamento Personalizado</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer id="contato" className="bg-background border-t border-border/10 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="/" className="text-3xl font-serif tracking-tighter block mb-8">CHALÉS IA</a>
          <p className="text-muted-foreground max-w-sm mb-10 leading-relaxed">
            Uma experiência de hospedagem onde a inovação e o design se encontram com a alma da natureza.
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
          <h4 className="text-xs uppercase tracking-widest font-sans mb-8">Localização</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={16} className="text-primary shrink-0" />
              Serra Gaúcha, RS<br />Brasil
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest font-sans mb-8">Navegação</h4>
          <ul className="space-y-4 text-sm text-muted-foreground uppercase tracking-wider font-sans text-[10px]">
            <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
            <li><a href="#experiencia" className="hover:text-primary transition-colors">A Experiência</a></li>
            <li><a href="#chales" className="hover:text-primary transition-colors">Acomodações</a></li>
            <li><a href="#orcamento" className="hover:text-primary transition-colors">Orçamentos</a></li>
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
