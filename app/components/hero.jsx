import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='bg-gradient-to-b from-[#0f051d] to-[#1b0d3a] w-full h-[700px] space-y-2 sm:flex sm:flex-row sm:justify-center sm:items-center'>
      <div className='sm:p-10 sm:w-[500px] '>
        <div className='text-white text-3xl font-mono font-extrabold text-center mt-12 px-2 sm:text-justify'>
          Tenha uma Presença online poderosa com a
          <div className='text-purple-500 text-3xl font-mono font-extrabold text-center '>
          <p className='text-purple-400 text-4xl font-bold drop-shadow-[2px_2px_0px_black] sm:text-justify'>Pixel Palace</p>
          </div>
        </div>
        <div className='text-center p-6 flex flex-col justify-center items-center'>
          <label className='text-white text-center font-mono sm:text-justify'>Ajudamos sua empresa a se destacar na era digital e conquistar novos clientes</label>
          <button className='bg-purple-600 w-[200px] h-[45px] rounded-lg font-mono text-lg font-extrabold mt-4'>Conheça Mais</button>
        </div>
      </div>
      <div>
      <Image
        src="/hero.png"
        alt="LogoHero"
        quality={100}
        priority
        width={400}
        height={100}
        className="object-cover z-10 mt-2"
        
      />
      </div>
    </div>
  )
}
