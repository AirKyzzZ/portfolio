# Configuration Formspree

## Étapes pour configurer Formspree

1. **Créer un compte Formspree**
   - Allez sur https://formspree.io/
   - Créez un compte gratuit
   - Vérifiez votre email

2. **Créer un nouveau formulaire**
   - Dans votre dashboard Formspree
   - Cliquez sur "New Form"
   - Donnez un nom à votre formulaire (ex: "Portfolio Contact")

3. **Récupérer l'endpoint**
   - Formspree vous donnera un endpoint comme `https://formspree.io/f/xpzgqjqr`
   - Remplacez l'endpoint dans le fichier `contact-2.tsx` ligne 70

4. **Configurer les notifications**
   - Dans les paramètres du formulaire
   - Ajoutez votre email `maxime.mansiet@gmail.com` comme destinataire
   - Activez les notifications par email

5. **Tester le formulaire**
   - Remplissez le formulaire sur votre site
   - Vérifiez que vous recevez bien l'email

## Endpoint actuel utilisé
L'endpoint actuel dans le code est : `https://formspree.io/f/xpzgqjqr`

Si vous créez un nouveau formulaire, remplacez cet endpoint par le vôtre dans le fichier `src/components/ui/ContactForm/contact-2.tsx` à la ligne 70.

## Fonctionnalités du formulaire
- ✅ Validation des champs obligatoires (Prénom, Nom, Email, Message)
- ✅ Le champ Sujet est optionnel
- ✅ Validation du format email
- ✅ Messages d'erreur en français
- ✅ Messages de succès/erreur
- ✅ État de chargement pendant l'envoi
- ✅ Réinitialisation du formulaire après envoi réussi 