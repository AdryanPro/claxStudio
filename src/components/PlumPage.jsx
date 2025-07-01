import React from 'react'
import pl1 from "../assets/plum/pl1.jpg"
import pl2 from "../assets/plum/pl2.jpg"
import pl3 from "../assets/plum/pl3.jpg"
import pl4 from "../assets/plum/pl4.jpg"
import pl5 from "../assets/plum/pl5.jpg"
import pl6 from "../assets/plum/pl6.jpg"
import pl7 from "../assets/plum/pl7.jpg"
import pl8 from "../assets/plum/pl8.jpg"
import plumVideo from "../assets/plum/plumVideo.mov"
import pDisplay1 from "../assets/plum/pDisplay1.png"
import pDisplay2 from "../assets/plum/pDisplay2.png"
import pDisplay3 from "../assets/plum/pDisplay3.png"
import pDisplay4 from "../assets/plum/pDisplay4.png"
import "../CSS/plum.css"
import TopProject from './TopProject'

export default function PlumPage() {
    const projectData = {
        title: 'MOTION DESIGN',
        subtitle: 'PLUM LIVING',
        projectNumber: '11',
        mission: "création de contenus visuels et d'une vidéo en motion design pour Plum Living, destinés aux réseaux sociaux, avec pour objectif de capter l’attention et d’inciter à l’action.",
        realisation: [
            "conception de visuels dynamiques et attractifs, intégrant la forme du logo comme repère visuel et support d’accroche.",
            "réalisation d’une vidéo motion design courte et rythmée, utilisant les lignes du logo pour guider le regard, structurer l'information et renforcer la mémorisation du message.",
            "direction artistique : Palette raffinée en accord avec l’identité de Plum Living, typographies impactantes, mise en scène graphique centrée sur le mouvement et la clarté.",
        ],
        defi: "développer une campagne visuelle percutante en créant un élément central d'identité et une cohérence graphique.",
        result: "une série de contenus performants, à la fois élégants et engageants, qui renforcent l’impact digital de Plum Living et facilitent le passage à l’action des consommateurs.",
        images: [pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8],
    };
  return (
    <div>
        <TopProject {...projectData} />
        <section className="displayPlum">
          <div className="squarePlumImg">
            <img src={pDisplay1} alt="" />
            <img src={pDisplay2} alt="" />
            <img src={pDisplay3} alt="" />
            <img src={pDisplay4} alt="" />
          </div>
            <video
            src={plumVideo}
            autoPlay
            loop
            muted
            playsInline
            width="1568"
            className='plum-video'
            style={{ pointerEvents: 'none' }}
            >
                Your browser does not support the video tag.
            </video>
        </section>
    </div>
  )
}
