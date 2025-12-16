import React from 'react'

export default function Email() {
  return (
    <div className='mt-32 flex flex-col justify-start items-center h-[430px]'>
      <div className="bg-transparent p-2 m-0 rounded text-black w-full text-center">
        <h1 className="text-4xl font-bold font-mono ">
          Entre em Contato
        </h1>
      </div>
      <input type="text" className='w-[300px] sm:w-[600px] h-[30px] mt-10 bg-stone-300 p-2 rounded-lg text-black' placeholder='Seu Nome' />
      <input type="text" className='w-[300px] sm:w-[600px] h-[30px] mt-4 bg-stone-300 p-2 rounded-lg text-black' placeholder='Seu Email' />
      <textarea type="text" className='w-[300px] sm:w-[600px] h-[120px] mt-4 bg-stone-300 p-2 rounded-lg text-justify text-black' placeholder='Sua Mensagem' />
      <button className='bg-[#F2E500] text-black w-[300px] sm:w-[600px] h-[50px] mt-4 border-2 border-white rounded-xl '>Enviar</button>
    </div>
  )
}