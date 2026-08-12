import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Star, Quote, Hammer, PenTool, CheckCircle, TrendingUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import chale_1 from "@/assets/chale_1.jpeg.asset.json";
import chale_2 from "@/assets/chale_2.jpeg.asset.json";
import chale_3 from "@/assets/chale_3.jpeg.asset.json";
import chale_4 from "@/assets/chale_4.jpeg.asset.json";
import heroChaleAsset from "@/assets/hero-chale.png.asset.json";


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
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroChaleAsset.url} 
          alt="Chalé de Luxo Arquitetônico"
          className="w-full h-full object-cover brightness-[0.7] contrast-[1.05] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-background/80"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary text-sm md:text-base uppercase tracking-[0.5em] font-sans font-bold block mb-8 drop-shadow-sm">
            Um refúgio exclusivo de arquitetura premium
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-[10rem] font-serif font-bold leading-[0.8] mb-12 tracking-tighter drop-shadow-2xl"
        >
          Seu refúgio <br />
          começa no <br />
          <span className="italic text-primary/90 font-medium">projeto.</span>

        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#chales" 
            className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 overflow-hidden transition-all duration-500 uppercase tracking-[0.2em] text-xs font-bold"
          >
            <span className="relative z-10">Solicitar Orçamento</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          
          <a 
            href="#projetos" 
            className="inline-flex items-center gap-3 border border-foreground/20 px-12 py-5 hover:bg-foreground/5 backdrop-blur-sm transition-all duration-500 uppercase tracking-[0.2em] text-xs font-bold"
          >
            Ver Projetos

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

