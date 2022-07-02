import { useEffect, useState } from "react";

export const useScroll = (top) => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > top);
    };

    return isScrolled;
};
