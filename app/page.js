"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Home() {
  const whatsappLink = "https://wa.me/5535999399854?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20os%20empreendimentos%20BRZ.";

  return (
    <div className="flex flex-col">

      {/* HEADER */}
      <header className="bg-[#F2E500] w-full h-[70px] flex justify-between items-center px-4 sm:px-12 fixed top-0 z-50 shadow">
        <div className="flex items-center space-x-2">
          <Image src="/brz.png" alt="BRZ Empreendimentos" width={90} height={90} />
          <h1 className="font-extrabold text-sm sm:text-lg">BRZ Empreendimentos</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="hover:opacity-70">Início</a>
          <a href="#empreendimentos" className="hover:opacity-70">Empreendimentos</a>
          <a href="#contato" className="hover:opacity-70">Contato</a>
          <Link
            href={whatsappLink}
            target="_blank"
            className="bg-black text-white px-4 py-2 rounded-lg font-semibold"
          >
            WhatsApp
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-700 flex flex-col sm:flex-row items-center justify-center gap-12 px-6 pt-28"
      >
        <div className="max-w-xl text-center sm:text-left">
          <h2 className="text-white text-4xl font-extrabold">
            Apartamentos BRZ em Lavras
          </h2>

          <p className="text-[#F2E500] text-3xl font-bold mt-3">
            Financiamento facilitado
          </p>

          <p className="text-white mt-5">
            Sou corretor exclusivo BRZ e te acompanho do primeiro contato até a entrega das chaves.
          </p>

          <Link
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-bold px-6 py-4 rounded-xl mt-8"
          >
            Falar agora no WhatsApp <FaWhatsapp />
          </Link>
        </div>

        <Image
          src="/equipe.jpeg"
          alt="Equipe BRZ"
          width={420}
          height={320}
          className="rounded-2xl shadow-xl"
          priority
        />
      </section>

      {/* AUTORIDADE */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Atendimento personalizado</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Corretor exclusivo BRZ em Lavras, com atendimento humano e transparente para você comprar com segurança.
          </p>
        </div>
      </section>

      {/* EMPREENDIMENTOS */}
      <section id="empreendimentos" className="py-20 bg-stone-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Empreendimentos disponíveis</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* TARANTO */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <Image src="/taranto1.png" alt="Portal Muralhas de Taranto" width={400} height={220} className="rounded-xl" />
            <h3 className="text-xl font-bold mt-4">Portal Muralhas de Taranto</h3>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>✔ Torres com elevador</li>
              <li>✔ Excelente localização</li>
              <li>✔ Ideal para morar ou investir</li>
            </ul>
            <Link href="/taranto" className="mt-6 bg-[#00674F] text-black font-semibold py-3 rounded-xl text-center">
              Quero saber valores
            </Link>
          </div>

          {/* FORLI */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <Image src="/forli.png" alt="Portal Encantos de Forli" width={400} height={220} className="rounded-xl" />
            <h3 className="text-xl font-bold mt-4">Portal Encantos de Forli</h3>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>✔ Lazer completo</li>
              <li>✔ Bairro Nova Era</li>
              <li>✔ Alto potencial de valorização</li>
            </ul>
            <Link href="/forli" className="mt-6 bg-[#9F060C] text-white font-semibold py-3 rounded-xl text-center">
              Simular financiamento
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="py-20 bg-black text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Vamos conversar?</h2>
        <p className="text-white/80 mb-8">Clique no botão abaixo e fale direto com um corretor no WhatsApp.</p>
        <Link
          href={whatsappLink}
          target="_blank"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-bold px-8 py-5 rounded-2xl text-lg"
        >
          Chamar no WhatsApp <FaWhatsapp />
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2025 BRZ Empreendimentos</p>
          <div className="flex gap-4 text-white/60">
            <a href="https://www.linkedin.com/company/brz-empreendimentos" target="_blank"><CiLinkedin size={20} /></a>
            <a href="https://www.instagram.com/housebrz.lavras/" target="_blank"><FaInstagram size={18} /></a>
            <a href={whatsappLink} target="_blank"><FaWhatsapp size={18} /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
