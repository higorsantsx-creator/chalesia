import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Hero, Philosophy, Projects, Process, Details, Investment, BookingForm, Footer, SocialProof, WhatsAppButton, Catalog } from "@/components/landing";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll, CustomCursor } from "@/components/ui/smooth-scroll";


export const Route = createFileRoute("/")({
  head: () => ({
    title: "Chalés IA | Arquitetura & Construção de Chalés Premium",
    meta: [
      { name: "description", content: "Projetamos e construímos chalés de alto padrão. Transformamos seu refúgio dos sonhos em realidade com arquitetura contemporânea e exclusiva." },
      { property: "og:title", content: "Chalés IA - Do Projeto à Realidade" },
      { property: "og:description", content: "Especialistas em construção de chalés premium e arquitetura autoral." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=90&w=2000&auto=format&fit=crop" },

      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <CustomCursor />
      <SmoothScroll>
        <main>
          <Hero />
          <Philosophy />
          <Projects />
          <Process />
          <Catalog />
          <Details />
          <Investment />
          <SocialProof />
          <BookingForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </SmoothScroll>

      <Toaster position="top-center" expand={false} richColors />

    </div>
  );
}
