import { createFileRoute } from '@tanstack/react-router';
import { Navbar, Footer } from '@/components/landing';
import { ImageEnhancer } from '@/components/admin/ImageEnhancer';
import { Sparkles, Image as ImageIcon, CheckCircle, Zap } from 'lucide-react';
import React from 'react';

// Mock list of project images for the interface
const PROJECT_IMAGES = [
  { id: '1', name: 'hero-chale-new.png', url: '/__l5e/assets-v1/00181121-6c24-4b68-a3e7-4b2e14ac2789/hero-chale-new.png', size: '2.1 MB', res: '1920x1080' },
  { id: '2', name: 'chale-alpine-pool.png', url: '/__l5e/assets-v1/chale_alpine_pool.png', size: '1.5 MB', res: '1280x720' },
  { id: '3', name: 'chale-arquitetura-organica.jpg', url: '/__l5e/assets-v1/chale-arquitetura-organica.jpg', size: '800 KB', res: '1024x1024' },
  { id: '4', name: 'interior-chale.png', url: '/__l5e/assets-v1/interior-chale.png', size: '3.2 MB', res: '2560x1440' },
];

export const Route = createFileRoute('/admin/images')({
  component: AdminImagesPage,
});

function AdminImagesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20">
            <div className="flex items-center gap-4 text-primary mb-6">
              <Zap size={20} />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Laboratório de Ativos</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-8">
              Gestão de <span className="italic font-medium text-primary">Imagens & IA</span>
            </h1>
            <p className="text-muted-foreground text-lg font-serif italic max-w-2xl">
              Melhore a qualidade visual do seu site utilizando processamento neural. Detectamos automaticamente imagens de baixa resolução e sugerimos otimizações.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Stats */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card border border-border/10 p-8 rounded-sm">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-8">Status do Sistema</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-serif">Imagens Totais</span>
                    <span className="text-sm font-bold">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-serif">Aprimoradas via IA</span>
                    <span className="text-sm font-bold text-primary">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-serif">Baixa Resolução</span>
                    <span className="text-sm font-bold text-destructive">4</span>
                  </div>
                </div>
                <button className="w-full mt-10 py-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold rounded-sm hover:scale-[1.02] transition-all">
                  Processar Tudo (Batch)
                </button>
              </div>

              <div className="bg-primary/5 border border-primary/10 p-8 rounded-sm">
                <div className="flex items-center gap-4 text-primary mb-6">
                  <Sparkles size={16} />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold">Dica de IA</h4>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground font-serif italic">
                  "Recomendamos fazer upscale de 4x na imagem da Hero para garantir nitidez perfeita em telas Retina 5K."
                </p>
              </div>
            </div>

            {/* List */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">Galeria de Ativos</h3>
              {PROJECT_IMAGES.map((img) => (
                <ImageEnhancer 
                  key={img.id} 
                  imageUrl={img.url} 
                  className="w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
