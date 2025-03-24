import React from 'react'
import TopProject from './TopProject';
import n1 from "../assets/Nuit/n1.png"
import n2 from "../assets/Nuit/n2.png"
import n3 from "../assets/Nuit/n3.png"
import n4 from "../assets/Nuit/n4.png"
import n5 from "../assets/Nuit/n5.png"
import gauche from "../assets/Nuit/MainGauche.png"
import droite from "../assets/Nuit/MainDroite.png"
import "../CSS/nuit.css"
import AOS from 'aos';

export default function Nuit() {
  const projectData = {
    title: 'COUVERTURE DE LIVRE',
    subtitle: 'Nuit Étoilée',
    projectNumber: '07',
    mission: "Conception de couvertures illustrées pour une série de livres jeunesse, visant à captiver les jeunes lecteurs tout en reflétant l'univers magique des histoires.",
    realisation: [
        "Illustration : Dessins colorés et stylisés, mettant en scène des personnages attachants et des décors fantastiques.",
        "Typographie : Choix de polices ludiques et lisibles, intégrées harmonieusement à l'illustration.",
        "Palette chromatique : Couleurs vives et contrastées pour éveiller la curiosité et l'imagination.",
        "Composition : Mise en page dynamique, guidant l'œil de l'enfant vers les éléments clés de l'histoire.",
    ],
    defi: "Allier simplicité et richesse visuelle pour s'adapter à un public jeune tout en restant attractif pour les parents.",
    result: "Des couvertures qui donnent vie aux histoires, incitant les enfants à plonger dans l'univers des livres.",
    images: [n1, n2, n3, n4, n5],
  };
  AOS.init();
  return (
    <div>
      <TopProject {...projectData} />
      <section className="nuitDisplayImg">
        <img data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300" src={gauche} alt="" className='nuitImgGauche'/>
        <img data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300" src={droite} alt="" className='nuitImgDroite'/>
      </section>
    </div>
  )
}
