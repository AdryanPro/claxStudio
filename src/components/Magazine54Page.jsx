import React from 'react'
import TopProject from './TopProject';
import s1 from "../assets/Studio/s1.png"
import s2 from "../assets/Studio/s2.png"
import s3 from "../assets/Studio/s3.png"
import s4 from "../assets/Studio/s4.png"
import s5 from "../assets/Studio/s5.png"

export default function Magazine54Page() {
  const projectData = {
    title: 'Magazine Éditorial',
    subtitle: 'Studio 54',
    projectNumber: '05',
    mission: "Conception d'un magazine explorant l'héritage culturel du Studio 54, en mettant en lumière son influence sur l'art, la mode, la musique et le design.",
    realisation: [
        "Contenu éditorial : Articles approfondis sur l'histoire du Studio 54, ses icônes, et son influence sur des œuvres modernes (films, collections de mode, installations artistiques).",
         "Design graphique : Mise en page dynamique, intégrant des photographies d'archives, des visuels contemporains et des illustrations customisées.",
         "Production : Choix de papiers premium et de finitions spécifiques (vernis sélectif, dorures) pour renforcer l'expérience tactile.",
     ],
     defi: " Allier l'esthétique rétro du Studio 54 à une approche éditoriale moderne et engageante.",
     result: "Un magazine qui capture l'essence du Studio 54 tout en explorant son impact culturel durable.",
     images: [s1, s2, s3, s4, s5],
  };

  return (
    <div>
      <TopProject {...projectData}/>
    </div>
  )
}
