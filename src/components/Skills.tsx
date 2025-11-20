'use client';



export default function Skills() {
 
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
