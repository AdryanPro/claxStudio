import React from 'react'
import TopProject from './TopProject';
import pe1 from "../assets/Plaisir/pe1.jpg"
import pe2 from "../assets/Plaisir/pe2.jpg"
import pe3 from "../assets/Plaisir/pe3.jpg"
import pe4 from "../assets/Plaisir/pe4.jpg"
import pe5 from "../assets/Plaisir/pe5.jpg"
import pe6 from "../assets/Plaisir/pe6.jpg"
import pe7 from "../assets/Plaisir/pe7.jpg"
import pe8 from "../assets/Plaisir/pe8.jpg"
import pe9 from "../assets/Plaisir/pe9.jpg"
import pe10 from "../assets/Plaisir/pe10.jpg"
import plaisir1 from "../assets/Plaisir/plaisir1.png"
import plaisir2 from "../assets/Plaisir/plaisir2.png"
import plaisir3 from "../assets/Plaisir/plaisir3.png"
import plaisir4 from "../assets/Plaisir/plaisir4.png"
import plaisir5 from "../assets/Plaisir/plaisir5.png"
import plaisir6 from "../assets/Plaisir/plaisir6.png"
import "../CSS/plaisir.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PlaisirsPage() {
  const projectData = {
    title: 'Set Design & Photographie',
    subtitle: 'Tempting The Void',
    projectNumber: '04',
    mission: " Création d'une série de décors immersifs inspirés de l'esthétique iconique du Studio 54, combinant set design et photographie pour capturer l'esprit glamour et festif des années 70.",
    realisation: [
        "Set design : Conception de décors sur mesure, utilisant des matériaux réfléchissants, des couleurs vibrantes et des textures luxueuses.",
        "Photographie : Captation des décors avec un focus sur l'ambiance lumineuse et les détails architecturaux, en jouant avec les contrastes et les reflets.",
        "Direction artistique : Coordination des éléments visuels (accessoires, éclairage) pour renforcer l'immersion.",
    ],
    defi: " Recréer l'esprit du Studio 54 tout en proposant une interprétation moderne et innovante.",
    result: " Une série de photographies immersives, prêtes à inspirer des événements ou des productions contemporaines.",
    images: [pe1, pe2, pe3, pe4, pe5, pe6, pe7, pe8, pe9, pe10],
  };
  AOS.init();
  return (
    <div>
      <TopProject {...projectData}/>
      <div className="pdfWrapper">
        <section className="displayPlaisirImg">
          <div className="imgPlaisirWrapper">
            <img data-aos="flip-right" data-aos-duration="2000" src={plaisir1} alt="" className='plaisirImg1 plaisirEquilbre'/>
            <img data-aos="flip-right" data-aos-duration="2000" data-aos-delay="300" src={plaisir2} alt="" className='plaisirImg2 img2Plaisir'/>
            <img data-aos="flip-right" data-aos-duration="2000" data-aos-delay="400" src={plaisir3} alt="" className='plaisirImg3 plaisirEquilbre'/>
            <img data-aos="flip-right" data-aos-duration="2000" data-aos-delay="500" src={plaisir4} alt="" className='plaisirImg4 img2Plaisir'/>
            <img data-aos="flip-right" data-aos-duration="2000" data-aos-delay="600" src={plaisir5} alt="" className='plaisirImg5 plaisirEquilbre'/>
            <img data-aos="flip-right" data-aos-duration="2000" data-aos-delay="700" src={plaisir6} alt="" className='plaisirImg6 img2Plaisir'/>
          </div>
        </section>
            <a href="/plaisir.pdf" target="_blank" rel="noopener noreferrer" className="project-link linkMolly">
                <span>voir l’intégralité du projet</span>
                <span className="arrow">›</span>
            </a>
      </div>
    </div>
  )
}
