import { About, Contact, Footer, Gallery, Header, Hero, Portfolio, Reviews, Services, Team } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
