"use client";
import { useEffect, useState } from "react";

/**
 * Typewriter Component
 * Creates a dynamic typing and deleting effect for a list of strings.
 * Configurable speeds and pause durations for a professional look.
 */
function Typewriter({ quotes, className, typingSpeed = 120, deletingSpeed = 80, pauseTime = 1500 }) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = quotes[index % quotes.length];

        let timeout;

        if (!isDeleting) {
            // Typing Logic: Progressively adds characters to the string
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));

                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }, typingSpeed);
        } else {
            // Deleting Logic: Progressively removes characters
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));

                if (text.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => prev + 1);
                }
            }, deletingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, quotes, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className={className}>
            {text}
            <span className="animate-pulse text-white">_</span>
        </span>
    );
}

export default Typewriter;