"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/ContactForm/button";
import { Input } from "@/components/ui/ContactForm/input";
import { Label } from "@/components/ui/ContactForm/label";
import { Textarea } from "@/components/ui/ContactForm/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contactez-moi",
  description = "Je suis disponible pour vos questions, retours ou opportunités de collaboration. Dites-moi comment je peux vous aider !",
  phone = "+33 7 83 97 23 60",
  email = "maxime.mansiet@gmail.com",
  web = { label: "maxime-mansiet.fr", url: "https://maxime-mansiet.fr/" },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xeozzojy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject || "Nouveau message du portfolio",
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section className="pb-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Coordonnées
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Téléphone : </span>
                  <a href={`tel:${phone}`} className="underline">
                    {phone}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Email : </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Site web : </span>
                  <a href={web.url} target="_blank" rel="noopener noreferrer" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            {submitStatus === "success" && (
              <div className="mb-4 rounded-md bg-green-50 p-4 text-green-800 border border-green-200">
                <p className="font-medium">Message envoyé avec succès !</p>
                <p className="text-sm">Je vous répondrai dans les plus brefs délais.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 rounded-md bg-red-50 p-4 text-red-800 border border-red-200">
                <p className="font-medium">Erreur lors de l&apos;envoi</p>
                <p className="text-sm">Veuillez réessayer ou me contacter directement par email.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="votre.email@exemple.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Sujet</Label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="Sujet de votre message (optionnel)"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                />
              </div>
              
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  placeholder="Tapez votre message ici..."
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={errors.message ? "border-red-500" : ""}
                  rows={6}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
