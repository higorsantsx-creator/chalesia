import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Hero, Experience, Accommodations, BookingForm, Footer, SocialProof } from "@/components/landing";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Chalés IA | Luxo e Natureza em Harmonia",
    meta: [
      { name: "description", content: "Descubra uma experiência de hospedagem boutique exclusiva, onde o luxo discreto encontra o aconchego da natureza. Chalés IA: Seu refúgio cinematográfico." },
      { property: "og:title", content: "Chalés IA | Experiência de Hospedagem Premium" },
      { property: "og:description", content: "Sinta a natureza, viva o luxo. Reserve sua estadia nos Chalés IA." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Accommodations />
        <SocialProof />
        <BookingForm />
      </main>
      <Footer />
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
}
