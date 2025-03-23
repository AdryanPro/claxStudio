import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../CSS/TopProject.css';

const TopProject = ({
  title,
  subtitle,
  projectNumber,
  mission,
  realisation,
  result,
  images,
}) => {

    const [displayedImages, setDisplayedImages] = useState([]);

    // Function to get a random image that is not currently displayed
    const getRandomImage = (currentImages) => {
        const availableImages = images.filter((image) => !currentImages.includes(image));
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        return availableImages[randomIndex];
    };

    // Function to update the displayed images
    const updateImages = () => {
        setDisplayedImages((prevImages) => {
        // Remove the first image (fade out)
        const newImages = prevImages.slice(1);
        // Add a new random image (fade in)
        const randomImage = getRandomImage(newImages);
        return [...newImages, randomImage];
        });
    };

    // Set up the interval to update images every 2 seconds
    useEffect(() => {
        const interval = setInterval(updateImages, 2000);
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    // Initialize the first set of images on component mount
    useEffect(() => {
        const initialImages = [];
        while (initialImages.length < 4) {
        const randomImage = getRandomImage(initialImages);
        initialImages.push(randomImage);
        }
        setDisplayedImages(initialImages);
    }, [images]);

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-110%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

    return (
        <div className="topProjectWrapper">
        <motion.header
            className="headerComponent"
            style={{
            opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]), // Fade out
            x: useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']), // Slide left
            }}
        >
            <h1 className="topProjecth1">{title}</h1>
            <h2 className="topProjecth2">{subtitle}</h2>
            <span>({projectNumber})</span>
        </motion.header>

        {/* Wrap sideTextWrapperLeft and imgRandomMix in a flex container */}
        <div className="contentWrapper">
            <motion.section
            className="sideTextWrapperLeft"
            style={{
                opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]), // Faster fade-out
                x: useTransform(scrollYProgress, [0, 0.1], ['0%', '-100%']), // Slide left
            }}
            >
            <h2 className="sideTextH2">Mission</h2>
            <p>{mission}</p>

            <h2 className="sideTextH2">Réalisation</h2>
            <ul>
                {realisation.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>

            <h2 className="sideTextH2 resultaPushTop">Résultat</h2>
            <p>{result}</p>
            </motion.section>

            <motion.section className="imgRandomMix" style={{ x, scale }}>
            {displayedImages.map((image, index) => (
                <motion.img
                key={index}
                src={image}
                alt={`Random Image ${index + 1}`}
                className="fadeImage"
                />
            ))}
            </motion.section>
        </div>
        {/* <section className="empty">
            <h1>JUST SO WE CAN TEST THE SCROLL</h1>
        </section> */}
        </div>
    );
};

export default TopProject;