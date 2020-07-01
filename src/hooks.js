import {useEffect, useState, useRef} from "react";

const useHover = () => {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const enter = () => {
        setHovered(true);
    }

    const leave = () => {
        setHovered(false);
    }

    useEffect(() => {
        const refCopy = ref;
        refCopy.current.addEventListener("mouseEnter", () => setHovered(true));
        refCopy.current.addEventListener("mouseleave", () => setHovered(false));
        return () => {
            refCopy.current.removeEventListener("mouseenter", enter);
            refCopy.current.removeEventListener("mouseleave", leave);
        }
    })


    return [ref, hovered]
}

export default useHover;
