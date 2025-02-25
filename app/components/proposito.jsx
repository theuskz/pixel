import React from 'react'
import Image from 'next/image'

export default function Proposito() {
  return (
    <div class="max-w-md mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center space-y-10 mt-10">
        
        <div class="bg-white shadow-lg rounded-2xl p-6 text-center sm:flex sm:flex-row sm:w-[900px] ">
            <Image
                    src="/img1.jpg"
                    alt="LogoHero"
                    quality={100}
                    priority
                    width={400}
                    height={100}
                    className="object-cover z-10 mt-2 rounded-xl mb-2"
                    
                  />
            <div className='sm:flex sm:flex-col sm:w-[400px] ml-4'>
            <h2 className="text-xl font-bold text-purple-600">Criando Experiências Online Inesquecíveis</h2>
            <p className="text-gray-700 mt-3">
                Nosso propósito na <strong>Pixel Palace</strong> é criar experiências online inesquecíveis para nossos clientes. Através de nossos serviços de criação de sites personalizados, ajudamos a definir sua marca e a construir uma presença online que inspire confiança e lealdade em seus clientes.
            </p>
            </div>
        </div>
        
        
        <div class="bg-white shadow-lg rounded-2xl p-6 text-center sm:flex sm:flex-row sm:w-[900px]">
          <Image
            src="/img2.jpg"
            alt="LogoHero"
            quality={100}
            priority
            width={400}
            height={100}
            className="object-cover z-10 mt-2 rounded-xl mb-2" 
          />
            <div className='sm:flex sm:flex-col sm:w-[400px] ml-4'>
            <h2 className="text-xl font-bold text-purple-600 sm:w-[400px]">Transformando Sua Visão em Realidade</h2>
            <p className="text-gray-700 mt-3">
                Na <strong>Pixel Palace</strong>, nosso propósito é ajudá-lo a transformar sua visão em uma realidade digital. Nós criamos sites atrativos, únicos e eficazes para ajudá-lo a se destacar da concorrência e converter visitantes em engajamento real.
            </p>
            </div>
        </div>
    </div>
  )
}
