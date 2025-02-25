import React from 'react'
import { SiDell } from "react-icons/si";
import { TbBrandAdobe } from "react-icons/tb";
import { FaWindows } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";


export default function Cliente() {
  return (
    <div className='w-full h-[50px] bg-[#7B68EE] flex justify-center sm:justify-around items-center space-x-10 sm:space-x-0'>
      <div className='-space-y-2'>
        <h1 className='text-gray-300'>Nossos</h1>
        <h1 className='text-gray-300'>Clientes</h1>
      </div>
      <div className='space-x-10 flex justify-center items-center'>
      <SiAdobephotoshop className='w-[25px] h-[25px]' />
      <SiDell className='w-[25px] h-[25px]' />
      <TbBrandAdobe className='w-[25px] h-[25px]' />
      <FaWindows className='w-[25px] h-[25px]' />
      </div>
    </div>
  )
}
