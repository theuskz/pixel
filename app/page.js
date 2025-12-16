"use client";

import Image from "next/image";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">

      {/* HEADER */}
      <header className="bg-[#F2E500] w-full h-[70px] flex justify-between items-center px-6 md:px-12 fixed top-0 z-50">
        <div className="flex items-center space-x-2">
          <Image
            src="/brz.png"
            alt="Logo BRZ"
            quality={100}
            priority
            width={95}
            height={100}
            className="object-cover z-10"
          />
          <h1 className="text-black font-extrabold text-xl">
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
      <section id="inicio" className="bg-gradient-to-b from-stone-800 to-stone-600 w-full h-[700px] sm:flex sm:justify-center sm:items-center">
        <div className="sm:p-10 sm:w-[500px]">
          <div className="text-white text-3xl font-mono font-extrabold text-center mt-12 px-2 sm:text-justify">
            Garanta já seu empreendimento com a
            <p className="text-[#f2e500] text-4xl font-bold drop-shadow-[2px_2px_0px_black]">
              BRZ
            </p>
          </div>

          <div className="text-center p-6 flex flex-col items-center">
            <label className="text-white font-mono">
              Ajudamos você a conquistar seu primeiro imóvel ou realizar seu primeiro investimento
            </label>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre os empreendimentos da BRZ",
                  "_blank"
                )
              }
              className="bg-white w-[200px] h-[45px] rounded-lg font-mono text-black text-lg font-extrabold mt-4"
            >
              Conheça Mais
            </button>
          </div>
        </div>

        <Image
          src="/equipe.jpeg"
          alt="Equipe BRZ"
          quality={100}
          priority
          width={400}
          height={100}
          className="object-cover rounded-xl z-10 mt-2"
        />
      </section>

      {/* PARCEIROS */}
      <section id="empreendimentos" className="w-full h-[80px] bg-[#F2E500] flex justify-center sm:justify-between items-center">

        {/* TEXTO – ESQUERDA */}
        <div className="-space-y-2 ml-6">
          <h1 className="text-black font-bold text-lg">Nossos</h1>
          <h1 className="text-black font-bold text-lg">Parceiros</h1>
        </div>

        {/* IMAGENS – DIREITA */}
        <div className="flex items-center space-x-10 mr-6">
          <Image
            src="/caixa.png"
            alt="Caixa Econômica Federal"
            quality={100}
            priority
            width={200}
            height={120}
            style={{ height: "26px", width: "auto" }}
          />

          <Image
            src="/programa.png"
            alt="Minha Casa Minha Vida"
            quality={100}
            priority
            width={300}
            height={120}
            style={{ height: "86px", width: "auto" }}
          />
        </div>

      </section>

      {/* EMPREENDIMENTOS */}
      <section id="empreendimentos" className="max-w-md mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center space-y-10 mt-10">

        {/* Portal Muralhas de Taranto */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center sm:flex sm:flex-row sm:w-[900px]">

          {/* BOX DA IMAGEM */}
          <div className="relative w-[400px] h-[220px] flex-shrink-0">
            <Image
              src="/taranto.png"
              alt="Portal Muralhas de Taranto"
              quality={100}
              priority
              fill
              className="object-contain rounded-xl"
            />
          </div>

          <div className="sm:flex sm:flex-col sm:w-[400px] ml-4">
            <h2 className="text-xl font-bold text-[#F2E500]">
              Portal Muralhas de Taranto
            </h2>

            <p className="text-gray-700 text-justify mt-3">
              O <strong>Portal Muralhas de Taranto</strong> é um empreendimento da BRZ Empreendimentos que une
              localização estratégica, infraestrutura moderna e alto potencial de valorização. Com torres
              equipadas com elevador e um projeto pensado para o conforto e segurança dos moradores, é uma
              excelente opção para morar ou investir.
            </p>

            <Link href="/portal-muralhas-de-taranto" className="mt-4">
              <button className="bg-[#F2E500] hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl shadow-md transition-all duration-300">
                Conheça o empreendimento
              </button>
            </Link>
          </div>
        </div>

        {/* Portal Encantos de Forli */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center sm:flex sm:flex-row sm:w-[900px]">

          {/* BOX DA IMAGEM */}
          <div className="relative w-[400px] h-[220px] flex-shrink-0">
            <Image
              src="/forli.png"
              alt="Portal Encantos de Forli"
              quality={100}
              priority
              fill
              className="object-contain rounded-xl"
            />
          </div>

          <div className="sm:flex sm:flex-col sm:w-[400px] ml-4">
            <h2 className="text-xl font-bold text-[#9F060C]">
              Portal Encantos de Forli
            </h2>

            <p className="text-gray-700 text-justify mt-3">
              O <strong>Portal Encantos de Forli</strong> é um empreendimento residencial da BRZ Empreendimentos
              desenvolvido para proporcionar qualidade de vida, praticidade e bem-estar. Com localização
              privilegiada e fácil acesso a comércios e serviços, o projeto conta com áreas de lazer e plantas
              funcionais, ideais para quem busca morar bem ou investir com segurança.
            </p>

            <Link href="/portal-encantos-de-forli" className="mt-4">
              <button className="bg-[#9F060C] hover:bg-yellow-400 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition-all duration-300">
                Conheça o empreendimento
              </button>
            </Link>
          </div>
        </div>

      </section>

      {/* CONTATO WHATSAPP */}
      <section id="contato" className="mt-32 flex flex-col justify-center items-center h-[300px] bg-stone-100">
        <h1 className="text-4xl font-bold text-black font-mono text-center mb-6">
          Fale com a gente agora mesmo
        </h1>

        <p className="text-center text-black mb-8 px-4">
          Tire suas dúvidas e conheça o empreendimento ideal para você pelo WhatsApp
        </p>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/5535999399854?text=Olá, vim pelo site da BRZ e gostaria de saber mais",
              "_blank"
            )
          }
          className="bg-[#25D366] flex justify-center items-center hover:bg-green-600 text-white font-bold px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 text-lg"
        >
          Chamar no WhatsApp <FaWhatsapp className="text-white ml-2" />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="w-full h-[80px] bg-gradient-to-b from-stone-800 to-stone-700 flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="flex space-x-6">
          <SiGmail className="text-black w-5 h-5" />
          <CiLinkedin className="text-black w-6 h-6" />
          <FaInstagram className="text-black w-5 h-5" />
        </div>

        <h1 className="text-black">Copyright 2025</h1>
      </footer>

    </div>
  );
}
