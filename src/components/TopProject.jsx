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

  // Function to get a new set of random images
  const getRandomImages = () => {
    const newImages = [];
    while (newImages.length < 4) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      if (!newImages.some((img) => img.src === randomImage)) {
        newImages.push({ src: randomImage, transitioning: false, appearing: false });
      }
    }
    return newImages;
  };

  // Function to update all images at the same time
  const updateAllImages = () => {
    // Add the transitioning class to all images (fade out)
    const imagesWithTransition = displayedImages.map((image) => ({
      ...image,
      transitioning: true,
      appearing: false, // Ensure appearing is removed
    }));
    setDisplayedImages(imagesWithTransition);

    // After the fade-out transition, update the images
    setTimeout(() => {
      const newImages = getRandomImages().map((image) => ({
        ...image,
        transitioning: false, // Remove transitioning
        appearing: false, // Start hidden
      }));
      setDisplayedImages(newImages);

      // Add the appearing class after a short delay to trigger fade-in
      setTimeout(() => {
        setDisplayedImages((prevImages) =>
          prevImages.map((image) => ({
            ...image,
            appearing: true, // Trigger fade-in
          }))
        );
      }, 50); // Small delay to ensure the DOM registers the change
    }, 1500); // Match the fade-out duration
  };

  // Initialize the first set of images on component mount
  useEffect(() => {
    if (images && images.length > 0) {
      const initialImages = getRandomImages();
      setDisplayedImages(initialImages);
    }
  }, [images]);

  // Set up the interval to update images every 3 seconds
  useEffect(() => {
    const interval = setInterval(updateAllImages, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [displayedImages]);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-110%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };
  
    // Run the resize handler once on mount
    handleResize();
  
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
  
    // Cleanup the event listener on unmount
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
          <ul className='sideTextH2Ul'>
            {realisation.map((item, index) => (
              <li className='sideTextH2li' key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="mobileDefi sideTextH2 topTxtProject">Défi</h2>
          <p className="mobileDefi">{defi}</p>

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
        <motion.section
          className="imgRandomMix"
          style={!isMobile ? { x: imageX, scale: imageScale } : {}}
        >
          {displayedImages.map((image, index) => (
            <img
              key={`img-${index}-${image.src}`}
              src={image.src}
              alt={`Random Image ${index + 1}`}
              className={`fadeImage ${!isMobile && image.transitioning ? 'transitioning' : ''} ${
                !isMobile && image.appearing ? 'appearing' : ''
              }`}
            />
          ))}
        </motion.section>

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