import React from 'react'
import { MdOutlineDiamond } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";




export default function Qualidade() {
  return (
    <div class="max-w-5xl mx-auto space-y-6 md:flex md:space-y-0 md:space-x-6 sm:mt-10 sm:mb-10">
    <div class="flex-1 border-2 border-purple-500 rounded-xl p-6 text-center bg-white shadow-lg">
        <div class="flex justify-center mb-3">
            <MdOutlineDiamond className="w-[80px] h-[80px] text-purple-600" />
        </div>
        <h3 class="text-lg font-semibold text-gray-600">Qualidade</h3>
        <p class="text-gray-600">Compromisso com a entrega de serviços de alta qualidade em todas as etapas do processo.</p>
    </div>
    <div class="flex-1 border-2 border-purple-500 rounded-xl p-6 text-center bg-white shadow-lg">
        <div class="flex justify-center mb-3">
            <IoSettings className="w-[80px] h-[80px] text-purple-600" />
        </div>
        <h3 class="text-lg font-semibold text-gray-600">Personalização</h3>
        <p class="text-gray-600">Criamos soluções personalizadas para atender às necessidades exclusivas de cada cliente.</p>
    </div>
    <div class="flex-1 border-2 border-purple-500 rounded-xl p-6 text-center bg-white shadow-lg">
        <div class="flex justify-center mb-3">
            <RiTeamFill className="w-[80px] h-[80px] text-purple-600" /> 
        </div>
        <h3 class="text-lg font-semibold text-gray-600">Colaboração</h3>
        <p class="text-gray-600">Trabalhamos em estreita colaboração com nossos clientes para garantir sua satisfação.</p>
    </div>
</div>


  )
}
