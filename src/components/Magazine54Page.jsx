import React from 'react'
import TopProject from './TopProject';
import s1 from "../assets/Studio/s1.jpg"
import s2 from "../assets/Studio/s2.jpg"
import s3 from "../assets/Studio/s3.jpg"
import s4 from "../assets/Studio/s4.jpg"
import s5 from "../assets/Studio/s5.jpg"
import s6 from "../assets/Studio/s6.jpg"
import s7 from "../assets/Studio/s7.jpg"
import s8 from "../assets/Studio/s8.jpg"
import s9 from "../assets/Studio/s9.jpg"
import s10 from "../assets/Studio/s10.jpg"
import s11 from "../assets/Studio/s11.jpg"
import Bottom1 from "../assets/Studio/Bootom1.png"
import Bottom2 from "../assets/Studio/Bottom2.png"
import Bottom3 from "../assets/Studio/Bottom3.png"
import Bottom4 from "../assets/Studio/Bottom4.png"
import Bottom5 from "../assets/Studio/Bottom5.png"
import Bottom6 from "../assets/Studio/Bottom6.png"
import "../CSS/studioProject.css"
import '../CSS/mollyPage.css'
import AOS from 'aos';

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
     images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11],
  };
  AOS.init();
  return (
    <div className='Studiowrapper'>
      <TopProject {...projectData}/>
      <section className="displayImgStudio">
        <img data-aos="zoom-in" data-aos-duration="3000" src={Bottom1} alt="" className='StudioImg1' />
        <img data-aos="zoom-in" data-aos-duration="3000" src={Bottom2} alt="" className='StudioImg2'/>
        <img data-aos="zoom-in" data-aos-duration="3000" src={Bottom3} alt="" className='StudioImg3'/>
        <img data-aos="zoom-in" data-aos-duration="3000" src={Bottom4} alt="" className='StudioImg4'/>
        <img data-aos="zoom-in" data-aos-duration="3000" src={Bottom5} alt="" className='StudioImg5'/>
        <img data-aos="zoom-in" data-aos-duration="3000" src={Bottom6} alt="" className='StudioImg6'/>
      </section>
    </div>
  )
}
