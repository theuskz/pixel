import React from 'react'
import { SiDell } from "react-icons/si";
import { TbBrandAdobe } from "react-icons/tb";
import { FaWindows } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import Image from 'next/image';


export default function Cliente() {
  return (
    <div className='w-full h-[80px] bg-[#F2E500] flex justify-center sm:justify-between items-center space-x-10 sm:space-x-0'>
      <div className='-space-y-2 ml-6'>
        <h1 className='text-black font-bold text-lg'>Nossos</h1>
        <h1 className='text-black font-bold text-lg'>Parceiros</h1>
      </div>
      <div className='space-x-10 flex justify-center items-center'>
      <Image
        src="/caixa.png"
        alt="LogoHero"
        quality={100}
        priority
        width={95}
        height={100}
        className="object-cover z-10"                        
      />
      <Image
        src="/programa.png"
        alt="LogoHero"
        quality={100}
        priority
        width={95}
        height={100}
        className="object-cover mr-6 z-10"                        
      />
      </div>
    </div>
  )
}
