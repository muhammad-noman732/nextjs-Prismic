import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { Labrada } from "next/font/google";
import Link from "next/link";

export async function Header() {
    const client = createClient();
    const settings = await client.getSingle('settings');
   
    // 1. Create a separate array of all link objects
    const links = settings.data.navigation.map(item => item.link); 
    
    // 2. Create a separate array of all label strings
    const labels = settings.data.navigation.map(item => item.label);

    console.log("links", links);
    console.log("labels", labels);
    return <header>{settings.data.meta_description}
     <nav>
        <Link href='/'>{settings.data.site_title}</Link>
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