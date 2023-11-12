import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export const HamburgerMenu: React.FC = () => {
  const [visibleRight, setVisibleRight] = useState(false);

  return (
    <div className="hamburger-wrapper">
      <div className="flex gap-2 justify-content-center">
        <Button
          icon="pi pi-align-justify"
          onClick={() => setVisibleRight(true)}
        />
      </div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <h2 className="hamburger-wrapper-title">Menu</h2>
        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="navbar-link cursor-pointer pb-1.5"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </Sidebar>
    </div>
  );
};
