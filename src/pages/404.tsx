import * as React from "react"
import { FC } from "react";
import type { HeadFC } from "gatsby"

import "./index.scss";
import Layout from "../templates/layout/layout";

const NotFoundPage: FC = () => {
    return (
        <Layout>
            404
        </Layout>
    )
}

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 not found</title>
