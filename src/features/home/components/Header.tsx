import Link from "next/link";
import React from "react";
import LanguageSelector from "./LanguageSelector";
import { useTranslations } from "next-intl";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const t = useTranslations();
  const NAV_ITEMS = [
    { id: "home", name: t("Menu.home"), href: "/" },
    { id: "services", name: t("Menu.services"), href: "/services" },
    { id: "resume", name: t("Menu.resume"), href: "/resume" },
    { id: "work", name: t("Menu.work"), href: "/work" },
    { id: "contact", name: t("Menu.contact"), href: "/contact" },
  ];
  return (
    <div className="border-b-2">
      {" "}
      <nav className=" container mx-auto px-4 py-6 flex justify-between items-center max-w-screen-lg ">
        <Link href="/" className="text-2xl font-bold">
          Devscript<span className="text-primary">.</span>
        </Link>
        <ul className="hidden md:flex space-x-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>{" "}
        <div className="flex gap-1">
          <LanguageSelector />

          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
