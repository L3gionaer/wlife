import * as React from "react"
import { FC } from "react";
import type { HeadFC } from "gatsby"

import "./about.scss";
import Layout from "../templates/layout/layout";
import drawing from '../images/drawing.svg';

const AboutPage: FC = () => {
    return (
        <Layout>
            <div className="aboutSection">
                <div className="content">
                    <div className="text">
                        <h1>Über mich</h1>
                        <p>Geboren 1963 in Illingen.</p>
                        <p>
                            Die ersten künstlerischen Erfahrungen sammelte ich 2004 bei der freischaffenden Künstlerin Doris Obrzut-Janosik-Mayer aus Beilstein, in einem Aquarellkurs.
                            Es folgten diverse Aufbaukurse zum Thema Aquarell Malerei in denen ich mich sehr intensiv mit Farbenlehre und der Wirkung der Farbe vertraut machen konnte.
                        </p>
                        <p>- Elvira Waidmann</p>
                    </div>
                    <div className="imageContainer">
                        <img src={drawing} className="image" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage;

export const Head: HeadFC = () => <title>Über mich</title>
