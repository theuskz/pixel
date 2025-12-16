import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='bg-gradient-to-b from-stone-800 to-stone-600 w-full h-[700px] space-y-2 sm:flex sm:flex-row sm:justify-center sm:items-center'>
      <div className='sm:p-10 sm:w-[500px] '>
        <div className='text-white text-3xl font-mono font-extrabold text-center mt-12 px-2 sm:text-justify'>
          Garanta já seu empreendimento com a
          <div className='text-purple-500 text-3xl font-mono font-extrabold text-center '>
          <p className='text-[#f2e500] text-4xl font-bold drop-shadow-[2px_2px_0px_black] sm:text-justify'>BRZ</p>
          </div>
        </div>
        <div className='text-center p-6 flex flex-col justify-center items-center'>
          <label className='text-white text-center font-mono sm:text-justify'>Ajudamos você a consquistar seu primeiro imóvel ou realizar seu primeiro investimento</label>
          <button className='bg-white w-[200px] h-[45px] rounded-lg font-mono text-black text-lg font-extrabold mt-4'>Conheça Mais</button>
        </div>
      </div>
      <div>
      <Image
        src="/equipe.jpeg"
        alt="LogoHero"
        quality={100}
        priority
        width={400}
        height={100}
        className="object-cover rounded-xl z-10 mt-2"
        
      />
      </div>
    </div>
  )
}
