import * as React from "react"
import { FC } from "react";
import type { HeadFC, PageProps } from "gatsby"

import "./contact.scss";
import Layout from "../templates/layout/layout";

const ContactPage: FC<PageProps> = ({ path }) => {
    return (
        <Layout path={path}>
            <div className="contactPage">
                <div className="contact">
                    <h1>Kontakt</h1>
                    <p>Email: info@rahmen-los.de</p>
                    <p>Telefon: +49 1525 1057659</p>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;

export const Head: HeadFC = () => <title>Kontakt</title>
