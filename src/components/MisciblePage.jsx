import React from 'react'
import TopProject from './TopProject';
import m1 from "../assets/MiscibleProject/m1.png"
import m2 from "../assets/MiscibleProject/m2.png"
import m3 from "../assets/MiscibleProject/m3.png"
import m4 from "../assets/MiscibleProject/m4.png"
import m5 from "../assets/MiscibleProject/m5.png"
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
    images: [m1, m2, m3, m4, m5],
  };
  return (
    <div>
        <TopProject {...projectData} />
        <section className="displayMiscible">
          {/* Loader */}
        <div class="main">
          <div class="dog">
            <div class="dog__paws">
              <div class="dog__bl-leg leg">
                <div class="dog__bl-paw paw"></div>
                <div class="dog__bl-top top"></div>
              </div>
              <div class="dog__fl-leg leg">
                <div class="dog__fl-paw paw"></div>
                <div class="dog__fl-top top"></div>
              </div>
              <div class="dog__fr-leg leg">
                <div class="dog__fr-paw paw"></div>
                <div class="dog__fr-top top"></div>
              </div>
            </div>

            <div class="dog__body">
              <div class="dog__tail"></div>
            </div>

            <div class="dog__head">
              <div class="dog__snout">
                <div class="dog__nose"></div>
                <div class="dog__eyes">
                  <div class="dog__eye-l"></div>
                  <div class="dog__eye-r"></div>
                </div>
              </div>
            </div>

            <div class="dog__head-c">
              <div class="dog__ear-l"></div>
              <div class="dog__ear-r"></div>
            </div>
          </div>
        </div>

        </section>
    </div>
  )
}
