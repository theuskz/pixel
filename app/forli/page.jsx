import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
    title: "Portal Encantos de Forli | Apartamentos BRZ em Lavras",
    description:
        "Apartamentos com lazer completo no bairro Nova Era. Financiamento facilitado e atendimento com corretor exclusivo BRZ.",
};

const whatsappForli =
    "https://wa.me/5535999399854?text=Olá!%20Quero%20saber%20valores%20do%20Portal%20Encantos%20de%20Forli.";

export default function ForliPage() {
    return (
        <main className="w-full">

            {/* HERO */}
            <section className="bg-[#9F060C] text-white py-24">
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
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Portal Encantos de Forli
                        </h1>
                        <p className="text-lg mb-2">Lazer completo no bairro Nova Era</p>
                        <p className="text-white/90 mb-6">
                            Ideal para morar ou investir • Financiamento facilitado
                        </p>

                        <div className="bg-white/15 p-4 rounded-xl mb-8">
                            <p className="text-sm">
                                ✔ Use FGTS • ✔ Entrada facilitada • ✔ Minha Casa Minha Vida
                            </p>
                        </div>

                        <Link
                            href={whatsappForli}
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-white text-[#9F060C] font-bold px-6 py-4 rounded-xl"
                        >
                            Simular financiamento <FaWhatsapp />
                        </Link>
                    </div>

                    <Image
                        src="/forli1.jpeg"
                        alt="Portal Encantos de Forli"
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
                        src="/forli2.jpeg"
                        alt="Detalhes do empreendimento"
                        width={500}
                        height={350}
                        className="rounded-2xl shadow-lg"
                    />
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Conforto e praticidade no dia a dia
                        </h2>
                        <p className="text-gray-700">
                            Plantas inteligentes, lazer entregue decorado e localização que
                            facilita sua rotina e valoriza seu investimento.
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
                    <h2 className="text-3xl font-bold text-center mb-12">Diferenciais</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            "Lazer completo entregue decorado",
                            "Plantas de 2 quartos",
                            "Bairro Nova Era",
                            "Infraestrutura moderna",
                            "Serviços exclusivos",
                            "Alto potencial de valorização",
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
                            href={whatsappForli}
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-[#9F060C] text-white px-8 py-4 rounded-xl font-bold"
                        >
                            Falar com corretor <FaWhatsapp />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}