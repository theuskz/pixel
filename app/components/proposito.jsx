import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Proposito() {
  return (
    <div className="max-w-md mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center space-y-10 mt-10">
        
        {/* Portal Muralhas de Taranto */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center sm:flex sm:flex-row sm:w-[900px]">
            <Image
              src="/taranto.png"
              alt="Portal Muralhas de Taranto"
              quality={100}
              priority
              width={400}
              height={100}
              className="object-cover z-10 mt-2 rounded-xl mb-2"
            />
            <div className="sm:flex sm:flex-col sm:w-[400px] ml-4">
              <h2 className="text-xl font-bold text-[#F2E500]">
                Portal Muralhas de Taranto
              </h2>

              <p className="text-gray-700 mt-3">
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
          <Image
            src="/forli.png"
            alt="Portal Encantos de Forli"
            quality={100}
            priority
            width={400}
            height={100}
            className="object-cover z-10 mt-2 rounded-xl mb-2" 
          />
          <div className="sm:flex sm:flex-col sm:w-[400px] ml-4">
            <h2 className="text-xl font-bold text-[#9F060C]">
              Portal Encantos de Forli
            </h2>

            <p className="text-gray-700 mt-3">
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

    </div>
  )
}
