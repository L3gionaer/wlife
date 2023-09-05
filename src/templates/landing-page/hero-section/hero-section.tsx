import * as React from "react"
import { FC } from "react";
import { Link } from "gatsby";

import "./hero-section.scss";
import hero from "../../../images/hero.svg";
import Button from "../../../components/button/button";

const HeroSection: FC = () => {
    return (
        <section className="heroSection">
            <div className="heroContainer">
                <img className="heroImage" src={hero} />
                <div className="heroContent">
                    <h1 className="title">
                        Rahmenlos
                    </h1>
                    <hr />
                    <p>Die Auseinandersetzung mit dem gesehenem ist der Entstehungsweg ein jeden Bildes.
                    Etwas auf sich wirken lassen und Schicht für Schicht für Schicht mit Farbe wiedergeben in seiner eigenen Interpretation.</p>
                    <Link to="/galery">
                        <Button>Zur Galerie</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;

{/* <div className="heroContainer">
<img className="heroImage" src={sculping} />
<div className="heroContent">
    <h1 className="title">
        Rahmenlos
    </h1>
    <hr />
    <p>Some text here</p>
</div>
</div> */}

{/* <section className="heroSection">
            <div className="title-grid">
                <div className="title">
                    <h1 className="wlife_title">
                        Wahre lebendigkeit in Farbe
                    </h1>
                </div>
            </div>
        </section> */}