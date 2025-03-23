import React from 'react'
import Miscible1 from "../assets/MiscibleProject/Miscible1.png"
import Miscible2 from "../assets/MiscibleProject/Miscible2.png"
import Miscible3 from "../assets/MiscibleProject/Miscible3.png"
import Miscible4 from "../assets/MiscibleProject/Miscible4.png"
import Miscible5 from "../assets/MiscibleProject/Miscible5.png"
import TopProject from './TopProject'

export default function MisciblePage() {
    const projectData = {
        title: 'Architecture adaptative par IA',
        subtitle: 'Ethereal Design',
        projectNumber: '02',
        mission: "Explorer l'intelligence artificielle (MidJourney) et des prompts optimisés pour créer une série de visuels abordant des concepts architecturaux innovants.",
        realisation: [
          "processus créatif : Génération d'images, intégrant des principes de biomimétisme et des matériaux durables.",
          "technologie : Utilisation avancée de MidJourney pour affiner les rendus et explorer des styles variés (futuriste, organique, minimaliste).",
          "adaptabilité : Conception de structures modulaires et évolutives, réagissant aux conditions climatiques et topographiques.",
        ],
        defi: " Pousser les limites de la créativité assistée par IA tout en maintenant une cohérence architecturale et fonctionnelle.",
        result: "Une série de concepts visuels percutants, ouvrant de nouvelles perspectives pour l'architecture durable et adaptative.",
        images: [Miscible1, Miscible2, Miscible3, Miscible4, Miscible5],
      };
  return (
    <div>
        <TopProject {...projectData} />
    </div>
  )
}
