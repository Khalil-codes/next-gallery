import Image from "next/image";
import Link from "next/link";
import React from "react";
import { type Url } from "url";

type Props = {
  links?: { text: string; href: Url | string }[];
  logo?: string;
};

const Navbar = ({ links, logo }: Props) => {
  return (
    <nav className="flex justify-between gap-4 border-b border-white pb-4">
      <Link href={"/"} className="text-3xl font-semibold hover:underline">
        {logo && <Image src={logo} width={120} height={40} alt="Logo" />}
        Next Gallery
      </Link>
      {Boolean(links?.length) && (
        <ul className="flex w-1/2 items-end justify-end gap-4">
          {links?.map((link, index) => (
            <li key={index} className="hover:underline">
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
