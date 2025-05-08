import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../CSS/TopProject.css';
import '../CSS/TopProjectMobile.css';
import { Link } from 'react-router-dom';

const TopProject = ({
  title,
  subtitle,
  projectNumber,
  mission,
  realisation,
  result,
  defi,
  images,
}) => {
    const [displayedImages, setDisplayedImages] = useState([]);
    const [transitioningIndex, setTransitioningIndex] = useState(null);

    // Function to get a random image that is not currently displayed
    const getRandomImage = (currentImages) => {
        const availableImages = images.filter((image) => !currentImages.includes(image));
        // If all images are used, allow reusing (but not the current ones)
        if (availableImages.length === 0) return images[Math.floor(Math.random() * images.length)];
        return availableImages[Math.floor(Math.random() * availableImages.length)];
    };

    // Function to update a random image in the displayed array
    const updateRandomImage = () => {
        if (displayedImages.length === 0) return;
        
        // Select a random position to replace
        const randomIndex = Math.floor(Math.random() * displayedImages.length);
        setTransitioningIndex(randomIndex);
        
        // Start transition out
        setTimeout(() => {
            // Get a new random image
            const newRandomImage = getRandomImage(displayedImages);
            
            // Update the array with the new image at the random position
            setDisplayedImages(prevImages => {
                const newImages = [...prevImages];
                newImages[randomIndex] = newRandomImage;
                return newImages;
            });
            
            // Reset transitioning state after the new image is set
            setTimeout(() => {
                setTransitioningIndex(null);
            }, 100);
        }, 500); // Wait for fade-out to complete
    };

    // Set up the interval to update images every 3 seconds
    useEffect(() => {
        const interval = setInterval(updateRandomImage, 3000);
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [displayedImages]);

    // Initialize the first set of images on component mount
    useEffect(() => {
        if (images && images.length > 0) {
            const initialImages = [];
            const numImages = Math.min(4, images.length);
            
            while (initialImages.length < numImages) {
                const randomImage = getRandomImage(initialImages);
                initialImages.push(randomImage);
            }
            setDisplayedImages(initialImages);
        }
    }, [images]);

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-110%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const headerX = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
    const leftOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const leftX = useTransform(scrollYProgress, [0, 0.1], ['0%', '-100%']);
    const rightOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const rightX = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
    const imageX = useTransform(scrollYProgress, [0, 1], ['0%', '-110%']);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 3]);
    return (
        <div className="topProjectWrapper">
        {/* Header */}
        <motion.header
          className="headerComponent"
          style={!isMobile ? { opacity: headerOpacity, x: headerX } : {}}
        >

        <Link to="/WorksMenu">
        <a className="topProjectLink">
            <h1 className="topProjecth1">
            {title} <br /> ({projectNumber})
            </h1>
        </a>
        </Link>

          <h2 className="topProjecth2">{subtitle}</h2>
          <h2 className="topProjecth2CoolFont">{subtitle}</h2>
        </motion.header>
    
        {/* Content Wrapper */}
        <div className="contentWrapper">
          {/* Mission, Réalisation, Résultat */}
          <motion.section
            className="sideTextWrapperLeft"
            style={!isMobile ? { opacity: leftOpacity, x: leftX } : {}}
          >
            <h2 className="sideTextH2">Mission</h2>
            <p>{mission}</p>
    
            <h2 className="sideTextH2">Réalisation</h2>
            <ul>
              {realisation.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="mobileDefi sideTextH2 topTxtProject">Défi</h2>
            <p className='mobileDefi'>{defi}</p>

            <h2 className="sideTextH2 resultaPushTop">Résultat</h2>
            <p>{result}</p>
    
            {/* Défi on mobile: placed below Résultat */}
            {isMobile && (
              <section className="defiWrapper">
                <h2 className="sideTextH2 topTxtProject">Défi</h2>
                <p>{defi}</p>
              </section>
            )}
          </motion.section>
    
          {/* Défi on desktop: positioned right */}
          {!isMobile && (
            <motion.section
              className="defiWrapper"
              style={{ opacity: rightOpacity, x: rightX }}
            >
              <h2 className="sideTextH2 topTxtProject">Défi</h2>
              <p>{defi}</p>
            </motion.section>
          )}
    
          {/* Images */}
          {!isMobile ? (
            <motion.section className="imgRandomMix" style={{ x: imageX, scale: imageScale }}>
              {displayedImages.map((image, index) => (
                <motion.img
                  key={`img-${index}-${image}`}
                  src={image}
                  alt={`Random Image ${index + 1}`}
                  className={`fadeImage ${transitioningIndex === index ? 'transitioning' : ''}`}
                />
              ))}
            </motion.section>
          ) : (
            <section className="imgRandomMix">
              {displayedImages.map((image, index) => (
                <img
                  key={`img-${index}-${image}`}
                  src={image}
                  alt={`Random Image ${index + 1}`}
                  className="fadeImage"
                />
              ))}
            </section>
          )}
                                <div className="worksMenuWrapperMobile">
                        <Link to="/">home</Link>
                        <span className="gapForFakeNav"></span>
                        <Link to="/WorksMenu">works</Link>
                        <span className="gapForFakeNav"></span>
                        <Link to="/#go">profil</Link>
                      </div>
        </div>
        {/* Navigation Links */}
        <motion.section
            className="worksMenuWrapper"
            style={!isMobile ? { opacity: leftOpacity, x: rightX } : {}}
          >
          <Link to="/">home</Link>
          <span className="gapForFakeNav"></span>
          <Link to="/WorksMenu">works</Link>
          <span className="gapForFakeNav"></span>
          <Link to="/#go">profil</Link>
        </motion.section>
      </div>
    );
};

export default TopProject;