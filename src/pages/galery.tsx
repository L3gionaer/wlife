import * as React from "react";
import { FC } from "react";
import type { HeadFC } from "gatsby";

import Layout from "../templates/layout/layout";
import * as images from "../images/galery";
import GaleryItem from "../templates/galery-item/galery-item";
import "./galery.scss";
import FadeInSection from "../components/fade-in/fade-in";

const GaleryPage: FC = () => {
    return (
        <Layout>
            <section className="galerySection">
                <div className="galeryGrid">
                    <h1>Galerie</h1>
                    {Object.entries(images).map(([key, value]) => (
                        <FadeInSection key={key}>
                            <GaleryItem
                                imageSrc={value.default}
                                imageName={key}
                            />
                        </FadeInSection>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default GaleryPage;

export const Head: HeadFC = () => <title>Galerie</title>;
