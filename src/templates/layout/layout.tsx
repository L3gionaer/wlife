import * as React from "react"
import { FC, PropsWithChildren } from "react"
import { Helmet } from "react-helmet"

import "./layout.scss";
import Header from "../header/header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Helmet>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;