import React from 'react'
import TopProject from './TopProject';
import m1 from "../assets/MiscibleProject/m1.jpg"
import m2 from "../assets/MiscibleProject/m2.jpg"
import m3 from "../assets/MiscibleProject/m3.jpg"
import m4 from "../assets/MiscibleProject/m4.jpg"
import m5 from "../assets/MiscibleProject/m5.jpg"
import m6 from "../assets/MiscibleProject/m6.jpg"
import m7 from "../assets/MiscibleProject/m7.jpg"
import m8 from "../assets/MiscibleProject/m8.jpg"
import m9 from "../assets/MiscibleProject/m9.jpg"
import mTitle from "../assets/MiscibleProject/mTitlte.png"
import mDisplay1 from "../assets/MiscibleProject/mDisplay1.png"
import mDisplay2 from "../assets/MiscibleProject/mDisplay2.png"
import mDisplay3 from "../assets/MiscibleProject/mDisplay3.png"
import '../CSS/Miscible.css'

export default function MisciblePage() {
  const projectData = {
    title: 'CRÉATION DE MARQUE',
    subtitle: 'Miscible',
    projectNumber: '02',
    mission: "Concevoir une identité visuelle et un packaging premium, en adéquation avec les valeurs de durabilité et de sophistication.",
    realisation: [
        "Identité visuelle : Typographie customisée, palette chromatique neutre, design épuré.",
        "Packaging : Flacons en verre soufflé, sachets de recharge en papier recyclé certifié FSC, finitions soft touch mat et embossage du logo.",
        "Expérience utilisateur : Optimisation de l'ergonomie des contenants et des systèmes de recharge.",
    ],
    defi: " Allier les contraintes techniques de l'écoresponsabilité (matériaux recyclés, processus de production durable) avec les exigences du luxe (toucher premium, esthétique raffinée).",
    result: "Une marque qui redéfinit le luxe moderne, avec une identité visuelle et tactile cohérente, prête à séduire un public exigeant.",
    images: [m1, m2, m3, m4, m5, m6, m7, m8, m9],
  };
  return (
    <div>
        <TopProject {...projectData} />
        <div className="newDivForPdf">
          <section className="displayMiscible">
            <img src={mTitle} alt="" className='mTitle'/>
            <div className="displayMiscibleWrapperImg">
              <img src={mDisplay1} alt="" className='mDisplay1'/>
              <img src={mDisplay2} alt="" className='mDisplay2'/>
              <img src={mDisplay3} alt="" className='mDisplay3'/>
            </div>
          </section>
            <a href="/Miscible.pdf" target="_blank" rel="noopener noreferrer" className="project-link linkMiscible">
              <span>voir l’intégralité du projet</span>
              <span className="arrow">›</span>
            </a>
        </div>
    </div>
  )
}
