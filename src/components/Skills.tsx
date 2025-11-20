'use client';

import { FileText, BarChart2, Users, BookOpen, Briefcase, PieChart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Gestion Administrative',
    icon: <FileText className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Gestion documentaire', level: 90 },
      { name: 'Organisation d\'événements', level: 85 },
      { name: 'Gestion des plannings', level: 88 },
      { name: 'Rédaction administrative', level: 82 },
    ]
  },
  {
    title: 'Comptabilité & Finance',
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Comptabilité générale', level: 92 },
      { name: 'Analyse financière', level: 88 },
      { name: 'Gestion de trésorerie', level: 90 },
      { name: 'Contrôle budgétaire', level: 85 },
    ]
  },
  {
    title: 'Ressources Humaines',
    icon: <Users className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Recrutement', level: 85 },
      { name: 'Formation du personnel', level: 88 },
      { name: 'Gestion des paies', level: 80 },
      { name: 'Droit du travail', level: 82 },
    ]
  },
  {
    title: 'Formation & Développement',
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Conception de formations', level: 90 },
      { name: 'Animation de sessions', level: 88 },
      { name: 'Évaluation des compétences', level: 85 },
      { name: 'Tutoring', level: 87 },
    ]
  },
  {
    title: 'Management de Projet',
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Planification', level: 88 },
      { name: 'Gestion des risques', level: 85 },
      { name: 'Méthodologie Agile', level: 82 },
      { name: 'Gestion des parties prenantes', level: 87 },
    ]
  },
  {
    title: 'Analyse & Reporting',
    icon: <PieChart className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Tableaux de bord', level: 90 },
      { name: 'Analyse de données', level: 85 },
      { name: 'Rapports financiers', level: 88 },
      { name: 'Indicateurs de performance', level: 86 },
    ]
  }
];

export default function Skills() {
  const getProgressColor = (level: number) => {
    if (level >= 85) return 'bg-primary';
    if (level >= 70) return 'bg-accent';
    return 'bg-foreground/30';
  };

  return (
    <section id="skills" className="w-full py-20 md:py-28 lg:py-36 bg-background">
      <div className="container px-6 mx-auto">
        
        {/* Compétences complémentaires 
        
        {/* En-tête de section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-accent mr-2"></span>
           Compétences Complémentaires
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Expertise <span className="text-primary">Professionnelle</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Un large éventail de compétences acquises au fil de mon parcours professionnel,
            alliant expertise technique et savoir-être relationnel.
          </p>
        </div>

        
        

        {/* Compétences complémentaires */}
        <div className="mt-20 max-w-4xl mx-auto">
          
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'SAP', 'SAGE', 'CIEL', 'Excel Avancé', 'Power BI',
              'Gestion des contrats', 'Négociation', 'Leadership',
              'Communication', 'Travail d\'équipe', 'Résolution de problèmes',
              'Gestion du temps', 'Adaptabilité', 'Créativité'
            ].map((skill, index) => (
              <span 
                key={index}
                className="inline-flex items-center rounded-full bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground/90 ring-1 ring-inset ring-foreground/10 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>  
  );
}
