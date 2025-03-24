import React from 'react'
import TopProject from './TopProject';
import pe1 from "../assets/Plaisir/pe1.png"
import pe2 from "../assets/Plaisir/pe2.png"
import pe3 from "../assets/Plaisir/pe3.png"
import pe4 from "../assets/Plaisir/pe4.png"
import pe5 from "../assets/Plaisir/pe5.png"

export default function PlaisirsPage() {
  const projectData = {
    title: 'Set Design & Photographie',
    subtitle: 'Plaisirs Ephémères',
    projectNumber: '04',
    mission: " Création d'une série de décors immersifs inspirés de l'esthétique iconique du Studio 54, combinant set design et photographie pour capturer l'esprit glamour et festif des années 70.",
    realisation: [
        "Set design : Conception de décors sur mesure, utilisant des matériaux réfléchissants, des couleurs vibrantes et des textures luxueuses.",
        "Photographie : Captation des décors avec un focus sur l'ambiance lumineuse et les détails architecturaux, en jouant avec les contrastes et les reflets.",
        "Direction artistique : Coordination des éléments visuels (accessoires, éclairage) pour renforcer l'immersion.",
    ],
    defi: " Recréer l'esprit du Studio 54 tout en proposant une interprétation moderne et innovante.",
    result: " Une série de photographies immersives, prêtes à inspirer des événements ou des productions contemporaines.",
    images: [pe1, pe2, pe3, pe4, pe5],
  };
  return (
    <div>
      <TopProject {...projectData}/>
    </div>
  )
}
