import { FadeIn } from "./FadeIn.jsx";
import { IconBuilding, IconDocument, IconPencil, IconShield, IconUsers } from "./ServiceIcons.jsx";

const SERVICES = [
  {
    title: "Aposentadoria",
    body: "Orientação jurídica para quem deseja solicitar aposentadoria junto ao INSS. Cada situação precisa ser analisada de forma individual, considerando tempo de contribuição, idade e histórico previdenciário.",
    Icon: IconBuilding,
  },
  {
    title: "Auxílio-Doença",
    body: "Atendimento para pessoas que estão temporariamente impossibilitadas de trabalhar por problemas de saúde. Muitas vezes, a falta de informação ou documentação adequada pode dificultar a análise do benefício pelo INSS.",
    Icon: IconDocument,
  },
  {
    title: "Salário-Maternidade",
    body: "Orientação sobre o benefício destinado às mães em casos de nascimento, adoção ou guarda judicial. Em algumas situações, mesmo sem carteira assinada, pode existir direito ao benefício previdenciário.",
    Icon: IconUsers,
  },
  {
    title: "Auxílio-Acidente",
    body: "Atuação em casos de acidentes que deixaram sequelas e reduziram a capacidade de trabalho do segurado. Muitas pessoas não sabem que podem ter direito a esse benefício mesmo continuando trabalhando.",
    Icon: IconPencil,
  },
  {
    title: "Pensão por Morte",
    body: "Assessoria jurídica para dependentes que buscam informações sobre o benefício pago pelo INSS após o falecimento do segurado. A análise do caso é importante para verificar requisitos e documentação necessária.",
    Icon: IconShield,
  },
  {
    title: "BPC/LOAS",
    body: "Orientação para idosos e pessoas com deficiência que buscam o Benefício de Prestação Continuada (BPC/LOAS). O benefício é destinado a pessoas em situação de vulnerabilidade social e exige análise dos requisitos previstos em lei.",
    Icon: IconShield,
  },
];

export function Atuacao() {
  return (
    <section id="atuacao" className="py-16 sm:py-20 md:py-24 bg-off-white/80 scroll-mt-28" aria-labelledby="atuacao-heading">
      <div className="container mx-auto max-w-6xl px-5 sm:px-6">
        <FadeIn as="header" className="text-center mb-12 sm:mb-16">
          <h2 id="atuacao-heading" className="text-3xl sm:text-4xl font-bold mb-3 text-cafe">
            Benefícios | INSS
          </h2>
          <p className="text-lg text-chocolate/80 max-w-2xl mx-auto leading-relaxed">
            Soluções jurídicas especializadas para proteger seus direitos e interesses.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map(({ title, body, Icon }) => (
            <FadeIn
              key={title}
              as="article"
              className="bg-white border border-cafe/5 p-7 sm:p-8 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="accent-color text-off-white w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-inner" aria-hidden>
                <Icon />
              </div>
              <h3 className="text-xl font-bold mb-2 text-cafe">{title}</h3>
              <p className="text-chocolate/75 leading-relaxed">{body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
