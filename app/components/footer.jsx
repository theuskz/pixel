import React from 'react'
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='w-full h-[80px] bg-gradient-to-b from-stone-800 to-stone-700 flex flex-col justify-center items-center sm:justify-between sm:p-4 sm:flex-row'>
      <div className='flex justify-center items-center mt-4 space-x-6 mb-2'>
        <SiGmail className='w-[20px] h-[20px] sm:w-[25px] sm:h-[40px] text-black' />
        <CiLinkedin className='w-[20px] h-[20px] sm:w-[30px] sm:h-[40px] text-black' />
        <FaInstagram className='w-[20px] h-[20px] sm:w-[25px] sm:h-[40px] text-black' />
      </div>
      <h1 className='text-black'>Copyright 2025</h1>
    </div>
  )
}