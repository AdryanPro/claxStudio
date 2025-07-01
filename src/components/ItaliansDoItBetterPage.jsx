import React from 'react'
import TopProject from './TopProject';
import i1 from "../assets/Italians/i1.jpg"
import i2 from "../assets/Italians/i2.jpg"
import i3 from "../assets/Italians/i3.jpg"
import i4 from "../assets/Italians/i4.jpg"
import i5 from "../assets/Italians/i5.jpg"
import i6 from "../assets/Italians/i6.jpg"
import i7 from "../assets/Italians/i7.jpg"
import i8 from "../assets/Italians/i8.jpg"
import i9 from "../assets/Italians/i9.jpg"
import i10 from "../assets/Italians/i10.jpg"
import i11 from "../assets/Italians/i11.jpg"
import gauche from "../assets/Italians/gauche.png"
import droite from "../assets/Italians/droite.png"
import "../CSS/Italians.css"
import AOS from 'aos';

export default function ItaliansDoItBetterPage() {
  const projectData = {
    title: 'Affiche illustrative',
    subtitle: 'Italians Do It Better',
    projectNumber: '06',
    mission: "Création d'une affiche pour célébrer l'esprit 'Italians Do It Better', en s'inspirant de l'iconique Dolce Vita italienne.",
    realisation: [
        "Direction artistique : Exploration visuelle de la Dolce Vita à travers des éléments symboliques.",
        "Illustration : Création d'une composition riche en détails.",
        "Palette chromatique : Tons chauds et vibrants pour évoquer la chaleur et le luxe italien.",
        "Typographie : Choix d'une police inspirée du design italien.",
    ],
    defi: "Transcender les clichés pour créer une affiche à la fois moderne et intemporelle, tout en restant fidèle à l'esprit de la marque.",
    result: "Une affiche immersive qui incarne l'élégance et la joie de vivre italiennes, prête à captiver son public.",
    images: [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11],
  };
  AOS.init();
  return (
    <div>
      <TopProject {...projectData} />
      <section className="italianDisplayWrapper">
      <img data-aos="zoom-in-right" data-aos-duration="2000" src={gauche} alt="" />
      <img data-aos="zoom-in-left" data-aos-duration="2000" src={droite} alt="" />
      </section>
    </div>
  )
}
