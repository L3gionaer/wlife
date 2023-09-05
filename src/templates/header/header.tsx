import * as React from "react"
import { FC } from "react";

import "./header.scss";
import logo from "../../images/rahmenlos.png";
import { Link } from "gatsby";

export interface HeaderProps {
    path: string;
}

const headerItems = [
    { title: 'Home', path: '/' },
    { title: 'Galerie', path: '/galery' },
    { title: 'Über mich', path: '/about' },
    { title: 'Kontakt', path: '/contact' },
]

const Header: FC<HeaderProps> = ({ path }) => {
    function isActive(pathName: string): boolean {
        return path === pathName || path === pathName + '/';
    }

    return (
        <header className="header">
            <div className="navContainer">
                <img src={logo} alt="logo" className="logo" />
                <nav>
                    <ul>
                        {headerItems.map(({ title, path }) =>
                            <Link 
                                to={path} 
                                className={isActive(path) ? 'active' : ''} 
                                key={path}
                            >
                                <li>
                                    {title}
                                </li>
                            </Link> 
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;