"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const whatsappLink =
    "https://wa.me/5535999399854?text=Olá!%20Tenho%20interesse%20no%20Portal%20Encantos%20de%20Forli%20e%20gostaria%20de%20falar%20com%20um%20corretor.";

export default function PortalEncantosDeForli() {
    return (
        <main className="w-full">
            {/* HERO */}
            <section className="relative bg-[#9F060C]">
                <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Portal Encantos de Forli
                        </h1>
                        <p className="text-lg text-white/90 mb-8">
                            Um empreendimento da BRZ Empreendimentos projetado para oferecer
                            qualidade de vida, praticidade e bem-estar em uma localização
                            estratégica.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Button
                                asChild
                                variant="outline"
                                className="bg-white text-black rounded-2xl px-6"
                            >
                                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    Fale com um corretor
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white text-black rounded-2xl px-6"
                            >
                                Conheça o empreendimento
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src="/forli1.jpeg"
                            alt="Portal Encantos de Forli"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-xl object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* SOBRE */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <Image
                        src="/forli2.jpeg"
                        alt="Sobre o empreendimento"
                        width={500}
                        height={350}
                        className="rounded-2xl shadow-lg object-cover"
                    />

                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Conforto e funcionalidade para o seu dia a dia
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            O Portal Encantos de Forli foi desenvolvido com foco em praticidade
                            e bem-estar. Com plantas inteligentes, áreas comuns planejadas e
                            fácil acesso a comércios e serviços, o empreendimento é ideal para
                            quem busca morar bem ou investir com segurança.
                        </p>
                    </div>
                </div>
            </section>

            {/* DIFERENCIAIS */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Diferenciais do Portal Encantos de Forli
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex justify-center items-center gap-8">
                        {["Lazer completo entregue decorado", "Plantas funcionais de 2 quartos", "Localização estratégica no bairro Nova Era", "Infraestrutura com segurança e conveniência", "Serviços exclusivos Housi", "Projeto ideal para morar ou investir"].map(
                            (item, index) => (
                                <Card key={index} className="rounded-2xl h-[80px] flex justify-center items-center shadow-sm">
                                    <CardContent className="p-6 text-center">
                                        <p className="font-medium text-gray-800">{item}</p>
                                    </CardContent>
                                </Card>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 bg-[#9F060C] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        More ou invista no Portal Encantos de Forli
                    </h2>
                    <p className="text-white/90 mb-8">
                        Fale com um corretor e conheça todas as condições especiais deste
                        empreendimento BRZ Empreendimentos.
                    </p>
                    <Button
                        asChild
                        className="bg-white text-[#9F060C] hover:bg-white/90 rounded-2xl px-8 py-6 text-lg"
                    >
                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            Quero mais informações
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
