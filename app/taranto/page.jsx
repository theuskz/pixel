"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const whatsappLink =
    "https://wa.me/5535999399854?text=Olá!%20Tenho%20interesse%20no%20Portal%20Muralhas%20de%20Taranto%20e%20gostaria%20de%20falar%20com%20um%20corretor.";

export default function PortalMuralhasDeTaranto() {
    return (
        <main className="w-full">
            {/* HERO */}
            <section className="relative bg-[#F2E500]">
                <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            Portal Muralhas de Taranto
                        </h1>
                        <p className="text-lg text-black/80 mb-8">
                            Um empreendimento da BRZ Empreendimentos pensado para quem busca
                            conforto, praticidade e excelente potencial de valorização.
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <Button
                                asChild
                                className="bg-black text-white hover:bg-black/90 rounded-2xl px-6"
                            >
                                <Link href={whatsappLink} target="_blank">
                                    Fale com um corretor
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                className="border-black text-black rounded-2xl px-6"
                            >
                                Conheça o empreendimento
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src="/page1.jpeg"
                            alt="Portal Muralhas de Taranto"
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
                        src="/page2.jpeg"
                        alt="Sobre o empreendimento"
                        width={500}
                        height={350}
                        className="rounded-2xl shadow-lg object-cover"
                    />

                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Qualidade BRZ em cada detalhe
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            O Portal Muralhas de Taranto foi desenvolvido para oferecer uma
                            experiência completa de moradia. Com projeto moderno, torres com
                            elevador e localização estratégica, o empreendimento entrega
                            segurança, conforto e praticidade para o dia a dia.
                        </p>
                    </div>
                </div>
            </section>

            {/* DIFERENCIAIS */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Diferenciais do empreendimento
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            "Localização estratégica próxima a comércios e serviços",
                            "Torres com elevador",
                            "Plantas funcionais de 2 quartos",
                            "Área de lazer planejada para toda a família",
                            "Infraestrutura completa para o dia a dia",
                            "Excelente potencial de valorização"
                        ].map((item, index) => (
                            <Card key={index} className="rounded-2xl h-[80px] flex justify-center items-center shadow-sm">
                                <CardContent className="p-6 text-center">
                                    <p className="font-medium text-gray-800">{item}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Viva ou invista no Portal Muralhas de Taranto
                    </h2>
                    <p className="text-white/80 mb-8">
                        Entre em contato e descubra todas as condições especiais disponíveis
                        para este empreendimento BRZ.
                    </p>

                    <Button
                        asChild
                        className="bg-[#F2E500] text-black hover:bg-yellow-400 rounded-2xl px-8 py-6 text-lg"
                    >
                        <Link href={whatsappLink} target="_blank">
                            Quero mais informações
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
