"use client";

import Image from "next/image";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* HEADER */}
      <header className="bg-[#F2E500] w-full h-[70px] flex justify-between items-center px-4 sm:px-12 fixed top-0 z-50">
        <div className="flex items-center space-x-2">
          <Image
            src="/brz.png"
            alt="Logo BRZ"
            priority
            width={95}
            height={95}
            className="object-contain"
          />
          <h1 className="text-black font-extrabold text-sm sm:text-xl">
            BRZ EMPREENDIMENTOS
          </h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="text-black hover:text-gray-700 transition">Início</a>
          <a href="#empreendimentos" className="text-black hover:text-gray-700 transition">Empreendimentos</a>
          <a href="#contato" className="text-black hover:text-gray-700 transition">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="bg-gradient-to-b from-stone-800 to-stone-600 min-h-screen flex flex-col sm:flex-row justify-center items-center gap-10 px-4 pt-28"
      >
        {/* TEXTO */}
        <div className="max-w-[500px] text-center sm:ml-56 sm:text-left">
          <h2 className="text-white text-3xl font-mono font-extrabold">
            Garanta já seu empreendimento com a
          </h2>

          <p className="text-[#f2e500] text-4xl font-bold drop-shadow-[2px_2px_0px_black] mt-2">
            BRZ
          </p>

          <p className="text-white font-mono mt-4">
            Ajudamos você a conquistar seu primeiro imóvel ou realizar seu primeiro investimento
          </p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/5535999399854?text=Olá, gostaria de saber mais sobre os empreendimentos da BRZ",
                "_blank"
              )
            }
            className="bg-white w-full sm:w-[220px] h-[45px] rounded-lg font-mono text-black text-lg font-extrabold mt-6"
          >
            Conheça Mais
          </button>
        </div>

        {/* IMAGEM HERO — CENTRALIZADA NO MOBILE */}
        <div className="flex justify-center w-full">
          <Image
            src="/equipe.jpeg"
            alt="Equipe BRZ"
            priority
            width={380}
            height={300}
            className="rounded-xl w-[280px] sm:w-[380px]"
          />
        </div>
      </section>

      {/* PARCEIROS */}
      <section
        className="w-full bg-[#F2E500] flex flex-col sm:flex-row justify-between items-center py-4 px-6 gap-4"
      >
        <div className="-space-y-1 text-center sm:text-left">
          <h1 className="text-black font-bold text-lg">Nossos</h1>
          <h1 className="text-black font-bold text-lg">Parceiros</h1>
        </div>

        {/* IMAGENS MENORES NO MOBILE */}
        <div className="flex items-center space-x-6">
          <Image
            src="/caixa.png"
            alt="Caixa"
            width={90}
            height={30}
            className="sm:w-[120px]"
          />

          <Image
            src="/programa.png"
            alt="Minha Casa Minha Vida"
            width={130}
            height={45}
            className="sm:w-[180px]"
          />
        </div>
      </section>

      {/* EMPREENDIMENTOS */}
      <section
        id="empreendimentos"
        className="flex flex-col items-center gap-12 mt-12 px-4"
      >
        {/* TARANTO */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row gap-6 w-full max-w-[900px]">
          <div className="relative w-full sm:w-[400px] h-[200px]">
            <Image
              src="/taranto.png"
              alt="Portal Muralhas de Taranto"
              fill
              className="object-contain rounded-xl"
            />
          </div>

          <div className="flex flex-col w-full sm:w-[400px]">
            <h2 className="text-xl font-bold text-[#F2E500]">
              Portal Muralhas de Taranto
            </h2>

            <p className="text-gray-700 mt-3">
              O <strong>Portal Muralhas de Taranto</strong> é um empreendimento da BRZ Empreendimentos que une
              localização estratégica, infraestrutura moderna e alto potencial de valorização. Com torres
              equipadas com elevador e um projeto pensado para o conforto e segurança dos moradores, é uma
              excelente opção para morar ou investir.
            </p>

            <Link href="/taranto" className="mt-4">
              <button className="bg-[#F2E500] hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl shadow-md">
                Conheça o empreendimento
              </button>
            </Link>
          </div>
        </div>

        {/* FORLI */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row gap-6 w-full max-w-[900px]">
          <div className="relative w-full sm:w-[400px] h-[200px]">
            <Image
              src="/forli.png"
              alt="Portal Encantos de Forli"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col w-full sm:w-[400px]">
            <h2 className="text-xl font-bold text-[#9F060C]">
              Portal Encantos de Forli
            </h2>

            <p className="text-gray-700 mt-3">
              O <strong>Portal Encantos de Forli</strong> é um empreendimento residencial da BRZ Empreendimentos
              desenvolvido para proporcionar qualidade de vida, praticidade e bem-estar. Com localização
              privilegiada e fácil acesso a comércios e serviços, o projeto conta com áreas de lazer e plantas
              funcionais, ideais para quem busca morar bem ou investir com segurança.
            </p>

            <Link href="/forli" className="mt-4">
              <button className="bg-[#9F060C] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md">
                Conheça o empreendimento
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="mt-24 flex flex-col justify-center items-center min-h-[300px] bg-stone-100 px-4"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-black font-mono text-center mb-4">
          Fale com a gente agora mesmo
        </h1>

        <p className="text-center text-black mb-6">
          Tire suas dúvidas pelo WhatsApp
        </p>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/5535999399854?text=Olá, vim pelo site da BRZ",
              "_blank"
            )
          }
          className="bg-[#25D366] w-full max-w-[320px] flex justify-center items-center gap-2 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-2xl shadow-lg text-lg"
        >
          Chamar no WhatsApp <FaWhatsapp />
        </button>
      </section>


      {/* FOOTER */}
      <footer className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* COPYRIGHT */}
          <p className="text-white/70 text-sm text-center">
            © 2025 BRZ Empreendimentos. Todos os direitos reservados.
          </p>

          {/* REDES SOCIAIS */}
          <div className="flex gap-4 text-white/70">

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/company/brz-empreendimentos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2E500] transition"
              aria-label="LinkedIn da BRZ"
            >
              <CiLinkedin size={20} />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/brzempreendimentos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2E500] transition"
              aria-label="Instagram da BRZ"
            >
              <FaInstagram size={18} />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5535999399854"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2E500] transition"
              aria-label="WhatsApp da BRZ"
            >
              <FaWhatsapp size={18} />
            </a>

          </div>

        </div>
      </footer>




    </div>
  );
}
