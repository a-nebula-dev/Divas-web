"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-divas-secondary/20 bg-divas-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-divas-primary">divas</span>
          </Link>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/" className="text-sm font-medium text-divas-text transition-colors hover:text-divas-accent">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-divas-text transition-colors hover:text-divas-accent">
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-divas-text transition-colors hover:text-divas-accent"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-divas-text transition-colors hover:text-divas-accent"
          >
            Contact
          </Link>
          <Button variant="default" className="bg-divas-primary text-divas-background hover:bg-divas-accent">
            Get Started
          </Button>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-divas-text">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-divas-background">
            <div className="flex flex-col gap-6 pt-6">
              <Link
                href="/"
                className="text-lg font-medium text-divas-text transition-colors hover:text-divas-accent"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-divas-text transition-colors hover:text-divas-accent"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium text-divas-text transition-colors hover:text-divas-accent"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-divas-text transition-colors hover:text-divas-accent"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="default"
                className="mt-4 bg-divas-primary text-divas-background hover:bg-divas-accent"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
