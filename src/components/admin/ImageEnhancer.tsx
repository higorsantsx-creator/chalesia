import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, RefreshCw, AlertCircle, Maximize2, Image as ImageIcon } from 'lucide-react';
import { enhanceImageWithAI, type EnhancedImageResponse } from '@/lib/image-enhancement.functions';
import { useServerFn } from '@tanstack/react-start';

interface ImageEnhancerProps {
  imageUrl: string;
  onEnhanced?: (result: EnhancedImageResponse) => void;
  className?: string;
}

export const ImageEnhancer = ({ imageUrl, onEnhanced, className }: ImageEnhancerProps) => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle');
  const [result, setResult] = useState<EnhancedImageResponse | null>(null);
  const enhanceFn = useServerFn(enhanceImageWithAI);

  const handleEnhance = async () => {
    try {
      setStatus('processing');
      const response = await enhanceFn({ 
        data: {
          imageUrl,
          upscaleFactor: '2x',
          preserveDetails: true,
          optimizeForWeb: true
        }
      });
      
      setResult(response);
      setStatus('done');
      if (onEnhanced) onEnhanced(response);
    } catch (error) {
      console.error('Enhancement error:', error);
      setStatus('error');
    }
  };

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-sm border border-border/10 bg-muted/5 p-4 group">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm overflow-hidden bg-muted/20 flex items-center justify-center">
              {imageUrl ? (
                <img src={imageUrl} alt="Thumbnail" className="w-full h-full object-cover" />
              ) : (
                <ImageIcon size={20} className="text-muted-foreground" />
              )}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold truncate max-w-[150px]">
                {imageUrl?.split('/').pop() || "Imagem"}
              </p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest mt-1">
                {status === 'idle' && "Original"}
                {status === 'processing' && "Processando..."}
                {status === 'done' && "Aprimorada 2x"}
                {status === 'error' && "Erro"}
              </p>
            </div>
          </div>

          <button
            onClick={handleEnhance}
            disabled={status === 'processing'}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-[9px] uppercase tracking-widest font-bold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50"
          >
            {status === 'processing' ? (
              <RefreshCw size={12} className="animate-spin" />
            ) : status === 'done' ? (
              <Check size={12} />
            ) : (
              <Sparkles size={12} />
            )}
            {status === 'done' ? "Refazer" : "Melhorar com IA"}
          </button>
        </div>

        <AnimatePresence>
          {status === 'processing' && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              transition={{ duration: 2.5, ease: "linear" }}
            />
          )}
        </AnimatePresence>
      </div>

      {status === 'done' && result && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-2 p-3 bg-primary/5 border border-primary/10 rounded-sm text-[9px] uppercase tracking-widest"
        >
          <div className="flex justify-between items-center text-primary font-bold">
            <span>Resolução Final: {result.enhancedResolution?.width}x{result.enhancedResolution?.height}</span>
            <span>{result.processingTime}s</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const ImageComparisonModal = ({ 
  beforeUrl, 
  afterUrl, 
  isOpen, 
  onClose 
}: { 
  beforeUrl: string; 
  afterUrl: string; 
  isOpen: boolean; 
  onClose: () => void 
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 backdrop-blur-xl">
      <div className="relative w-full max-w-5xl aspect-video bg-card border border-border/10 rounded-sm overflow-hidden shadow-2xl">
        <div className="absolute inset-0 select-none" onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          setSliderPos(x);
        }}>
          {/* After (Enhanced) */}
          <img src={afterUrl} className="absolute inset-0 w-full h-full object-cover" alt="Depois" />
          
          {/* Before (Original) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white shadow-xl"
            style={{ width: `${sliderPos}%` }}
          >
            <img src={beforeUrl} className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: `${10000 / sliderPos}%` }} alt="Antes" />
            <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-sm text-white text-[10px] uppercase tracking-widest font-bold">
              Original
            </div>
          </div>
          
          <div className="absolute top-8 right-8 bg-primary/80 backdrop-blur-md px-4 py-2 rounded-sm text-white text-[10px] uppercase tracking-widest font-bold">
            IA Aprimorada
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute inset-y-0 w-1 bg-white cursor-ew-resize pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Maximize2 size={16} className="text-black" />
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-6 left-6 z-20 w-10 h-10 bg-black/50 text-white flex items-center justify-center rounded-full hover:bg-black transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
};
