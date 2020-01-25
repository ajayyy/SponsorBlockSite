/**
 * Layout of the main website.
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "normalize.css/normalize.css";
import "./layout.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const Layout = ({ children }) => {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#262626",
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px #1c1c1c solid",
                }}
            >
                <ul className="nav">
                    <li>
                        <Link
                            to="/"
                            className="nav-link"
                            style={{ padding: "0.7rem 1.5rem" }}
                        >
                            <img
                                src="/LogoSponsorBlockSimple256px.png"
                                alt="Home"
                                style={{
                                    height: "2.1rem",
                                    verticalAlign: "middle",
                                }}
                            />
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li>
                        <a
                            href="https://sponsor.ajay.app/news"
                            className="nav-link"
                        >
                            Blog
                        </a>
                    </li>

                    <li>
                        <Link to="/stats" className="nav-link">
                            Stats
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>

                    <li>
                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Guidelines"
                            className="nav-link"
                        >
                            Guidelines
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/API-Docs"
                            className="nav-link"
                        >
                            API
                        </a>
                    </li>
                </ul>

                <ul className="nav">
                    <li>
                        <a
                            href="https://ajay.app/"
                            className="nav-link text-small profile"
                        >
                            Created by Ajay Ramachandran

                            <img src="/ajay_profile.jpg"></img>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://discord.gg/QnmVMpU"
                            className="nav-link"
                        >
                            <i className="fab fa-discord"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://twitter.com/SponsorBlock"
                            className="nav-link"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/ajayyy/SponsorBlock"
                            className="nav-link"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <main>{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
