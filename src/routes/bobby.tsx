import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { 
  Navbar, 
  Hero, 
  Philosophy, 
  Process, 
  Details, 
  Projects, 
  Investment, 
  BookingForm, 
  Footer, 
  WhatsAppButton 
} from "@/components/landing";
import logoBobbyAsset from "@/assets/logo-bobby.png.asset.json";
import { motion } from "framer-motion";

export const Route = createFileRoute("/bobby")({
  component: BobbyProjectPage,
});

function BobbyProjectPage() {
  const bobbyProjects = [
    {
      id: 1,
      name: "Cozinha Minimalista",
      category: "Planejados",
      description: "Móveis sob medida com acabamento em laca fosca e puxadores ocultos.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Dormitório Master",
      category: "Interiores",
      description: "Roupeiro com portas de vidro reflecta e iluminação interna em LED.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Home Office Executive",
      category: "Corporativo",
      description: "Estação de trabalho ergonômica com painéis amadeirados de alta resistência.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Sala de Estar Integrada",
      category: "Painéis",
      description: "Painel ripado em carvalho natural com prateleiras flutuantes.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=2000&auto=format&fit=crop",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar logoOverride={logoBobbyAsset.url} />
      
      {/* Custom Hero for Bobby */}
      <section className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
            alt="Interiores de Luxo Bobby"
            className="w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-12"
          >
            <div className="bg-black/30 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full">
              <span className="text-white/90 text-[10px] uppercase tracking-[0.6em] font-sans font-medium">
                Bobby Móveis & Decorações
              </span>
            </div>
          </motion.div>
          
          <h1 className="text-7xl md:text-[11rem] font-serif font-bold leading-[0.75] mb-16 tracking-tighter text-white">
            <span className="text-brand-gold">Móveis</span> <br />
            <span className="italic text-primary/90 font-medium">com alma.</span>
          </h1>
        </div>
      </section>

      <Projects 
        items={bobbyProjects} 
        title="Ambientes que" 
        subtitle="transformam" 
      />
      
      <BookingForm />
      <Footer logoOverride={logoBobbyAsset.url} />
      <WhatsAppButton />
    </div>
  );
}
