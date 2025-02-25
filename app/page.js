import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Cliente from "./components/cliente";
import Proposito from "./components/proposito";
import Qualidade from "./components/qualidade";
import Servicos from "./components/servicos";
import Email from "./components/email";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col jusfify-center">
      <Header />
      <Hero />
      <Cliente />
      <Proposito />
      <Qualidade />
      <Servicos />
      <Email />
      <Footer />
    </div>
  );
}
