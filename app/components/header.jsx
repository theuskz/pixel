import React from 'react';
import { TbHexagonLetterPFilled } from "react-icons/tb";
import Image from 'next/image';

export default function Header() {
    return (
        <header className='bg-[#F2E500] w-full h-[70px] flex justify-between items-center px-6 md:px-12'>
            
            <div className='flex md:justify-center md:items-center'>
                <Image
                        src="/brz.png"
                        alt="LogoHero"
                        quality={100}
                        priority
                        width={95}
                        height={100}
                        className="object-cover z-10"
                        
                      />
                <h1 className='text-black font-extrabold text-xl'>BRZ EMPREENDIMENTOS</h1>
            </div>

            
            <nav className='hidden md:flex space-x-6'>
                <a href="#" className="text-black hover:text-gray-700 transition">Início</a>
                <a href="#" className="text-black hover:text-gray-700 transition">Empreendimentos</a>
                <a href="#" className="text-black hover:text-gray-700 transition">Contato</a>
            </nav>
        </header>
    );
}

