import { FadeIn } from "./FadeIn.jsx";

export function Contact() {
  return (
    <section
      id="contato"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-off-white to-white border-t border-cafe/5 scroll-mt-28"
      aria-labelledby="contato-heading"
    >
      <div className="container mx-auto max-w-6xl px-5 sm:px-6 text-center">
        <FadeIn className="max-w-2xl mx-auto">
          <h2 id="contato-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-cafe">
            Precisa de Orientação Previdenciária?
          </h2>
          <p className="text-lg text-chocolate/80 mb-6 leading-relaxed">
            Atendimento jurídico online em todo o Brasil, com orientação individualizada para questões relacionadas ao
            INSS e benefícios previdenciários.
          </p>
          <p className="text-chocolate/75 mb-8 leading-relaxed">
            Entre em contato para esclarecer dúvidas e receber informações sobre o seu caso.
          </p>
          <a
            href="mailto:advogadatchayla@gmail.com"
            className="accent-color text-off-white font-bold py-4 px-10 rounded-xl text-lg shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 inline-block"
          >
            ENTRE EM CONTATO
          </a>
          <p className="mt-5 text-sm text-chocolate/60">Retornamos seu contato em até 24 horas.</p>
        </FadeIn>
      </div>
    </section>
  );
}
