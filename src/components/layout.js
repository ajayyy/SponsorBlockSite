/**
 * Layout of the main website.
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "normalize.css/normalize.css";
import "./layout.scss";
import "fork-awesome/css/fork-awesome.min.css";

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
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to="/stats" className="nav-link">
                            Stats
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
                        <a
                            href="https://wiki.sponsor.ajay.app/w/Guidelines"
                            className="nav-link"
                        >
                            Guidelines
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://wiki.sponsor.ajay.app/w/API_Docs"
                            className="nav-link"
                        >
                            API
                        </a>
                    </li>
                </ul>

                <ul className="nav">
                    <li className="author">
                        <a
                            href="https://ajay.app/"
                            className="nav-link text-small profile"
                        >
                            Created by Ajay Ramachandran
                            <img
                                src="/ajay_profile.jpg"
                                alt="Ajay's avatar"
                            ></img>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://discord.gg/SponsorBlock"
                            className="nav-link"
                            title="Discord Invite"
                        >
                            <i className="fa fa-discord"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://matrix.to/#/#sponsor:ajay.app?via=ajay.app&via=matrix.org&via=mozilla.org"
                            className="nav-link"
                            title="Matrix Invite"
                        >
                            <i className="fa fa-matrix-org"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://twitter.com/SponsorBlock"
                            className="nav-link"
                        >
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/ajayyy/SponsorBlock"
                            className="nav-link"
                        >
                            <i className="fa fa-github"></i>
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
