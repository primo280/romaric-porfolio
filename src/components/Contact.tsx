'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, User, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // En production, vous décommenterez ceci et supprimerez le setTimeout ci-dessus
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi du formulaire');
      */
      
      setSubmitStatus({
        success: true,
        message: 'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
      });
      
      // Réinitialisation du formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus({
        success: false,
        message: 'Une erreur est survenue. Veuillez réessayer plus tard ou me contacter directement par email.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Effacer le message après 5 secondes
      if (submitStatus) {
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    }
  };

  // Animations
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-36 bg-secondary">
      <div className="container px-6 mx-auto">
        {/* En-tête de section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-accent mr-2"></span>
            Contact
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Prenons <span className="text-primary">contact</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Une question, un projet ou une opportunité de collaboration ? Je serai ravi d&apos;échanger avec vous.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 lg:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Formulaire de contact */}
          <motion.div variants={item} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Card className="relative border-0 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-20"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envoyez-moi un message
                </CardTitle>
                <p className="text-muted-foreground">
                  Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
                </p>
              </CardHeader>
              <CardContent className="relative z-10 pb-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                        Nom complet <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Votre nom" 
                          required 
                          className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-foreground/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                        />
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="votre@email.com" 
                          required 
                          className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-foreground/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                        />
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground/80">
                      Sujet <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="Objet de votre message" 
                        required 
                        className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-foreground/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                      />
                      <MessageSquare className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Décrivez votre projet ou votre demande..." 
                      className="min-h-[150px] bg-background/50 backdrop-blur-sm border-foreground/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/20" 
                      required 
                    />
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="h-5 w-5 mr-2 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </div>

                  <AnimatePresence mode="wait">
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`overflow-hidden rounded-lg border ${
                          submitStatus.success 
                            ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800/50' 
                            : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800/50'
                        }`}
                      >
                        <div className="p-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                              {submitStatus.success ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <AlertCircle className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                            <div className="ml-3">
                              <p className={`text-sm font-medium ${
                                submitStatus.success 
                                  ? 'text-green-800 dark:text-green-200' 
                                  : 'text-red-800 dark:text-red-200'
                              }`}>
                                {submitStatus.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informations de contact */}
          <motion.div variants={item} className="space-y-6">
            <Card className="border-0 shadow-lg overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-20"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Mes coordonnées
                </CardTitle>
                <p className="text-muted-foreground">
                  N&apos;hésitez pas à me contacter directement par l&apos;un des moyens ci-dessous.
                </p>
              </CardHeader>
              <CardContent className="relative z-10 pb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/30 backdrop-blur-sm border border-foreground/5 hover:border-primary/20 transition-colors">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a 
                        href="mailto:contact@romaric-eg.com" 
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        contact@romaric-eg.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/30 backdrop-blur-sm border border-foreground/5 hover:border-primary/20 transition-colors">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Téléphone</h3>
                      <a 
                        href="tel:+33612345678" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +33 6 12 34 56 78
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">Disponible du lundi au vendredi, de 9h à 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/30 backdrop-blur-sm border border-foreground/5 hover:border-primary/20 transition-colors">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Localisation</h3>
                      <p className="text-muted-foreground">Paris, France</p>
                      <p className="text-xs text-muted-foreground mt-1">Disponible pour des missions en présentiel ou en télétravail</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3">Horaires de disponibilité</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium text-foreground">09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi</span>
                      <span className="font-medium text-foreground">Sur rendez-vous</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="font-medium text-foreground">Fermé</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}