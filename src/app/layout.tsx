import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QUEMACOCOS SAMPAYOS",
  description: "Somos un negocio especializado en la instalación de quemacocos. Fundado en 2022, nuestra empresa se ha dedicado a proporcionar servicios de calidad para la instalación y mantenimiento de quemacocos en vehículos. Nos enorgullecemos de nuestro compromiso con la satisfacción del cliente y de ofrecer soluciones confiables y seguras para mejorar la experiencia de conducción de nuestros clientes. Nuestro equipo está compuesto por profesionales capacitados y con experiencia en la instalación de quemacocos, asegurando que cada trabajo se realice con precisión y cuidado. En Quemacocos Sampayos, nos esforzamos por brindar un servicio excepcional y productos de alta calidad para satisfacer las necesidades de nuestros ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
