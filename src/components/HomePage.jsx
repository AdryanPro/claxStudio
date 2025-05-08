import React, { useEffect, useRef, useState } from 'react';
import carousel1 from '../assets/carousel/carouselWorks1.png';
import carousel2 from '../assets/carousel/carouselWorks2.png';
import carousel3 from '../assets/carousel/carouselWorks3.png';
import carousel4 from '../assets/carousel/carouselWorks4.png';
import carousel5 from '../assets/carousel/carouselWorks5.png';
import carousel6 from '../assets/carousel/carouselWorks6.png';
import carousel7 from '../assets/carousel/carouselWorks7.png';
import colored1 from '../assets/carousel/colored1.png';
import colored2 from '../assets/carousel/colored2.png';
import colored3 from '../assets/carousel/colored3.png';
import colored4 from '../assets/carousel/colored4.png';
import colored5 from '../assets/carousel/colored5.png';
import colored6 from '../assets/carousel/colored6.png';
import colored7 from '../assets/carousel/colored7.png';
import logo1 from '../assets/home/instaLogo.png'
import logo2 from '../assets/home/LinkdinLogo.png'
import logo3 from '../assets/home/cv.png'
import { useLocation } from "react-router-dom";
import "../CSS/HomePage.css";
import "../CSS/mobileHomePage.css";
import "../CSS/customCursor.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const images = [
        { src: carousel1, coloredSrc: colored1, text1: "direction artistique", text2: "© italians do it better", text3: "SDP 23, CL29", link: "/ItaliansDoItBetter", number: "(06)" },
        { src: carousel2, coloredSrc: colored2, text1: "design éditorial", text2: "© studio 54", text3: "SDP 25, CL29", link: "/MagazineStudio54", number: "(05)"},
        { src: carousel3, coloredSrc: colored3, text1: "set design", text2: "© plaisirs éphémères", text3: "SDP 24, CL29", link: "/PlaisirÉphémères", number: "(04)" },
        { src: carousel4, coloredSrc: colored4, text1: "innovation et architecture", text2: "© ethereal design", text3: "SDP 25, CL29", link: "/EtherealDesigne", number: "(03)" },
        { src: carousel5, coloredSrc: colored5, text1: "design responsable", text2: "© miscible", text3: "SDP 25, CL29", link: "/Miscible",number: "(02)" },
        { src: carousel6, coloredSrc: colored6, text1: "création de marque", text2: "© molly beauty", text3: "SDP 24, CL29", link: "/Molly",number: "(01)" },
        { src: carousel7, coloredSrc: colored7, text1: "illustration", text2: "© nuit étoilée ", text3: "SDP 23, CL29", link: "/NuitÉtoilée",number: "(07)" }
    ];
    const [cursorColor, setCursorColor] = useState('black'); // Default color
    //const [isTouchDevice, setIsTouchDevice] = useState(false); //Detect touch devices
    const cursorRef = useRef(null); // Ref for the cursor element

    // useEffect(() => { //Remove the cursor on mobile
    //     const isTouch = window.matchMedia('(hover: none)').matches;
    //     setIsTouchDevice(isTouch);
      
    //     if (!isTouch) {
    //       document.body.classList.add('custom-cursor-enabled');
    //     } else {
    //       document.body.classList.remove('custom-cursor-enabled');
    //     }
    //   }, []);
      

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;
    
        const handleMouseMove = (e) => {
            // Update the cursor position using `top` and `left`
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };
    
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Change cursor color based on background
    const handleBackgroundChange = (color) => {
        setCursorColor(color === 'black' ? 'white' : 'black');
    };
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

    useEffect(() => {
        // Disable hover effects on touch devices by adding a class to <body>
        if (window.matchMedia('(hover: none)').matches) {
          document.body.classList.add('no-hover');
        } else {
          document.body.classList.remove('no-hover');
        }
      }, []);
      AOS.init();
  return (
    <div>
    <div className="custom-cursor" ref={cursorRef} style={{ backgroundColor: cursorColor }}></div>
        <div className="kindOfNavbarWrapper">
            <h1 className='h1HomePage'>CLAX STUDIO</h1>
            <h1 className='h2HomePage coolFont'>Clax Studio</h1>
            <div className="socialBtn">
                <a href="https://www.instagram.com/clax.studio/">
                    <img src={logo1} alt="" />
                </a>
                <a href="#">
                    <img src={logo2} alt="" />
                </a>
                <a href="#">
                    <img src={logo3} alt="" />
                </a>
            </div>
        </div>
        <div className="carouselWrapper">
            <h2 className='carouselTitleTop'>WORKS</h2>
            <h2 className='carouselTitle coolFont'>Works</h2>
            <div className="carouselTrack">
                {images.concat(images).map((item, index) => (
                    <Link to={item.link} key={index} className="carouselCard"> {/* Make the whole card clickable */}
                        <div className="textContainer">
                            <p className='lineNumber'>{item.number}</p>
                            <p className="line2">{item.text2}</p>
                            <p className="line1">{item.text1}</p>
                            <p className="line3">{item.text3}</p>
                        </div>
                        <div className="imageWrapper">
                            <img 
                                src={item.src} 
                                alt={`carousel ${index}`} 
                                className='carouselImg defaultImg' 
                            />
                            <img 
                                src={item.coloredSrc} 
                                alt={`carousel ${index} colored`} 
                                className='carouselImg coloredImg' 
                            />
                        </div>
                    </Link>
                ))}
            </div>
            <nav className='fiNavBar'>
                <ul>
                    <Link to='/'><li>home</li></Link>
                    <Link to='/WorksMenu' ><li>works</li></Link>
                    <a href="#go"><li>profil</li></a>
                </ul>
            </nav>
        </div>

        <section className='graphicWrapper' id='go' onMouseEnter={() => setCursorColor('white')} onMouseLeave={() => setCursorColor('black')}> {/* Change to white on hover then Revert to black on leave */}
            <h1 data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">GRAPHIC DESIGNER & ART DIRECTOR</h1>
            <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" className='graphicWrapperCoolFont coolFont decale'>Graphic Designer & Art Director</h2>
            <div data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1000" className="aProposDeMoi">
                <p className='pContainerAProposDeMoi' data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000">
                    passionnée par la création visuelle et l'innovation, je mets mon expertise au service de projets variés, 
                    allant de la création de marque au design éditorial, en passant par la photographie et l'illustration. 
                    Mon approche allie rigueur technique et sensibilité artistique, avec une attention particulière portée à 
                    l'expérience utilisateur et à l'impact visuel.
                </p>
                <h2 data-aos="fade-right" data-aos-delay="1400" data-aos-duration="1000"  className='aProposDeMoiH2Top'>ABOUT ME </h2>
                <h2 data-aos="fade-right" data-aos-delay="1400" data-aos-duration="1000"  className='aProposDeMoiH2'>About me</h2>
            </div>

            <div className="creativeApproch" data-aos="fade-left" data-aos-delay="1400" data-aos-duration="1000">
                <p className='creativeApprocheP'>Je crois en un design qui raconte des histoires et suscite des émotions.
                    Que ce soit à travers une affiche illustrative, un packaging écoresponsable
                     ou une installation immersive, je m'efforce de créer des expériences visuelles
                    qui marquent les esprits et inspirent.
                </p>
                <h2 className='creativeApprochH2Top' data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">Creative Approach</h2>
                <h2 className='creativeApprochH2' data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">Creative Approach</h2>
            </div>

            <div className="keySkills" data-aos="fade-left" data-aos-delay="1800" data-aos-duration="1000">
                <ul>
                    <li data-aos="fade-left">Branding : Identité visuelle, packaging, stratégie de marque.</li>
                    <li data-aos="fade-left" data-aos-delay="1900" data-aos-duration="1000">Graphic Design : Affiches, illustrations, typographie, mise en page.</li>
                    <li data-aos="fade-left" data-aos-delay="2000" data-aos-duration="1000">Art Direction : Set design, photographie, campagnes publicitaires</li>
                    <li data-aos="fade-left" data-aos-delay="2100" data-aos-duration="1000">Editorial Design : Conception de magazines, couvertures de livres, mise en page.</li>
                    <li data-aos="fade-left" data-aos-delay="2200" data-aos-duration="1000">Tools : Suite Adobe (Photoshop, Illustrator, InDesign), modélisation 3D (Nomad), prompts optimisés pour IA.</li>
                </ul>
                <h2 className='keySkillsH2Top'>Key Skills</h2>
                <h2 className='keySkillsH2'>Key Skills</h2>
            </div>

            <div data-aos="fade-right" data-aos-delay="1600" data-aos-duration="1000">
                <div className="contact"> 
                    <p className='pContainerContact'> louisclarissepro@gmail.com</p>
                    <h2 className='contactH2Top'>CONTACT</h2>
                    <h2 className='contactH2'>Contact</h2>
                </div>
            </div>
        </section>
    </div>
  );
}