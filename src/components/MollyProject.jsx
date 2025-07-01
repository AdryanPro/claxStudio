import React from 'react';
import TopProject from '../components/TopProject';
import molly1 from '../assets/mollyProject/molly1.jpg';
import molly2 from '../assets/mollyProject/molly2.jpg';
import molly3 from '../assets/mollyProject/molly3.jpg';
import molly4 from '../assets/mollyProject/molly4.jpg';
import molly5 from '../assets/mollyProject/molly5.jpg';
import molly6 from '../assets/mollyProject/molly6.jpg';
import molly7 from '../assets/mollyProject/molly7.jpg';
import molly8 from '../assets/mollyProject/molly8.jpg';
import molly9 from '../assets/mollyProject/molly9.jpg';
import mollyLogo from '../assets/mollyProject/2emeSection/mollyLogo.png'
import img1 from '../assets/mollyProject/2emeSection/1.png'
import img2 from '../assets/mollyProject/2emeSection/2.png'
import img3 from '../assets/mollyProject/2emeSection/3.png'
import img4 from '../assets/mollyProject/2emeSection/4.png'
import img5 from '../assets/mollyProject/2emeSection/5.png'
import img6 from '../assets/mollyProject/2emeSection/6.png'
import '../CSS/mollyPage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MollyProject() {
    const projectData = {
        title: 'CRÉATION DE MARQUE',
        subtitle: 'Molly Beauty',
        projectNumber: '01',
        mission: 'définir l\'univers, concevoir l\'identité visuelle et développer le packaging.',
        realisation: [
          'typographie customisée pour le logo en 3D (Nomad)',
          'palette chromatique et motifs graphiques audacieux.',
          'packaging modélisé et maquetté (Adobe Suite).',
        ],
        defi: 'alier créativité audacieuse et viabilité commerciale.',
        result: 'une marque immersive, prête à captiver son public.',
        images: [molly1, molly2, molly3, molly4, molly5, molly6, molly7, molly8, molly9],
      };
      AOS.init();
  return (
    <div className='mollyProjectWrapper'>
        <TopProject {...projectData} />
        {/* data-aos="fade-up" data-aos-duration="3000" */}
        <section className="mollyImgWrapperSection">
          <div className="topMolly">
            <img data-aos="zoom-in" data-aos-duration="3000" src={mollyLogo} alt=""  className='mollyLogo'/>
            <img data-aos="zoom-in" data-aos-duration="3000" src={img2} alt="" className='img2'/>
          </div>

          <div className="bottomMolly">
            <img data-aos="zoom-in" data-aos-duration="3000" src={img5} alt=""  className='img5'/>
            <img data-aos="zoom-in" data-aos-duration="3000" src={img3} alt="" className='img3'/>
            <img data-aos="zoom-in" data-aos-duration="3000" src={img4} alt="" className='img4'/>
            <img data-aos="zoom-in" data-aos-duration="3000" src={img1} alt="" className='img1'/>
            <img data-aos="zoom-in" data-aos-duration="3000" src={img6} alt="" className='img6'/>
          </div>
        </section>
        <a href="/path-to-your.pdf" target="_blank" rel="noopener noreferrer" className="project-link">
          <span>voir l’intégralité du projet</span>
          <span className="arrow">›</span>
        </a>
    </div>
  )
}
