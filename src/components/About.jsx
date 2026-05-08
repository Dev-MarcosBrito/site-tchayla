import { FadeIn } from "./FadeIn.jsx";

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-24 bg-white border-y border-cafe/5" aria-labelledby="sobre-heading">
      <div className="container mx-auto max-w-6xl px-5 sm:px-6">
        <FadeIn
          as="article"
          className="max-w-5xl mx-auto bg-off-white rounded-[2.5rem] md:rounded-[3rem] shadow-card overflow-hidden flex flex-col lg:flex-row items-stretch border border-cafe/5"
        >
          {/* Foto */}
          <div className="w-full lg:w-[46%]">
            <figure className="m-0 h-[340px] sm:h-[380px] lg:h-full overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}img/advogados.png`}
                alt="Otavio e Regina Pereira, fundadores do escritório AdvocaIA"
                className="h-full w-full object-cover rounded-[2.25rem] rounded-tr-[5rem] rounded-br-[2.5rem] lg:rounded-l-[2.5rem] lg:rounded-r-[0rem] lg:rounded-tr-[6rem] lg:rounded-br-[2.75rem]"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          {/* Texto (topo alinhado) */}
          <div className="w-full lg:w-[54%] text-chocolate/90">
            <div className="px-6 sm:px-8 py-8 sm:py-10 space-y-4 text-justify leading-[1.75] text-[0.98rem] sm:text-base lg:h-full flex flex-col justify-start">
              <div>
                <h2 id="sobre-heading" className="text-2xl sm:text-3xl font-bold mb-1 text-cafe">
                  Tchayla Sousa
                </h2>
                <p className="text-base sm:text-lg text-chocolate/80">Advogada | Direito Previdenciário</p>
              </div>

              <div className="pt-1 space-y-5">
                <p className="m-0">
                  Sou advogada atuante na área de Direito Previdenciário, com atendimento jurídico realizado de forma online
                  em todo o território nacional. Minha atuação é voltada à orientação e acompanhamento de pessoas que
                  buscam compreender seus direitos perante o INSS. Acredito que o acesso à informação jurídica clara e ao
                  atendimento humanizado faz diferença em momentos importantes da vida do cliente. Por isso, busco oferecer
                  um atendimento individualizado, com atenção às particularidades de cada caso e condução responsável de cada
                  demanda. Atuo em questões relacionadas a benefícios previdenciários, auxílio-doença, aposentadorias, pensão
                  por morte, salário-maternidade e demais demandas junto à Previdência Social, sempre prezando pela ética,
                  transparência e compromisso profissional. Meu objetivo é proporcionar um atendimento acessível e
                  organizado, permitindo que clientes de qualquer lugar do Brasil tenham orientação jurídica de forma online
                  e prática.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 text-center">
          <FadeIn as="article" className="bg-off-white border border-cafe/5 p-7 sm:p-8 rounded-2xl shadow-card hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 accent-color-text">Formação</h3>
            <p className="text-chocolate/75 leading-relaxed">Bacharelado em Direito</p>
          </FadeIn>
          <FadeIn as="article" className="bg-off-white border border-cafe/5 p-7 sm:p-8 rounded-2xl shadow-card hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 accent-color-text">Atuação</h3>
            <p className="text-chocolate/75 leading-relaxed">Direito Previdenciário</p>
          </FadeIn>
          <FadeIn
            as="article"
            className="bg-off-white border border-cafe/5 p-7 sm:p-8 rounded-2xl shadow-card hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 accent-color-text">Nossos Valores</h3>
            <p className="text-chocolate/75 leading-relaxed">Online em todo o Brasil</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
