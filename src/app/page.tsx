import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Portfolio,
  Services,
  Team,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
