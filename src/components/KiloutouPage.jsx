import React from 'react'
import TopProject from './TopProject';
import k1 from "../assets/Kiloutou/k1.png"
import k2 from "../assets/Kiloutou/k2.png"
import k3 from "../assets/Kiloutou/k3.png"
import k4 from "../assets/Kiloutou/k4.png"
import k5 from "../assets/Kiloutou/k5.png"
import imgGauche from "../assets/Kiloutou/GrosGauche.png"
import imgDroite1 from "../assets/Kiloutou/DroiteHaut.png"
import imgDroite2 from "../assets/Kiloutou/DroiteBas.png"
import mascotte from "../assets/Kiloutou/Mascotte.png"
import '../CSS/Kiloutou.css'
import AOS from 'aos';

export default function KiloutouPage() {
  const projectData = {
    title: 'CAMPAGNE 360',
    subtitle: 'Kiloutou',
    projectNumber: '08',
    mission: "Conception d'une campagne publicitaire pour Kiloutou, visant à cibler les artisans et à renforcer l'image de la marque comme partenaire de confiance.",
    realisation: [
        "Création de la mascotte : Design d'un personnage sympathique et reconnaissable, inspiré par l'univers des artisans (ex : tenue de travail, outils).",
        "Ton et message : Communication simple, directe et humoristique, mettant en avant les solutions Kiloutou comme indispensables pour les artisans.",
        "Direction artistique : Choix d'une palette chromatique vive et contrastée, et d'une typographie robuste pour refléter l'univers professionnel.",
    ],
    defi: "Créer une mascotte qui soit à la fois mémorable, polyvalente (pour différents supports) et proche des artisans.",
    result: "Une campagne qui renforce l'image de Kiloutou comme partenaire des artisans, avec une mascotte devenue emblématique.",
    images: [k1, k2, k3, k4, k5],
  };
  AOS.init();
  return (
    <div>
      <TopProject {...projectData} />
      <section className="kiloutouDisplayImg">
        <div className="kiloutoutouGrid">
          <img src={imgGauche} alt="" className="left-img" />
          <div className="right-images">
            <img src={imgDroite1} alt="" />
            <img src={imgDroite2} alt="" />
          </div>
        </div>
        <img data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" src={mascotte} alt="" className='mascotteKiloutou'/>
      </section>
    </div>
  )
}
