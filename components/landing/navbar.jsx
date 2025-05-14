"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-divas-secondary/20 bg-divasBackground">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 ms-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-divas-primary">
              Logo vai aqui
            </span>
          </Link>
          <Link href="/">
            <span className="text-l font-bold text-divasText ms-10 ">
              Explorar
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/about"
            className="text-sm font-medium text-divasText transition-colors hover:text-divasAccent"
          >
            Sobre
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-divasText transition-colors hover:text-divasAccent"
          >
            Serviços
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-divasText transition-colors hover:text-divasAccent"
          >
            Contato
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-divasText">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-divasBackground">
            <div className="flex flex-col gap-6 pt-6">
              <Link
                href="/"
                className="text-lg font-medium text-divasText transition-colors hover:text-divasAccent"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-divasText transition-colors hover:text-divasAccent"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium text-divasText transition-colors hover:text-divasAccent"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-divasText transition-colors hover:text-divasAccent"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="default"
                className="mt-4 bg-divas-primary text-divasText hover:bg-divasAccent cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
export default Navbar;
