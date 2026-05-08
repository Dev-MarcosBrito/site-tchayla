import { FadeIn } from "./FadeIn.jsx";

export function Hero() {
  const heroBgImage = `linear-gradient(
    105deg,
    rgba(43, 26, 16, 0.88) 0%,
    rgba(67, 49, 38, 0.65) 45%,
    rgba(43, 26, 16, 0.45) 100%
  ), url("${import.meta.env.BASE_URL}img/escritorio.png")`;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-start text-off-white pt-24 pb-16"
      aria-labelledby="hero-heading"
      style={{ "--hero-bg-image": heroBgImage }}
    >
      <div className="container mx-auto max-w-6xl px-5 sm:px-6 w-full">
        <FadeIn className="max-w-2xl text-left">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-5">
            Advocacia Previdenciária & Consultoria
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-9 text-off-white/90 leading-relaxed max-w-xl">
            Orientação jurídica em Direito Previdenciário, com atendimento online e atuação voltada à análise individual
            de cada caso.
          </p>
          <a
            href="#contato"
            className="accent-color text-off-white font-bold py-3.5 px-8 sm:px-10 rounded-xl text-base sm:text-lg shadow-card hover:shadow-xl transition-all duration-300 inline-flex items-center hover:-translate-y-0.5"
          >
            ENTRE EM CONTATO
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
