import React, { useState, useEffect } from 'react';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isScrolling, setIsScrolling] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.pageX, y: e.pageY });
            setIsVisible(true); // Show the circle when cursor moves
            clearTimeout(hideTimeout); // Clear the timeout when cursor moves
        };

        let scrollTimeout;
        let hideTimeout;

        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 500); // Adjust the delay as needed
        };

        const hideCursor = () => {
            hideTimeout = setTimeout(() => {
                setIsVisible(false);
            }, 1000); // Hide the circle after 2 seconds of cursor inactivity
        };

        document.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('scroll', handleScroll);

        // Start the timer to hide the cursor when cursor stops moving
        hideCursor();

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('scroll', handleScroll);
            clearTimeout(hideTimeout); // Clear the timeout on unmount
        };
    }, []);

    return (
        <div className={`h-10 w-10 absolute rounded-full bg-teal-700/50 z-50 ${isScrolling || !isVisible ? 'hidden' : ''}`} style={{ left: cursorPosition.x - 0, top: cursorPosition.y - 0 }}></div>
    );
}

export default Cursor;
