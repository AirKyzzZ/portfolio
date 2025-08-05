import { Contact2 } from "@/components/ui/ContactForm/contact-2";

const ContactForm = () => {
  return (
    <Contact2 
      title="Contactez-moi"
      description="Je suis disponible pour vos questions, retours ou opportunités de collaboration. Dites-moi comment je peux vous aider !"
      phone="+33 7 83 97 23 60"
      email="maxime.mansiet@gmail.com"
      web={{ label: "maximemansiet.fr", url: "https://maximemansiet.fr/" }}
    />
  );
};

export { ContactForm };
