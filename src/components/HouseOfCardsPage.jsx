import React from 'react'
import TopProject from './TopProject';
import h1 from "../assets/house/h1.jpg"
import h2 from "../assets/house/h2.jpg"
import h3 from "../assets/house/h3.jpg"
import h4 from "../assets/house/h4.jpg"
import h5 from "../assets/house/h5.jpg"
import h6 from "../assets/house/h6.jpg"
import h7 from "../assets/house/h7.jpg"
import h8 from "../assets/house/h8.jpg"
import h9 from "../assets/house/h9.jpg"
// import h10 from "../assets/house/h10.jpg"
// import h11 from "../assets/house/h11.jpg"

export default function HouseOfCardsPage() {
    const projectData = {
        title: 'CRÉATION DE GÉNÉRIQUE',
        subtitle: 'HOUSE OF CARDS',
        projectNumber: '10',
        mission: "repenser le générique emblématique de House of Cards en utilisant une technique de collage animé, pour renforcer les thèmes de manipulation politique et de fragilité du pouvoir.",
        realisation: [
            "création des assets : Découpage transformés en stickers Photoshop pour modularité. Photomontages d'archives politiques retravaillées.",
            "animation After Effects : création de mouvements saccadés, Effets de déchirure, transitions.",
            "dA unifiée : Bibliothèque de formes réutilisables (mains, typo déstructurée, personnages).",
        ],
        defi: "allier l'imperfection du collage manuel à une animation fluide, sans perdre l'identité sombre de la série.",
        result: "Un générique avec une approche innovante et une symbolique percutante.",
        images: [h1, h2, h3, h4, h5, h6, h7, h8, h9],
    };
  return (
    <div>
        <TopProject {...projectData} />
        
    </div>
  )
}
