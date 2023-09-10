import * as React from "react"
import { FC } from "react";
import { Link, type HeadFC } from "gatsby"

import "./404.scss";
import Layout from "../templates/layout/layout";
import Button from "../components/button/button";

const NotFoundPage: FC = () => {
    return (
        <Layout>
            <section className="notFoundSection">
                <h1>404 Seite nicht gefunden</h1>
                <Link to="/">
                    <Button>Zurück zu home</Button>
                </Link>
            </section>
        </Layout>
    )
}

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 not found</title>
