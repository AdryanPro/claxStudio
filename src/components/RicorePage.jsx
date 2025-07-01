import React from 'react'
import r1 from "../assets/ricore/r1.jpg"
import r2 from "../assets/ricore/r2.jpg"
import r3 from "../assets/ricore/r3.jpg"
import r4 from "../assets/ricore/r4.jpg"
import r5 from "../assets/ricore/r5.jpg"
import r6 from "../assets/ricore/r6.jpg"
import r7 from "../assets/ricore/r7.jpg"
import r8 from "../assets/ricore/r8.jpg"
import r9 from "../assets/ricore/r9.jpg"
import ricoreDisplay1 from "../assets/ricore/ricoreDisplay1.png"
import ricoreDisplay2 from "../assets/ricore/ricoreDisplay2.png"
import ricoreDisplay3 from "../assets/ricore/ricoreDisplay3.png"
import TopProject from './TopProject'
import "../CSS/ricore.css"
export default function RicorePage() {
    const projectData = {
        title: 'Rebranding',
        subtitle: 'RICORÉ',
        projectNumber: '12',
        mission: "refonte de l’identité visuelle de Ricoré afin de moderniser la marque et séduire une nouvelle cible : les trentenaires et jeunes actifs en quête de rituels bien-être.",
        realisation: [
            "création de nouveaux packagings plus modernes et attractifs, valorisant la douceur du produit et son rôle dans un moment de calme et de recentrage matinal.",
            "déclinaison de visuels pour supports digitaux et print, intégrant une direction artistique cohérente et émotionnelle.",
            "ton et message : Une communication douce, solaire et apaisante, centrée sur le bien-être et la chaleur d’un moment pour soi, chaque matin.",
            "direction artistique : Palette lumineuse aux teintes chaudes et naturelles, photographie douce et sensorielle, typographies sobres et chaleureuses",
        ],
        defi: "réconcilier l’ADN historique et chaleureux de Ricoré avec des codes contemporains, plus épurés et sensoriels, tout en affirmant un nouveau territoire de communication autour du rituel du matin",
        result: "un rebranding complet qui positionne Ricoré comme une marque contemporaine, complice des petits instants essentiels, tout en conservant son héritage affectif.",
        images: [r1, r2, r3, r4, r5, r6, r7, r8, r9],
    };
  return (
    <div>
        <TopProject {...projectData} />
        <section className="ricoreDisplay">
           <img src={ricoreDisplay1} alt="" className='ricoreDisplay1'/>
          <div className="leftricoreDisplay">
            <img src={ricoreDisplay3} alt="" className='ricoreDisplay3'/>
            <img src={ricoreDisplay2} alt="" />
          </div>
         
        </section>
    </div>
  )
}
