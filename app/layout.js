import "./globals.css";

export const metadata = {
  title: {
    default: "BRZ Empreendimentos",
    template: "%s | BRZ Empreendimentos",
  },
  description: "Garanta seu imóvel com a BRZ Empreendimentos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
