"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { type Url } from "url";
import { UploadButton } from "~/utils/uploadthing";

type Props = {
  links?: { text: string; href: Url | string }[];
  logo?: string;
  allowAuth?: boolean;
};

const Navbar = ({ links, logo, allowAuth }: Props) => {
  const router = useRouter();
  return (
    <nav className="flex justify-between gap-4 border-b border-white pb-4">
      <Link href={"/"} className="text-3xl font-semibold hover:underline">
        {logo && <Image src={logo} width={120} height={40} alt="Logo" />}
        Next Gallery
      </Link>
      {Boolean(links?.length) && (
        <ul className="flex items-end justify-center gap-4">
          {links?.map((link, index) => (
            <li key={index} className="hover:underline">
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      )}
      {allowAuth && (
        <div className="flex items-end">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
