import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-muted w-full p-6 md:p-8">
      <div className="container m-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Gallery. All rights reserved.
        </p>
        <nav className="flex gap-4 md:gap-6">
          <Link
            href="#"
            className="text-muted-foreground text-sm underline-offset-4 hover:underline"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-muted-foreground text-sm underline-offset-4 hover:underline"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
