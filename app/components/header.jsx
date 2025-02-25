import React from 'react';
import { TbHexagonLetterPFilled } from "react-icons/tb";

export default function Header() {
    return (
        <header className='bg-[#4B0082] w-full h-[70px] flex justify-between items-center px-6 md:px-12'>
            
            <div className='flex md:justify-center md:items-center'>
                <TbHexagonLetterPFilled className='mr-2 w-[30px] h-[30px] text-white' />
                <h1 className='text-white font-extrabold text-xl'>Pixel Palace</h1>
            </div>

            
            <nav className='hidden md:flex space-x-6'>
                <a href="#" className="text-white hover:text-gray-300 transition">Início</a>
                <a href="#" className="text-white hover:text-gray-300 transition">Sobre</a>
                <a href="#" className="text-white hover:text-gray-300 transition">Serviços</a>
                <a href="#" className="text-white hover:text-gray-300 transition">Contato</a>
            </nav>
        </header>
    );
}

