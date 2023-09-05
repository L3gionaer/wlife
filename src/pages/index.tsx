import * as React from "react"
import { FC } from "react";
import type { HeadFC, PageProps } from "gatsby"

import "./index.scss";
import HeroSection from "../templates/landing-page/hero-section/hero-section";
import Layout from "../templates/layout/layout";

const IndexPage: FC<PageProps> = ({ path }) => {
    return (
        <Layout path={path}>
            <HeroSection />
        </Layout>
    )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Startseite</title>
