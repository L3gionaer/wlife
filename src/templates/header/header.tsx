import * as React from "react";
import { FC, useState } from "react";

import "./header.scss";
import logo from "../../images/rahmenlos.png";
import { Link } from "gatsby";

const headerItems = [
    { title: "Home", path: "/" },
    { title: "Galerie", path: "/galery" },
    { title: "Über mich", path: "/about" },
    { title: "Kontakt", path: "/contact" },
];

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(isOpen: boolean) {
        setIsOpen(isOpen);
    }

    return (
        <header className="header">
            <div className="navContainer">
                <Link to={"/"}>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <div
                    className="mobileMenuButton"
                    onClick={() => toggleMenu(true)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </div>
                <nav className={isOpen ? "open" : "closed"}>
                    <div className="close" onClick={() => toggleMenu(false)}>
                        <span className="material-symbols-outlined">close</span>
                    </div>
                    <ul>
                        {headerItems.map(({ title, path }) => (
                            <Link to={path} key={path} activeClassName="active">
                                <li>{title}</li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
