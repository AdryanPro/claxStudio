import React from 'react'
import TopProject from './TopProject';
import e1 from "../assets/Ethereal/e1.png"
import e2 from "../assets/Ethereal/e2.png"
import e3 from "../assets/Ethereal/e3.png"
import e4 from "../assets/Ethereal/e4.png"
import e5 from "../assets/Ethereal/e5.png"
import "../CSS/Ethereal.css"

export default function EtherealDesignePage() {
    const projectData = {
        title: 'Architecture adaptative par IA',
        subtitle: 'Ethereal Design',
        projectNumber: '03',
        mission: "Explorer l'intelligence artificielle (MidJourney) et des prompts optimisés pour créer une série de visuels abordant des concepts architecturaux innovants.",
        realisation: [
          "processus créatif : Génération d'images, intégrant des principes de biomimétisme et des matériaux durables.",
          "technologie : Utilisation avancée de MidJourney pour affiner les rendus et explorer des styles variés (futuriste, organique, minimaliste).",
          "adaptabilité : Conception de structures modulaires et évolutives, réagissant aux conditions climatiques et topographiques.",
        ],
        defi: " Pousser les limites de la créativité assistée par IA tout en maintenant une cohérence architecturale et fonctionnelle.",
        result: "Une série de concepts visuels percutants, ouvrant de nouvelles perspectives pour l'architecture durable et adaptative.",
        images: [e1, e2, e3, e4, e5],
      };
  return (
    <div>
        <TopProject {...projectData} />
        <div className="displayEtherealImg">
          <div class="wrapper">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="shadow"></div>
              <div class="shadow"></div>
              <div class="shadow"></div>
          </div>
        </div>
    </div>
  )
}
