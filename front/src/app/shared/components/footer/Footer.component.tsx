import Link from "next/link"
import { FooterConfig } from "./Footer.config"

export const FooterComponent = () => {
    return (
        <ul className="flex justify-between">
            {FooterConfig.map(({href, title}, index) => (
                <li key={index}>
                    <Link href={href}>{title}</Link>
                </li>
            ))}
        </ul>
              
    )
}