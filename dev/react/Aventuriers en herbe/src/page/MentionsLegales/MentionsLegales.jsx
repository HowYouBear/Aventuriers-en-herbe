import React from 'react';
import styles from "./MentionsLegales.module.scss"

const MentionsLegales = () => {
    return (
        <div className={styles.mentionsLegales}>
            <h1>Mentions Légales</h1>
            <h2>Editeur du Site</h2>
            <p>Raison Sociale : Aventuriers en Herbe SAS <br />Siège Social : 123 Rue de l'Aventure, 75000 Paris <br />Numéro de SIRET : 12345678901234 <br />Contact : contact@aventuriersenherbe.com <br />Téléphone : +33 1 23 45 67 89</p>
            <h2>Directeur de la Publication</h2>
            <p>Contact du Directeur de la Publication : directeur@aventuriersenherbe.com</p>
            <h2>Hébergement du Site</h2>
            <p>L'hébergement du Site est assuré par Aventure Hosting Ltd. <br />Siège Social de l'Hébergeur : 567 Rue de la Technologie, 12345 Ville Hébergée <br />Contact de l'Hébergeur : hosting@aventurehosting.com</p>
            <h2>Propriété Intellectuelle</h2>
            <p>Tous les contenus présents sur le Site, tels que textes, images, logos, marques, vidéos, et graphiques, sont protégés par les lois sur la propriété intellectuelle. Toute reproduction, distribution ou utilisation non autorisée de ces éléments est strictement interdite.</p>
            <h2>Collecte de Données Personnelles</h2>
            <p>Lorsque vous utilisez le Site, des données personnelles peuvent être collectées conformément à notre Politique de Confidentialité. En utilisant le Site, vous consentez à cette collecte.</p>
            <h2>Cookies</h2>
            <p>Le Site peut utiliser des cookies pour améliorer l'expérience de navigation de l'utilisateur. Vous pouvez en savoir plus sur l'utilisation des cookies dans notre Politique de Cookies.</p>
            <h2>Responsabilité</h2>
            <p>Nous nous efforçons de fournir des informations précises et à jour sur le Site. Cependant, nous ne pouvons garantir l'exactitude de ces informations. Nous déclinons toute responsabilité pour tout dommage résultant de l'utilisation du Site.</p>
            <h2>Liens Externes</h2>
            <p>Le Site peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites, et vous les visitez à vos propres risques.</p>
            <h2>Droits Applicable et Juridiction</h2>
            <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents sont ceux de Paris.</p>
            <h2>Modifications des Mentions Légales</h2>
            <p>Nous nous réservons le droit de modifier ces mentions légales à tout moment. Les modifications prendront effet dès leur publication sur le Site.</p>
            <h2>Contact</h2>
            <p>Pour toute question ou demande concernant les présentes mentions légales, veuillez nous contacter à l'adresse suivante : contact@aventuriersenherbe.com</p>
        </div>
    );
};

export default MentionsLegales;