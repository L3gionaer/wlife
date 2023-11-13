import * as React from "react";
import { FC, PropsWithChildren, useRef, useEffect, useState } from "react";
import type { HeadFC } from "gatsby";

import "./fade-in.scss";

const FadeInSection: FC<PropsWithChildren> = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (domRef.current) {
            const observer = new IntersectionObserver((entries) => {
                for (let entry of entries) {
                    const isIntersecting = entry.isIntersecting;

                    if (isIntersecting) {
                        setVisible(true);
                    }
                }
            });

            observer.observe(domRef.current);
        }
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default FadeInSection;

export const Head: HeadFC = () => <title>Galerie</title>;
