import React, { useEffect, useRef } from 'react';
import '../CSS/customCursor.css'; // Import the cursor styles

const GlobalCursor = () => {
    const cursorRef = useRef(null); // Ref for the cursor element

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

    return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default GlobalCursor;