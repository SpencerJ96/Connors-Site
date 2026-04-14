import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from './components/Nav'
import {Bebas_Neue} from "next/font/google"
import Footer from './components/Footer'



const dmSans = DM_Sans({
	subsets: ['latin'],
	variable:'--font-dm-sans'
});

const bebas = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-bebas'
});



export const metadata: Metadata = {
  title: "Connor Alexander",
  description: "Videographer & Content Creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable}  ${bebas.variable} h-full antialiased`}
    >
		
      <body className="min-h-full flex flex-col overflow-x-hidden">
		<Nav />
		{children}
		<Footer />
	</body>
  </html>
  );
}
