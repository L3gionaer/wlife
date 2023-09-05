import * as React from "react"
import { FC, PropsWithChildren } from "react"

import "./layout.scss";
import Header from "../header/header";
import Footer from "../footer/footer";

export interface LayoutProps {
    path: string;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, path }) => {
    return (
        <div>
            <Header path={path} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;