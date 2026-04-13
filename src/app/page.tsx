import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import DemoWork from "@/components/DemoWork";
import Services from "@/components/Services";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <DemoWork />
      <Services />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
