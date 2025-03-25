import React from 'react'
import TopProject from './TopProject';
import e1 from "../assets/Ethereal/e1.png"
import e2 from "../assets/Ethereal/e2.png"
import e3 from "../assets/Ethereal/e3.png"
import e4 from "../assets/Ethereal/e4.png"
import e5 from "../assets/Ethereal/e5.png"
import c1Big from "../assets/Ethereal/c1img1.png"
import c1small1 from "../assets/Ethereal/c1img2.png"
import c1small2 from "../assets/Ethereal/c1img3.png"
import c1small3 from "../assets/Ethereal/c1img4.png"
import c1small4 from "../assets/Ethereal/c1img5.png"
import c2Big from "../assets/Ethereal/c2img1.png"
import c2small1 from "../assets/Ethereal/c2img2.png"
import c2small2 from "../assets/Ethereal/c2img3.png"
import c2small3 from "../assets/Ethereal/c2img4.png"
import c2small4 from "../assets/Ethereal/c2img5.png"
import c3Big from "../assets/Ethereal/c3img1.png"
import c3small1 from "../assets/Ethereal/c3img2.png"
import c3small2 from "../assets/Ethereal/c3img3.png"
import c3small3 from "../assets/Ethereal/c3img4.png"
import c3small4 from "../assets/Ethereal/c3img5.png"
import logo from "../assets/Ethereal/logo.png"
import "../CSS/Ethereal.css"
import AOS from 'aos';

export default function EtherealDesignePage() {
    const projectData = {
        title: 'Architecture adaptative par IA',
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
        images: [e1, e2, e3, e4, e5],
      };
  AOS.init();
  return (
    <div>
        <TopProject {...projectData} />
        <div className="displayEtherealImg">
            {/* Left Section */}
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
    </div>
  )
}
