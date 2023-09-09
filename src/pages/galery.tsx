import * as React from "react"
import { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../templates/layout/layout";
import * as images from "../images/images";
import GaleryItem from "../templates/galery/galery-item";
import "./galery.scss";

const GaleryPage: FC<PageProps> = ({ path }) => {
    return (
        <Layout path={path}>
            <section className="galerySection">
                <div className="galeryGrid">
                    <h1>Galerie</h1>
                    {Object.entries(images).map(([key, value]) => 
                        <GaleryItem imageSrc={value.default} imageName={key} key={key}/>
                    )}
                </div>
            </section>
        </Layout>
    )
}

export default GaleryPage;

export const Head: HeadFC = () => <title>Galerie</title>
