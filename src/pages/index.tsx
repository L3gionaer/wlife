import * as React from "react";
import { FC, useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import type { HeadFC } from "gatsby";

import "./index.scss";
import Layout from "../templates/layout/layout";
import Button from "../components/button/button";
import * as images from "../images/slideshow";

const IndexPage: FC = () => {
    const allImages = useRef(Object.values(images));
    const [currentImageIndex, setCurrentImageIndex] = useState(-1);

    useEffect(() => {
        setTimeout(() => {
            setCurrentImageIndex(0);
        }, 500);

        setInterval(() => {
            setCurrentImageIndex((index) => {
                if (index === allImages.current.length - 1) {
                    return 0;
                }
                return index + 1;
            });
        }, 6000);
    }, []);

    return (
        <Layout>
            <section className="heroSection">
                <div className="heroContainer">
                    <div className="heroContent">
                        <h1>Rahmenlos</h1>
                        <hr />
                        <p>
                            Die Auseinandersetzung mit dem gesehenem ist der
                            Entstehungsweg ein jeden Bildes.
                        </p>
                        <p>
                            Etwas auf sich wirken lassen und Schicht für Schicht
                            für Schicht mit Farbe wiedergeben in seiner eigenen
                            Interpretation.
                        </p>
                        <Link to="/galery" className="link">
                            <Button>Zur Galerie</Button>
                        </Link>
                    </div>
                    <div className="slideshowContainer">
                        <div className="slideshow">
                            {Object.entries(allImages.current).map(
                                ([key, value]) => (
                                    <div
                                        className="slide"
                                        style={{
                                            transform: `translate(${
                                                -currentImageIndex * 100
                                            }%)`,
                                        }}
                                        key={key}
                                    >
                                        <img
                                            src={value.default}
                                            className="heroImage"
                                            alt="hero"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Startseite</title>;