export const Philosophy = () => {
  return (
    <section id="sobre" className="py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-sans font-bold block mb-6">Filosofia</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Não construímos apenas chalés.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
              Cada projeto representa um espaço pensado para determinado estilo de vida, objetivo e ambiente. Acreditamos que seu refúgio deve ser uma extensão da sua identidade e uma resposta ao seu terreno.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="border-l-2 border-primary/20 pl-6 py-2">
                <p className="text-sm font-medium italic">"Cada terreno é diferente. Cada cliente é diferente. Cada projeto deve ser único."</p>
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
                src={chale_1.url} 
                alt="Conceito Arquitetônico"
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

const PROJETOS = [
  {
    id: 1,
    name: "Chalé Contemporâneo",
    category: "Arquitetura Moderna",
    description: "Geometria limpa e integração máxima com o exterior através de grandes vãos de vidro.",
    image: chale_1.url,
  },
  {
    id: 2,
    name: "Chalé Alpine Elite",
    category: "Conceito Nordic",
    description: "A-frame reinterpretado com materiais nobres e foco em conforto térmico extremo.",
    image: chale_2.url,
  },
  {
    id: 3,
    name: "Chalé Hillside",
    category: "Integração Natureza",
    description: "Projeto suspenso adaptado a terrenos íngremes, preservando a vegetação nativa.",
    image: chale_3.url,
  },
  {
    id: 4,
    name: "Studio Minimalista",
    category: "Design Compacto",
    description: "Eficiência espacial sem abrir mão do luxo e da sofisticação arquitetônica.",
    image: chale_4.url,
  }
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-32 bg-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-sans font-bold block mb-4">Portfólio</span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-[0.8]">Projetos que dão forma às ideias.</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJETOS.map((projeto, idx) => (
            <motion.div 
              key={projeto.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx % 2 * 0.2, duration: 1 }}
              className={cn("group cursor-pointer", idx % 2 === 1 ? "md:mt-32" : "")}
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                <img 
                  src={projeto.image} 
                  alt={projeto.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-6 left-6 text-white text-[10px] uppercase tracking-widest font-bold bg-primary px-4 py-2">
                  {projeto.category}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="max-w-md">
                  <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-2 block">Projeto 0{projeto.id}</span>
                  <h3 className="text-4xl font-serif font-bold mb-4">{projeto.name}</h3>
                  <p className="text-muted-foreground text-base mb-8 leading-relaxed">{projeto.description}</p>
                  <Link 
                    to="/chale/$chaleId" 
                    params={{ chaleId: projeto.id.toString() }}
                    className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold"
                  >
                    <span>Explorar Projeto</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
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
    author: "Marina Siqueira",
    role: "Designer de Interiores",
    content: "Uma experiência transformadora. O cuidado com o design e a tecnologia é algo que nunca vi igual no Brasil. Voltarei com certeza.",
    rating: 5,
  },
  {
    id: 2,
    author: "Ricardo Fontes",
    role: "Empresário",
    content: "O refúgio perfeito para quem busca desconectar sem abrir mão do luxo. O atendimento é impecável e a privacidade é o ponto alto.",
    rating: 5,
  },
  {
    id: 3,
    author: "Elena Cavalcanti",
    role: "Fotógrafa",
    content: "Cada ângulo deste lugar é uma obra de arte. A luz, os materiais, a paz... Chalés IA elevou meu padrão para o que chamo de hospedagem boutique.",
    rating: 5,
  }
];

export const SocialProof = () => {
  return (
    <section className="py-24 md:py-40 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-sans font-bold block mb-6">Depoimentos</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
              O que dizem nossos convidados
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background overflow-hidden bg-muted">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Guest" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-primary mb-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs uppercase tracking-widest font-sans font-bold">500+ Estadias Concluídas</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.slice(0, 2).map((review) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-10 relative"
              >
                <Quote className="absolute top-6 right-6 text-primary/10" size={60} />
                <div className="flex text-primary mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg leading-relaxed mb-8 relative z-10 italic font-serif">
                  "{review.content}"
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">{review.author}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-24 border-t border-border/10">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-12">Destaque em Publicações de Prestígio</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {["VOGUE", "ARCHITECTURAL DIGEST", "TRAVEL + LEISURE", "CONDE NAST", "MONOCLE"].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-serif font-bold tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const BookingForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("name");
    const email = formData.get("email");
    const checkin = formData.get("checkin");
    const checkout = formData.get("checkout");
    const guests = formData.get("guests");
    const whatsapp = formData.get("whatsapp");
    const message = formData.get("message");

    const text = `Olá! Gostaria de solicitar um orçamento para os Chalés IA.%0A%0A*Detalhes da Solicitação:*%0A- *Nome:* ${name}%0A- *E-mail:* ${email}%0A- *Check-in:* ${checkin}%0A- *Check-out:* ${checkout}%0A- *Hóspedes:* ${guests}%0A- *WhatsApp:* ${whatsapp}%0A${message ? `- *Preferências:* ${message}` : ""}%0A%0AAguardamos o contato com a proposta personalizada.`;
    
    window.open(`https://wa.me/5582999357645?text=${text}`, "_blank");
  };

  return (
    <section id="orcamento" className="py-24 md:py-40 px-6">
      <div className="max-w-4xl mx-auto bg-card p-8 md:p-20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
        
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Planeje sua estadia</h2>
          <p className="text-muted-foreground">Preencha os dados abaixo e entraremos em contato com uma proposta personalizada.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-muted-foreground/60">Nome Completo</label>
            <input name="name" type="text" required className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-sm" placeholder="Ex: Maria Silva" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-muted-foreground/60">E-mail de Contato</label>
            <input name="email" type="email" required className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-sm" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-muted-foreground/60">Data de Check-in</label>
            <input name="checkin" type="date" required className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-sm [color-scheme:dark]" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-muted-foreground/60">Data de Check-out</label>
            <input name="checkout" type="date" required className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-sm [color-scheme:dark]" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-muted-foreground/60">Quantidade de Hóspedes</label>
            <select name="guests" className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors appearance-none text-sm">
              <option value="1 Hóspede">1 Hóspede</option>
              <option value="2 Hóspedes (Casal)">2 Hóspedes (Casal)</option>
              <option value="3 ou mais Hóspedes">3 ou mais Hóspedes</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-muted-foreground/60">WhatsApp</label>
            <input name="whatsapp" type="tel" className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors text-sm" placeholder="(00) 00000-0000" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-muted-foreground/60">Preferências ou Ocasião Especial</label>
            <textarea name="message" className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors resize-none text-sm" rows={2} placeholder="Ex: Aniversário de casamento, preferência por chalé com vista específica..."></textarea>
          </div>
          
          <div className="md:col-span-2 pt-8">
            <button type="submit" className="w-full bg-primary text-primary-foreground py-6 uppercase tracking-[0.3em] font-bold text-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/10">
              Verificar Disponibilidade & Solicitar Orçamento
            </button>
            <p className="text-[10px] text-center mt-6 text-muted-foreground uppercase tracking-widest opacity-50">Resposta em até 24 horas úteis</p>
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
            Uma experiência de hospedagem onde a inovação e o design se encontram com o luxo contemporâneo.
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
            <li><a href="/" className="hover:text-primary transition-colors">Início</a></li>
            <li><a href="/#experiencia" className="hover:text-primary transition-colors">A Experiência</a></li>
            <li><a href="/#chales" className="hover:text-primary transition-colors">Acomodações</a></li>
            <li><a href="/avaliacoes" className="hover:text-primary transition-colors">Avaliações</a></li>
            <li><a href="/#orcamento" className="hover:text-primary transition-colors">Orçamentos</a></li>
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
