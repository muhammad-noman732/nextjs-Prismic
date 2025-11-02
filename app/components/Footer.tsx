import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { Labrada } from "next/font/google";
import Link from "next/link";

export async function Footer() {
    const client = createClient();
    const settings = await client.getSingle('settings');
   
    return <header>{settings.data.meta_description}
     <nav>
        <Link href='/'>{settings.data.site_title}</Link>

        <p>&copy; {new Date().getFullYear()} {settings.data.site_title}</p>
        <ul>
            {settings.data.navigation.map(({label, link})=>(
                <li key={label}>
                 <PrismicNextLink field={link} >{label} </PrismicNextLink>
                </li>
            ))}
        </ul>
     </nav>
    </header>
}