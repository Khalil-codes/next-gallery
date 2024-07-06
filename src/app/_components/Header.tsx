"use client";

import Link from "next/link";
import React from "react";
import { type Url } from "url";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ImageIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import UserProfile from "./UserProfile";

type Props = {
  links?: { text: string; href: Url | string }[];
  logo?: string;
  allowAuth?: boolean;
};

const Header = ({ links }: Props) => {
  return (
    <header className="bg-background sticky top-0 z-10 shadow-sm">
      <div className="border-primary container m-auto flex items-center justify-between border-b border-solid px-4 py-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <ImageIcon className="h-6 w-6" />
          Gallery
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {links?.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              {link.text}
            </Link>
          ))}
          <div>
            <Button>Upload</Button>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline">Login</Button>
            <UserProfile />
          </div>
          {/* <div className="flex items-center gap-2">
            <Label htmlFor="theme-toggle" className="cursor-pointer">
              <Switch
                id="theme-toggle"
                // checked={isDarkMode}
                // onCheckedChange={setIsDarkMode}
              />
              <span className="sr-only">Toggle theme</span>
            </Label>
          </div> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <ImageIcon className="h-6 w-6" />
                Gallery
              </Link>
              <nav className="grid gap-2">
                {links?.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    className="flex items-center gap-2 text-base font-medium"
                  >
                    {link.text}
                  </Link>
                ))}
                <div className="flex items-center gap-2">
                  <Button variant="outline">Login</Button>
                  <UserProfile />
                </div>
                {/* <div className="flex items-center gap-2">
                  <Label htmlFor="theme-toggle" className="cursor-pointer">
                    <Switch
                      id="theme-toggle"
                      // checked={isDarkMode}
                      // onCheckedChange={setIsDarkMode}
                    />
                    <span className="sr-only">Toggle theme</span>
                  </Label>
                </div> */}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
