import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Hero, Experience, Accommodations, BookingForm, Footer, SocialProof } from "@/components/landing";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Chalés IA | Arquitetura de Luxo & Design",
    meta: [
      { name: "description", content: "Experiência de hospedagem premium em chalés de design moderno. Onde o luxo encontra a inovação e o conforto absoluto." },
      { property: "og:title", content: "Chalés IA - Refúgios de Design" },
      { property: "og:description", content: "Hospedagem boutique com arquitetura icônica e conforto premium." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop" },
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
