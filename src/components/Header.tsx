'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Réalisations', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <div className="container flex h-20 items-center justify-between px-6">
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          Romaric E. G.
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button 
              key={link.name} 
              asChild 
              variant="ghost"
              className="text-primary-foreground hover:bg-primary/10 hover:text-white text-base font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <Link href={link.href}>
                {link.name}
              </Link>
            </Button>
          ))}
          <Button 
            asChild 
            variant="default"
            className="ml-4 bg-accent text-foreground hover:bg-accent/90 hover:shadow-md transition-all"
          >
            <Link href="#contact">
              Me contacter
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-primary-foreground hover:bg-primary/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-primary text-primary-foreground border-l border-primary/20">
            <div className="flex flex-col h-full">
              <div className="py-8 px-6 border-b border-primary/20">
                <Link 
                  href="/" 
                  className="text-2xl font-bold tracking-tight"
                  onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}
                >
                  Romaric E. G.
                </Link>
              </div>
              <nav className="flex-1 flex flex-col p-4 space-y-2">
                {navLinks.map((link) => (
                  <Button 
                    key={link.name} 
                    asChild 
                    variant="ghost"
                    className="w-full justify-start text-lg py-6 px-4 rounded-lg text-primary-foreground hover:bg-primary/10 hover:text-white"
                    onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}
                  >
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </Button>
                ))}
                <Button 
                  asChild 
                  variant="default"
                  className="mt-4 bg-accent text-foreground hover:bg-accent/90 hover:shadow-md transition-all py-6 text-lg"
                  onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}
                >
                  <Link href="#contact">
                    Me contacter
                  </Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
