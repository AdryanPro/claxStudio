import React, { useEffect } from 'react';
import carousel1 from '../assets/carousel/carouselWorks1.png';
import carousel2 from '../assets/carousel/carouselWorks2.png';
import carousel3 from '../assets/carousel/carouselWorks3.png';
import carousel4 from '../assets/carousel/carouselWorks4.png';
import carousel5 from '../assets/carousel/carouselWorks5.png';
import carousel6 from '../assets/carousel/carouselWorks6.png';
import carousel7 from '../assets/carousel/carouselWorks7.png';
import "../CSS/HomePage.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function HomePage() {
    const images = [
        { src: carousel1, text1: "(04)", text2: "set design", text3: "© plaisirs éphémères SDP 24, CL29" },
        { src: carousel2, text1: "(05)", text2: "fashion editorial", text3: "© élégance moderne SDP 25, CL30" },
        { src: carousel3, text1: "(06)", text2: "artistic direction", text3: "© vision future SDP 26, CL31" },
        { src: carousel4, text1: "(07)", text2: "visual storytelling", text3: "© néo-rétro SDP 27, CL32" },
        { src: carousel5, text1: "(08)", text2: "contemporary art", text3: "© abstrait vivant SDP 28, CL33" },
        { src: carousel6, text1: "(09)", text2: "avant-garde", text3: "© créativité infinie SDP 29, CL34" },
        { src: carousel7, text1: "(10)", text2: "cinematic aesthetics", text3: "© lumière et ombre SDP 30, CL35" }
    ];
    AOS.init();
    // useEffect(() => {
    //     AOS.init({
    //         duration: 800, // Animation duration
    //         once: true, // Whether animation should happen only once
    //     });
    //     AOS.refresh();
    // }, []);
  return (
    <div>
        <h1 className='h1HomePage'>CLAX STUDIO</h1>
        <h1 className='h2HomePage coolFont'>Clax Studio</h1>

        <div className="carouselWrapper">
            <h2 className='carouselTitle coolFont'>WORKS</h2>
            <div className="carouselTrack">
                {images.concat(images).map((item, index) => (
                    <div className="carouselCard" key={index}>
                        <div className="textContainer">
                            <p className="line1">{item.text1}</p>
                            <p className="line2">{item.text2}</p>
                            <p className="line3">{item.text3}</p>
                        </div>
                        <div className="imageWrapper">
                            <img src={item.src} alt={`carousel ${index}`} className='carouselImg' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <nav className='fiNavBar'>
                <ul>
                    <li>Home</li>
                    <li>Works</li>
                    <li>Profil</li>
                </ul>
        </nav>
        <section className='graphicWrapper'>
            <h1 data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">Graphic Designer & Art Director</h1>
            <h1 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" className='coolFont decale'>Graphic Designer & Art Director</h1>
            <div data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1000" className="aProposDeMoi">
                <h2 data-aos="fade-right" data-aos-delay="1400" data-aos-duration="1000"  className='aProposDeMoiH2'>À propos de moi</h2>
                <p className='pContainerAProposDeMoi' data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000">
                    Passionnée par la création visuelle et l'innovation, je mets mon expertise au service de projets variés, 
                    allant de la création de marque au design éditorial, en passant par la photographie et l'illustration. 
                    Mon approche allie rigueur technique et sensibilité artistique, avec une attention particulière portée à 
                    l'expérience utilisateur et à l'impact visuel.
                </p>
            </div>

            <div data-aos="fade-right" data-aos-delay="1600" data-aos-duration="1000">
                <div className="contact"> 
                    <p className='pContainerContact'> louisclarissepro@gmail.com</p>
                    <h2 className='contactH2'>Contact</h2>
                </div>
            </div>

            <div className="creativeApproch" data-aos="fade-left" data-aos-delay="1400" data-aos-duration="1000">
                <p>Je crois en un design qui raconte des histoires et suscite des émotions. 
                    Que ce soit à travers une affiche illustrative, un packaging écoresponsable
                     ou une installation immersive, je m'efforce de créer des expériences visuelles 
                    qui marquent les esprits et inspirent.
                </p>
                <h2 className='creativeApprochH2' data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">Creative Approch</h2>
            </div>
            <div className="keySkills" data-aos="fade-left" data-aos-delay="1800" data-aos-duration="1000">
                <h2 className='keySkillsH2'>Key Skills</h2>
                <ul>
                    <li data-aos="fade-left">Branding : Identité visuelle, packaging, stratégie de marque.</li>
                    <li data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1000">Graphic Design : Affiches, illustrations, typographie, mise en page.</li>
                    <li data-aos="fade-left" data-aos-delay="2000" data-aos-duration="1000">Art Direction : Set design, photographie, campagnes publicitaires</li>
                    <li data-aos="fade-left" data-aos-delay="2100" data-aos-duration="1000">Editorial Design : Conception de magazines, couvertures de livres, mise en page.</li>
                    <li data-aos="fade-left" data-aos-delay="2200" data-aos-duration="1000">Tools : Suite Adobe (Photoshop, Illustrator, InDesign), modélisation 3D (Nomad), prompts optimisés pour IA.</li>
                </ul>
            </div>
        </section>
    </div>
  );
}