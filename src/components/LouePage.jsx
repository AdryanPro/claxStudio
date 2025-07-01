import React from 'react'
import l1 from "../assets/loue/l1.jpg"
import l2 from "../assets/loue/l2.jpg"
import l3 from "../assets/loue/l3.jpg"
import l4 from "../assets/loue/l4.jpg"
import l5 from "../assets/loue/l5.jpg"
import l6 from "../assets/loue/l6.jpg"
import l7 from "../assets/loue/l7.jpg"
import l8 from "../assets/loue/l8.jpg"
import l9 from "../assets/loue/l9.jpg"
import loueDisplay1 from "../assets/loue/loueDisplay1.png"
import loueDisplay2 from "../assets/loue/loueDisplay2.png"
import "../CSS/loue.css"
import TopProject from './TopProject'

export default function LouePage() {
    const projectData = {
        title: 'DESIGN PACKAGING',
        subtitle: 'Loué',
        projectNumber: '09',
        mission: "Redéfinition de l'expérience packaging pour Loué, marque d'œufs haut de gamme, avec un objectif : transformer un produit du quotidien en un objet de désir.",
        realisation: [
            "Design du packaging : Boîte en métal chromé, avec ouverture par glissière pour un effet 'coffret précieux'.",
            "Expérience tactile : Intégration d'une mousse sur-mesure, évoquant la fragilité des œufs tout en assurant leur protection.",
            "Identité visuelle : Minimalisme élégant (typo gravée, finitions métallisées) pour renforcer le positionnement premium.",
            "Écologie : Métal recyclable et mousse sans plastique, aligné avec les valeurs durables de la marque.",
        ],
        defi: "Allier luxe et fonctionnalité pour un produit fragile. Détourner les codes traditionnels du packaging alimentaire (carton/plastique) vers un objet collector.",
        result: "Un packaging iconique qui Élève la perception de la marque, Devient un objet de collection et Répond aux exigences logistiques.",
        images: [l1, l2, l3, l4, l5, l6, l7, l8, l9],
    };

    return (
        <div>
            <TopProject {...projectData} />
            <section className='displayLoue'>
                <img src={loueDisplay1} alt="" className='loueDisplay1'/>
                <img src={loueDisplay2} alt="" className='loueDisplay2'/>
            </section>
        </div>
    );
}
