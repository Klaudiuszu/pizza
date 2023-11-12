"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { HamburgerMenu } from "./hamburgerMenu";

const Navbar = () => {

  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/ARK PIZZA.svg" alt="PIZZA" width={74} height={29} />
      </Link>
      <ul className="hidden h-full lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="navbar-link regular-16 flexCenter cursor-pointer pb-1.5"
          >
            {link.label}
          </Link>
        ))}
      </ul>
        <HamburgerMenu />
      <div className="lg:flexCenter hidden"></div>
    </nav>
  );
};

export default Navbar;
