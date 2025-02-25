import { FaGlobe, FaPalette, FaStar, FaPenNib } from "react-icons/fa";

export default function Servicos() {
  return (
    <div className="bg-gray-100 p-6 flex justify-center">
      <div className="max-w-md sm:-ml-10 text-center">
        <h2 className="text-2xl font-bold text-black">Serviços que oferecemos</h2>
        <p className="text-gray-600 mt-2 mb-6">
          De criação de sites a copywriting, nossos serviços são projetados para ajudar sua empresa a alcançar seus objetivos de negócios.
        </p>

        <div className="space-y-4 sm:w-full sm:-ml-56">
          <div className="sm:flex sm:space-x-10 sm:w-[900px] space-y-4 sm:space-y-0">
          <div className="bg-white sm:w-[800px] sm:h-[200px] shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200">
            <FaGlobe className="text-purple-500 w-[100px] h-[30px]" />
            <div>
              <h3 className="text-2xl mb-4 text-black font-semibold">Criação de Sites</h3>
              <p className="text-gray-600">Desenvolvemos sites personalizados com design atraente e funcionalidades que convertem.</p>
            </div>
          </div>

          <div className="bg-white sm:w-[800px] sm:h-[200px] shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200">
            <FaPalette className="text-purple-500 w-[100px] h-[30px]" />
            <div>
              <h3 className="text-2xl mb-4 text-black font-semibold">Identidade Visual</h3>
              <p className="text-gray-600">Criamos identidades visuais únicas e memoráveis que definem sua marca e a destacam da concorrência.</p>
            </div>
          </div>
          </div>
          <div className="sm:flex sm:space-x-10 sm:w-[900px] space-y-4 sm:space-y-0">
          <div className="bg-white sm:w-[800px] sm:h-[200px] shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200">
            <FaStar className="text-purple-500 w-[100px] h-[30px]" />
            <div>
              <h3 className="text-2xl mb-4 text-black font-semibold">Branding</h3>
              <p className="text-gray-600 text-justify">Desenvolvemos a personalidade da sua marca, criando uma imagem consistente e memorável.</p>
            </div>
          </div>

          <div className="bg-white sm:w-[800px] sm:h-[200px] shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200">
            <FaPenNib className="text-purple-500 w-[100px] h-[30px]" />
            <div>
              <h3 className="text-2xl mb-4 text-black font-semibold">Copywriting</h3>
              <p className="text-gray-600">Criamos textos persuasivos e eficazes que capturam a atenção dos seus clientes e aumentam a conversão e o engajamento.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
