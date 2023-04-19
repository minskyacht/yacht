import { useEffect, useState, useCallback } from "react";

export const useScroll = (top) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > top);
    }, [top]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return isScrolled;
};
