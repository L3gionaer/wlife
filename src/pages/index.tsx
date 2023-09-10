import * as React from "react"
import { FC } from "react";
import { Link } from "gatsby";
import type { HeadFC } from "gatsby"

import "./index.scss";
import Layout from "../templates/layout/layout";
import hero from "../images/hero.svg";
import Button from "../components/button/button";

const IndexPage: FC = () => {
    return (
        <Layout>
            <section className="heroSection">
                <div className="heroContainer">
                    <img className="heroImage" src={hero} />
                    <div className="heroContent">
                        <h1>
                            Rahmenlos
                        </h1>
                        <hr />
                        <p>Die Auseinandersetzung mit dem gesehenem ist der Entstehungsweg ein jeden Bildes.</p>
                        <p>Etwas auf sich wirken lassen und Schicht für Schicht für Schicht mit Farbe wiedergeben in seiner eigenen Interpretation.</p>
                        <Link to="/galery" className="link">
                            <Button>Zur Galerie</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Startseite</title>
