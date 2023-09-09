import * as React from "react"
import { FC } from "react";
import type { HeadFC } from "gatsby"

import "./contact.scss";
import Layout from "../templates/layout/layout";
import contact from '../images/contact.svg';

const ContactPage: FC = () => {
    return (
        <Layout>
            <div className="contactPage">
                <div className="content">
                    <div className="text">
                        <h1>Kontakt</h1>
                        <p>Email: info@rahmen-los.de</p>
                        <p>Telefon: +49 1525 1057659</p>
                    </div>
                    <div className="imageContainer">
                        <img src={contact} className="image" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;

export const Head: HeadFC = () => <title>Kontakt</title>
