'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Manuel de procédures administratives et financières',
    description: 'Rédaction complète du manuel de procédures pour optimiser les processus administratifs et financiers de l\'entreprise, avec mise en place de tableaux de bord de suivi.',
    tags: ['Comptabilité', 'Gestion', 'Automatisation', 'Processus'],
    image: '/images/project1.jpg',
    company: "TCHAOU GROUP PRODUCT & SERVICES",
    year: "2023",
    role: "Consultant Senior",
    link: "#"
  },
  {
    title: 'Appui comptable et fiscal',
    description: 'Accompagnement complet dans la gestion comptable et le respect des obligations fiscales, avec mise en place de procédures optimisées et formation des équipes.',
    tags: ['Formation', 'Fiscalité', 'Pédagogie', 'Conformité'],
    image: '/images/project2.jpg',
    company: "GARAGE MOTOS DON DE DIEU",
    year: "2022-2023",
    role: "Consultant Comptable",
    link: "#"
  },
  {
    title: 'Programme de Formation Continue',
    description: 'Conception et animation d\'un programme de formation sur les fondamentaux de la comptabilité et de la gestion financière pour professionnels en reconversion.',
    tags: ['Pédagogie', 'Formation', 'Comptabilité', 'Gestion'],
    image: '/images/project3.jpg',
    company: "CHAK TALENTS SOLUTIONS",
    year: "2022",
    role: "Formateur Principal",
    link: "#"
  },
  {
    title: 'Optimisation des Processus Comptables',
    description: 'Audit et optimisation des processus comptables pour une entreprise de services, avec réduction des temps de traitement de 35%.',
    tags: ['Audit', 'Optimisation', 'Automatisation', 'Processus'],
    image: '/images/project4.jpg',
    company: "ENTREPRISE XYZ",
    year: "2021-2022",
    role: "Consultant en Organisation",
    link: "#"
  },
  {
    title: 'Mise en place ERP Comptable',
    description: 'Déploiement et paramétrage d\'une solution ERP intégrée pour la gestion comptable et financière d\'un groupe de 5 sociétés.',
    tags: ['ERP', 'Digitalisation', 'Intégration', 'Formation'],
    image: '/images/project5.jpg',
    company: "GROUPE ABC",
    year: "2021",
    role: "Chef de Projet",
    link: "#"
  },
  {
    title: 'Audit Financier',
    description: 'Réalisation d\'un audit financier complet avec recommandations stratégiques pour l\'amélioration de la performance financière.',
    tags: ['Audit', 'Analyse Financière', 'Recommandations', 'Stratégie'],
    image: '/images/project6.jpg',
    company: "SOCIÉTÉ BETA",
    year: "2020-2021",
    role: "Auditeur Financier",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-28 lg:py-36 bg-background">
      <div className="container px-6 mx-auto">
        {/* En-tête de section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-accent mr-2"></span>
            Mes Réalisations
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Mes <span className="text-primary">Projets</span> Récents
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Découvrez une sélection de mes réalisations professionnelles et projets personnels
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Tous', 'Comptabilité', 'Formation', 'Audit', 'Gestion', 'Optimisation'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'Tous' 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-foreground/5 text-foreground/80 hover:bg-foreground/10 hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image du projet */}
              <div className="aspect-video overflow-hidden bg-foreground/5">
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="space-y-2 text-white">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-white/90 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenu de la carte */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {project.year}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-1.5 rounded-full bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 rounded-full bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <span className="font-medium text-foreground">{project.company}</span>
                  <span className="mx-2">•</span>
                  <span>{project.role}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs font-normal bg-foreground/5 hover:bg-foreground/10 border-foreground/10 text-foreground/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-6 w-full group/button border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5"
                  asChild
                >
                  <a href={project.link} className="flex items-center justify-center">
                    <span>Voir le projet</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bouton Voir plus */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 border-2 border-foreground/20 hover:border-primary/30 hover:bg-primary/5 hover:text-foreground transition-colors"
          >
            Voir tous les projets
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
