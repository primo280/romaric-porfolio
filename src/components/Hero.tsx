'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-secondary py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
          <div className="max-w-3xl space-y-8 text-center lg:text-left">
            {/* Badge d'introduction */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="h-2 w-2 rounded-full bg-accent mr-2"></span>
              Expert en Gestion Administrative & Financière
            </div>
            
            {/* Titre principal */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Administratif &</span>
              <span className="block text-primary">Financial Specialist</span>
            </h1>
            
            {/* Sous-titre */}
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground">
              Plus qu'un métier, une passion à forte valeur ajoutée. Je transforme les défis administratifs en opportunités stratégiques.
            </p>
            
            {/* Boutons d'action */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start">
              <Button 
                size="lg" 
                className="px-8 py-6 text-base font-semibold transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                asChild
              >
                <a href="#contact">
                  Discutons de votre projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-base font-medium border-2 border-foreground/20 hover:bg-foreground/5 hover:border-foreground/30"
                asChild
              >
                <a href="#about" className="flex items-center">
                  <span>Découvrir mon parcours</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </Button>
            </div>
            
            {/* Médias sociaux ou indicateur de défilement */}
            <div className="pt-8">
              <div className="flex items-center justify-center space-x-6 lg:justify-start">
                <a href="https://www.linkedin.com/in/romaric-eugenos-goncalves" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5v-9h3v9zm-1.5-10.268A1.732 1.732 0 015 7a1.732 1.732 0 011.5-1.732A1.732 1.732 0 018 7c0 .957-.768 1.732-1.5 1.732zM19 19h-3v-4.8c0-1.684-2-1.555-2 0V19h-3v-9h3v1.245c1.396-2.586 5-2.777 5 2.476V19z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/_.goncalves96?igsh=MTE0dG9mOHZ3andxcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 7a5 5 0 105 5 5 5 0 00-5-5zm0 8.2A3.2 3.2 0 1115.2 12 3.2 3.2 0 0112 15.2z" />
                    <path d="M17.5 2h-11A4.5 4.5 0 002 6.5v11A4.5 4.5 0 006.5 22h11a4.5 4.5 0 004.5-4.5v-11A4.5 4.5 0 0017.5 2zm3 15.5a3 3 0 01-3 3h-11a3 3 0 01-3-3v-11a3 3 0 013-3h11a3 3 0 013 3zm-2.9-10.55a1.05 1.05 0 11-1.05-1.05 1.05 1.05 0 011.05 1.05z" />
                  </svg>
                </a>
                <a href="https://wa.me/22995462210" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-primary">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2a9.96 9.96 0 00-8.56 15.05L2 22l5.12-1.46A9.96 9.96 0 1012.04 2zm0 18.2a8.26 8.26 0 01-4.2-1.14l-.3-.18-3.04.87.87-2.97-.2-.31a8.28 8.28 0 1112.87 3.73 8.2 8.2 0 01-6 .9zm4.52-5.9c-.24-.12-1.43-.71-1.65-.79s-.38-.12-.54.12-.62.79-.76.95-.28.18-.52.06a6.79 6.79 0 01-2-1.23 7.45 7.45 0 01-1.39-1.71c-.15-.26-.02-.4.11-.52.12-.12.26-.3.38-.45a1.75 1.75 0 00.26-.43.48.48 0 00-.02-.45c-.06-.12-.54-1.3-.74-1.78s-.4-.4-.54-.41h-.46a.89.89 0 00-.64.3 2.68 2.68 0 00-.84 2 4.7 4.7 0 001 2.51 10.73 10.73 0 003.8 3.35 12.22 12.22 0 003.16 1.17 2.7 2.7 0 002-.13 2.26 2.26 0 001-1.44 1.86 1.86 0 00.12-1.42c-.05-.08-.21-.14-.45-.26z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@euggoncalves?_t=ZM-90vlP36sNyO&_r=1" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-primary">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.75 8.81a5.1 5.1 0 01-3.34-1.22v6.94a6.74 6.74 0 11-6.74-6.73 6.6 6.6 0 011.33.14v2.53a3.92 3.92 0 00-1.33-.23 3.94 3.94 0 103.94 3.93V2h2.82a5.09 5.09 0 005.1 5.09z" />
                  </svg>
                </a>
              </div>
              
              <div className="mt-12">
                <a
                  href="#about"
                  className="group inline-flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
                >
                  <span>Défiler pour en savoir plus</span>
                  <svg
                    className="ml-2 h-4 w-4 animate-bounce group-hover:animate-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex h-full w-full max-w-[22rem] items-center justify-center">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-primary/5 to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background/80 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10" />
              <Image
                src="/images/romaric-portrait.jpg"
                width={450}
                height={580}
                alt="Portrait de Romaric Eugenos Goncalves"
                priority
                className="relative h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
