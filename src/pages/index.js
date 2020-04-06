import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        activeUsers: "Loading",
        totalSubmissions: "Loading",
        minutesSaved: "Loading",
    });

    useEffect(() => {
        fetch("https://sponsor.ajay.app/api/getTotalStats")
            .then(response => response.json())
            .then(resultData => setTotalStats(resultData));
    }, []);

    return (
        <Layout>
            <SEO title="Home" overwriteTitle="SponsorBlock - Skip over YouTube Sponsors - Sponsorship Skipper" />

            <div className="title">
                <img
                    src="/LogoSponsorBlock256px.png"
                    alt="Logo"
                />

                <span style={{ color: "white" }}>SponsorBlock</span>
            </div>

            <div className="container">
                <div className="">
                    <p>
                        SponsorBlock is a crowdsourced browser extension to
                        skip sponsor segments in YouTube videos. Users submit
                        when a sponsor happens from the extension, and the
                        extension automatically skips sponsors it knows about.
                        It also features an upvote/downvote system with a{" "}
                        <a href="https://ajay.app/blog.html#voting-and-pseudo-randomness-or-sponsorblock-or-youtube-sponsorship-segment-blocker">
                            weighted random based distribution
                        </a>
                        .
                    </p>

                    <p>
                        Check{" "}
                        <a href="https://status.sponsor.ajay.app">
                            status.sponsor.ajay.app
                        </a> {" "}
                        for server status.
                    </p>

                    <p>
                        There are currently{" "}
                        <strong>{totalStats.activeUsers.toLocaleString()}</strong> users who have
                        submitted <strong>{totalStats.totalSubmissions.toLocaleString()}</strong>{" "}
                        sponsors, which have saved a total of{" "}
                        <strong>
                            {isNaN(totalStats.minutesSaved)
                                ? totalStats.minutesSaved
                                : (totalStats.minutesSaved / 60 / 24).toFixed(
                                      2
                                  )}
                        </strong>{" "}
                        days of people's lives. Check out the{" "}
                        <Link to="/stats">the leaderboard</Link>.
                    </p>

                    <div className="text-center">
                        <h2>Download the extension</h2>

                        <a href="https://chrome.google.com/webstore/detail/mnjggcdmjocbbbhaepdhchncahnbgone">
                            <img
                                src="/ChromeWebStore_BadgeWBorder_v2_206x58.png"
                                alt="Download for Chrome"
                            />
                        </a>

                        <a
                            href="https://addons.mozilla.org/addon/sponsorblock?src=external-website"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/AMO-button_1.png"
                                alt="Download for Firefox"
                            />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Opera"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/opera.png" alt="Download for Opera" />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Android"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/android.png" alt="Download for Android"
                                style={{ height: "58px" }} />
                        </a>

                        <h3>Unofficial ports</h3>

                        <a 
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Unofficial-Ports#mpv-media-player"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/mpv.png" alt="Download for MPV" />
                        </a>

                        <a 
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Unofficial-Ports#kodi"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/kodi.svg" alt="Download for Kodi" style={{ height: "30px" }}/>
                        </a>

                        <a 
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Unofficial-Ports#iOS"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/iOS.svg" alt="Download for iOS" style={{ height: "30px" }}/>
                        </a>
                    </div>

                    <p>
                        The{" "}
                        <a href="https://github.com/ajayyy/SponsorBlock">
                            source code
                        </a>{" "}
                        is fully open and the{" "}
                        <a href="https://sponsor.ajay.app/database.db">
                            database
                        </a>{" "}
                        can be downloaded by anyone. I want to keep this as open
                        as possible! You can view the docs for the{" "}
                        <a href="https://github.com/ajayyy/SponsorBlock/wiki/API-Docs">
                            public API here
                        </a>
                        .
                    </p>

                    <p className="text-center">
                        Check out <Link to="/about">how it works</Link>.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
