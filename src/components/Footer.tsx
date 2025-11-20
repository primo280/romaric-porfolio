'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight, MessageCircle, Music } from 'lucide-react';

const navigation = [
  { label: 'Accueil', href: '#' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Réalisations', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const expertises = [
  'Optimisation des processus',
  'Pilotage financier',
  'Contrôle de gestion',
  'Formation & coaching',
  'Audit organisationnel'
];

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'romaricgoncalves@gmail.com',
    href: 'mailto:romaricgoncalves@gmail.com'
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+2290195462210',
    href: 'tel:+33612345678'
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Cotonou, Bénin'
  }
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/romaric-eugenos-goncalves' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_.goncalves96?igsh=MTE0dG9mOHZ3andxcw%3D%3D&utm_source=qr' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/22995462210' },
  { icon: Music, label: 'TikTok', href: 'https://www.tiktok.com/@euggoncalves?_t=ZM-90vlP36sNyO&_r=1' }
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-foreground/10 bg-secondary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container px-6 py-16">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-8 md:p-12 shadow-sm">
          <div className="absolute -right-20 top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-24 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative z-10 grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
            <div className="inline-flex items-center rounded-full bg-background/80 px-4 py-2 text-sm font-medium text-primary shadow-sm">
              Prêt à collaborer ?
              <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </div>
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Discutons de votre prochain projet stratégique
                </h3>
                <p className="text-sm text-foreground/70 md:text-base">
                  Je vous accompagne sur des missions de transformation administrative et financière, avec un suivi personnalisé et des résultats mesurables.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="gap-2 bg-primary text-white hover:bg-primary/90">
                  <Link href="#contact">
                    Me contacter
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 border-primary/40 text-primary hover:bg-primary/10">
                  <Link href="/resume.pdf" target="_blank">
                    Télécharger le CV
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary shadow-sm">
              Romaric Eugenos Goncalves
            </div>
            <p className="text-lg font-semibold text-foreground">
              Spécialiste en pilotage administratif et financier, engagé pour la performance durable des organisations.
            </p>
            <p className="text-sm text-muted-foreground">
              J&apos;accompagne les dirigeants et leurs équipes dans l&apos;optimisation des processus, la structuration des opérations et la mise en place d&apos;outils de pilotage sur mesure.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Button
                  key={label}
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-primary/20 text-primary hover:bg-primary/10"
                >
                  <Link href={href} aria-label={label}>
                    <Icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/80">
              Navigation
            </h4>
            <nav className="grid gap-3 text-sm">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/80">
              Domaines d&apos;expertise
            </h4>
            <ul className="grid gap-3 text-sm text-muted-foreground">
              {expertises.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/80">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                      {label}
                    </p>
                    {href ? (
                      <Link href={href} className="text-sm text-muted-foreground hover:text-primary">
                        {value}
                      </Link>
                    ) : (
                      <p>{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-foreground/10 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Romaric E. G. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-primary">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-primary">
              Politique de confidentialité
            </Link>
            <Link href="#contact" className="hover:text-primary">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
