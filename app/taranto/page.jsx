import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Portal Muralhas de Taranto | Apartamentos BRZ em Lavras",
  description:
    "Apartamentos BRZ com elevador, localização estratégica e financiamento facilitado. Atendimento com corretor exclusivo BRZ.",
};

const whatsappTaranto =
  "https://wa.me/5535999399854?text=Olá!%20Quero%20saber%20valores%20do%20Portal%20Muralhas%20de%20Taranto.";

export default function TarantoPage() {
  return (
    <main className="w-full relative">

      {/* BOTÃO VOLTAR */}

      {/* HERO */}
      <section className="bg-[#00674F] py-24">
        <Link
          href="/"
          className="w-[90px] -mt-16 mb-14   ml-10 flex items-center gap-1
                   bg-white/80 backdrop-blur
                   text-gray-700 text-sm font-medium
                   px-3 py-2 rounded-full
                   shadow hover:bg-white transition"
        >
          <HiArrowLeft className="text-lg" />
          Voltar
        </Link>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Portal Muralhas de Taranto
            </h1>

            <p className="text-lg text-white/90 mb-2">
              Apartamentos com elevador em localização estratégica
            </p>

            <p className="text-white/70 mb-6">
              Ideal para morar ou investir • Financiamento facilitado
            </p>

            <div className="bg-white/10 p-4 rounded-xl mb-8">
              <p className="text-sm font-medium text-white">
                ✔ Use FGTS • ✔ Minha Casa Minha Vida • ✔ Entrada facilitada
              </p>
            </div>

            <Link
              href={whatsappTaranto}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-bold px-6 py-4 rounded-xl"
            >
              Quero saber valores <FaWhatsapp />
            </Link>
          </div>

          <Image
            src="/page1.jpeg"
            alt="Portal Muralhas de Taranto"
            width={520}
            height={360}
            className="rounded-2xl shadow-xl"
            priority
          />
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/page2.jpeg"
            alt="Detalhes do empreendimento"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Qualidade BRZ em cada detalhe
            </h2>

            <p className="text-gray-700">
              Projeto moderno, torres com elevador e infraestrutura completa para
              conforto, segurança e valorização do seu patrimônio.
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Atendimento direto com corretor exclusivo BRZ em Lavras.
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Diferenciais
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Torres com elevador",
              "Localização estratégica",
              "Plantas de 2 quartos",
              "Área de lazer para a família",
              "Infraestrutura completa",
              "Excelente potencial de valorização",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-center font-medium"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={whatsappTaranto}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold"
            >
              Falar com corretor <FaWhatsapp />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
