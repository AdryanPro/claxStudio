import React from 'react';
import carousel1 from '../assets/carousel/carouselWorks1.png';
import carousel2 from '../assets/carousel/carouselWorks2.png';
import carousel3 from '../assets/carousel/carouselWorks3.png';
import carousel4 from '../assets/carousel/carouselWorks4.png';
import carousel5 from '../assets/carousel/carouselWorks5.png';
import carousel6 from '../assets/carousel/carouselWorks6.png';
import carousel7 from '../assets/carousel/carouselWorks7.png';
import "../CSS/HomePage.css";

const images = [
    { src: carousel1, text1: "(04)", text2: "set design", text3: "© plaisirs éphémères SDP 24, CL29" },
    { src: carousel2, text1: "(05)", text2: "fashion editorial", text3: "© élégance moderne SDP 25, CL30" },
    { src: carousel3, text1: "(06)", text2: "artistic direction", text3: "© vision future SDP 26, CL31" },
    { src: carousel4, text1: "(07)", text2: "visual storytelling", text3: "© néo-rétro SDP 27, CL32" },
    { src: carousel5, text1: "(08)", text2: "contemporary art", text3: "© abstrait vivant SDP 28, CL33" },
    { src: carousel6, text1: "(09)", text2: "avant-garde", text3: "© créativité infinie SDP 29, CL34" },
    { src: carousel7, text1: "(10)", text2: "cinematic aesthetics", text3: "© lumière et ombre SDP 30, CL35" }
];

export default function HomePage() {
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

        <section className='graphicWrapper'>
            <h1 >Graphic Designer & Art Director</h1>
            <h1 className='graphicWrapper coolFont'>Graphic Designer & Art Director</h1>
        </section>
    </div>
  );
}