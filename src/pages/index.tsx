import * as React from "react"
import { FC } from "react";
import type { HeadFC } from "gatsby"

import "./index.scss";
import HeroSection from "../templates/landing-page/hero-section/hero-section";
import Layout from "../templates/layout/layout";

const IndexPage: FC = () => {
    return (
        <Layout>
            <HeroSection />
        </Layout>
    )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Startseite</title>
