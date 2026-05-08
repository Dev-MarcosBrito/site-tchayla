import { About } from "./components/About.jsx";
import { Atuacao } from "./components/Atuacao.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <About />
        <Atuacao />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
