'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Comptabilité', level: 90 },
    { name: 'Fiscalité', level: 85 },
    { name: 'Manuel de procédures', level: 80 },
    { name: 'Recrutement', level: 75 },
    { name: 'Formation', level: 85 },
    { name: 'Gestion administrative', level: 90 },
    { name: 'Contrôle de gestion', level: 85 },
    { name: 'Analyse financière', level: 90 }
  ];

  const experiences = [
    {
      role: 'Responsable Administratif et Financier',
      company: 'Entreprise ABC',
      period: '2020 - Présent',
      description: 'Gestion complète des opérations administratives et financières, mise en place de procédures optimisées, et pilotage des tableaux de bord de gestion.'
    },
    {
      role: 'Assistant de Gestion',
      company: 'Société XYZ',
      period: '2017 - 2020',
      description: 'Support à la direction financière, préparation des rapports mensuels, et gestion des relations fournisseurs.'
    }
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-36 bg-secondary">
      <div className="container px-6 mx-auto">
        {/* En-tête de section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-accent mr-2"></span>
            Mon Parcours Professionnel
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            À propos de <span className="text-primary">moi</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Passionné par l&apos;excellence administrative et la performance financière, je mets mon expertise au service de l&apos;optimisation des processus et de la création de valeur ajoutée.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Colonne gauche - Présentation et compétences */}
          <div className="space-y-10">
            {/* Présentation */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Qui suis-je ?</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Je m&apos;appelle <span className="font-semibold text-foreground">Romaric Eugenos Goncalves</span>, spécialiste en administration et gestion financière avec plus de 7 ans d&apos;expérience dans l&apos;optimisation des processus administratifs et l&apos;analyse financière stratégique.
                </p>
                <p>
                  Mon approche allie rigueur méthodologique et vision stratégique pour transformer les défis administratifs en opportunités de croissance pour les entreprises.
                </p>
              </div>
            </div>

            {/* Compétences */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Mes compétences clés</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite - Expériences et formation */}
          <div className="space-y-8">
            {/* Expériences professionnelles */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle className="flex items-center text-foreground">
                  <Briefcase className="h-5 w-5 mr-2 text-primary" />
                  Expérience Professionnelle
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-foreground/10">
                  {experiences.map((exp, index) => (
                    <div key={index} className="p-6 hover:bg-muted/30 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-foreground">{exp.role}</h4>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-3 text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Formation */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle className="flex items-center text-foreground">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Formation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-foreground/10">
                  <div className="p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-foreground">Master Contrôle de Gestion, Audit et Finance</h4>
                        <p className="text-sm text-muted-foreground">IAE Paris - École des Managers et des Dirigeants</p>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full whitespace-nowrap">
                        2023 - 2025
                      </span>
                    </div>
                    <p className="mt-3 text-muted-foreground">
                      Spécialisation en analyse financière avancée et pilotage de la performance.
                    </p>
                  </div>
                  <div className="p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-foreground">Licence Professionnelle Finance et Contrôle de Gestion</h4>
                        <p className="text-sm text-muted-foreground">Université Paris-Dauphine</p>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full whitespace-nowrap">
                        2013 - 2016
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle className="flex items-center text-foreground">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Expert Comptable (DSCG) - Diplôme Supérieur de Comptabilité et de Gestion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Certification en Analyse Financière Internationale (CFA Niveau 1)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Certification en Gestion des Risques Financiers (FRM Part 1)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
