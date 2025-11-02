import type { Metadata } from 'next'
import { Nunito, Nunito_Sans , Sono} from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient } from '@/prismicio';

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display:'swap'
});

const sono = Sono({
  variable: "--font-sono",
  subsets: ["latin"],
  display:'swap'
});
const nunito_sans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display:"swap"
});

 
export async function generateMetadata(): Promise<Metadata> {
  
  const client = createClient();
  const page = await client.getSingle("settings");
 
  return {
    title: page.data.site_title || "Flowrise fallback",
    description:page.data.meta_description || "Flowrise is the relaxing app for you",
    openGraph:{
      images: [page.data.og_image.url || ""]
    }
  }
}
 



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"   className={clsx(nunito.variable, nunito_sans.variable,sono.variable, "antialiased "
  )}>
     <body>
      <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
