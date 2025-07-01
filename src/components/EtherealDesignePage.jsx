import React from 'react'
import TopProject from './TopProject';
import e1 from "../assets/Ethereal/e1.jpg"
import e2 from "../assets/Ethereal/e2.jpg"
import e3 from "../assets/Ethereal/e3.jpg"
import e4 from "../assets/Ethereal/e4.jpg"
import e5 from "../assets/Ethereal/e5.jpg"
import e6 from "../assets/Ethereal/e6.jpg"
import e7 from "../assets/Ethereal/e7.jpg"
import e8 from "../assets/Ethereal/e8.jpg"
import e9 from "../assets/Ethereal/e9.jpg"
import e10 from "../assets/Ethereal/e10.jpg"
import c1Big from "../assets/Ethereal/c1img1.jpg"
import c1small1 from "../assets/Ethereal/c1img2.jpg"
import c1small2 from "../assets/Ethereal/c1img3.jpg"
import c1small3 from "../assets/Ethereal/c1img4.jpg"
import c1small4 from "../assets/Ethereal/c1img5.jpg"
import c2Big from "../assets/Ethereal/c2img1.png"
import c2small1 from "../assets/Ethereal/c2img2.jpg"
import c2small2 from "../assets/Ethereal/c2img3.jpg"
import c2small3 from "../assets/Ethereal/c2img4.jpg"
import c2small4 from "../assets/Ethereal/c2img5.jpg"
import c3Big from "../assets/Ethereal/c3img1.jpg"
import c3small1 from "../assets/Ethereal/c3img2.jpg"
import c3small2 from "../assets/Ethereal/c3img3.jpg"
import c3small3 from "../assets/Ethereal/c3img4.jpg"
import c3small4 from "../assets/Ethereal/c3img5.jpg"
import logo from "../assets/Ethereal/logo.png"
import "../CSS/Ethereal.css"
import AOS from 'aos';

export default function EtherealDesignePage() {
    const projectData = {
        title: 'INNOVATION ET IA',
        subtitle: 'Ethereal Design',
        projectNumber: '03',
        mission: "Explorer l'intelligence artificielle (MidJourney) et des prompts optimisés pour créer une série de visuels abordant des concepts architecturaux innovants.",
        realisation: [
          "processus créatif : Génération d'images, intégrant des principes de biomimétisme et des matériaux durables.",
          "technologie : Utilisation avancée de MidJourney pour affiner les rendus et explorer des styles variés (futuriste, organique, minimaliste).",
          "adaptabilité : Conception de structures modulaires et évolutives, réagissant aux conditions climatiques et topographiques.",
        ],
        defi: " Pousser les limites de la créativité assistée par IA tout en maintenant une cohérence architecturale et fonctionnelle.",
        result: "Une série de concepts visuels percutants, ouvrant de nouvelles perspectives pour l'architecture durable et adaptative.",
        images: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10],
      };
  AOS.init();
  return (
    <div>
        <TopProject {...projectData} />
        <div className="pdfWrapper">
            <div className="displayEtherealImg">
                {/* Left Section */}
                    <img src={logo} alt="logo" className='logoMobile'/>
                <div className="image-group">
                    <img data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" src={c1Big} alt="Big Image 1" className="big-img" />
                    <div className="small-images">
                        <img src={c1small1} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500" alt="Small 1" />
                        <img src={c1small2} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1700" alt="Small 2" />
                        <img src={c1small3} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1900" alt="Small 3" />
                        <img src={c1small4} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2100" alt="Small 4" />
                    </div>
                </div>

                {/* Right Section "ethereal-title" */}
                <div className="title-section ">
                    <img src={logo} alt="logo" className='logo'/>
                    <div className="image-group">
                        <img data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" src={c2Big} alt="Big Image 2" className="big-img" />
                        <div className="small-images">
                            <img src={c2small1} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500" alt="Small 1" />
                            <img src={c2small2} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1700" alt="Small 2" />
                            <img src={c2small3} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1900" alt="Small 3" />
                            <img src={c2small4} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2100" alt="Small 4" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="image-group">
                    <img data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" src={c3Big} alt="Big Image 3" className="big-img" />
                    <div className="small-images">
                        <img src={c3small1} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500" alt="Small 1" />
                        <img src={c3small2} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1700" alt="Small 2" />
                        <img src={c3small3} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1900" alt="Small 3" />
                        <img src={c3small4} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2100" alt="Small 4" />
                    </div>
                </div>
            </div>
            <a href="/Ethereal.pdf" target="_blank" rel="noopener noreferrer" className="project-link linkMolly">
                <span>voir l’intégralité du projet</span>
                <span className="arrow">›</span>
            </a>
        </div>
    </div>
  )
}
