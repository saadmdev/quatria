import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quatréa | Maison de Haute Parfumerie",
  description: "Four Seasons. Four Emotions. One Essence. Experience the luxury of artisanal French perfumery inspired by nature's timeless cycle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter+Tight:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1A1918] antialiased selection:bg-[#C8A97E]/25 selection:text-[#141312]">
        {children}
      </body>
    </html>
  );
}
