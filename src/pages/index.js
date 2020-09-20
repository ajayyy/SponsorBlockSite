import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        apiUsers: "Loading",
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
                        SponsorBlock is an open-source crowdsourced browser extension to
                        skip sponsor segments in YouTube videos. Users submit
                        when a sponsor happens from the extension, and the
                        extension automatically skips sponsors it knows about.
                        It also supports skipping other categories, such as intros, outros and reminders to subscribe.
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
                        <strong>{totalStats.apiUsers.toLocaleString()}</strong> users who have
                        submitted <strong>{totalStats.totalSubmissions.toLocaleString()}</strong>{" "}
                        skip segments, which have saved a total of{" "}
                        <strong>
                            {isNaN(totalStats.minutesSaved)
                                ? totalStats.minutesSaved
                                : Math.floor(totalStats.minutesSaved / 60 / 24 / 365)}
                        </strong>{" "}
                        years and{" "}
                        <strong>
                            {isNaN(totalStats.minutesSaved)
                                ? totalStats.minutesSaved
                                : (totalStats.minutesSaved / 60 / 24 % 365).toFixed(2)}
                        </strong>{" "}
                        days of people's lives. Check out the{" "}
                        <Link to="/stats">the leaderboard</Link>.
                    </p>

                    <div className="text-center">
                        <h2>Download</h2>

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
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Edge"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/edge.png"
                                alt="Download for Edge"
                                style={{ height: "58px" }}
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

                        <h3>3rd Party Ports</h3>

                        <a 
                            href="https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports#mpv-media-player"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/mpv.png" alt="Download for MPV" />
                        </a>

                        <a 
                            href="https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports#kodi"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/kodi.svg" alt="Download for Kodi" style={{ height: "30px" }}/>
                        </a>

                        <a 
                            href="https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports#iOS"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/iOS.svg" alt="Download for iOS" style={{ height: "30px" }}/>
                        </a>

                        <a 
                            href="https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports#Chromecast"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/chromecast.svg" alt="Download for Chromecast" style={{ height: "30px" }}/>
                        </a>

                        <a 
                            href="https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports#Safari-macos"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/safari.svg" alt="Download for Safari" style={{ height: "30px" }}/>
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
                        can be downloaded by anyone
                        {" "}
                        <a href="https://github.com/ajayyy/SponsorBlock/wiki/Database-and-API-License">
                            (License)
                        </a>.
                        I want to keep this as open
                        as possible! You can view the docs for the{" "}
                        <a href="https://github.com/ajayyy/SponsorBlock/wiki/API-Docs">
                            public API here
                        </a>
                        .
                    </p>

                    <p className="text-center">
                        Check out <Link to="/about">how it works</Link>.
                    </p>

                    <p className="text-center">
                        Come chat with us on <a href="https://discord.gg/QnmVMpU">Discord</a>.
                    </p>
                    
                    <h4 className="text-center">Credit</h4>

                    <p className="text-center">
                        Built and maintained by <a href="https://ajay.app/">Ajay Ramachandran</a>
                    </p>

                    <p className="text-center">
                        Website rewritten by <a href="https://github.com/jplsek">Jeremy Plsek</a>
                    </p>

                    <p>
                        Thanks to all <a href="https://github.com/ajayyy/SponsorBlock/graphs/contributors">SponsorBlock contributors</a>, {' '}
                        <a href="https://github.com/ajayyy/SponsorBlockServer/graphs/contributors">SponsorBlockServer contributors</a> and {' '}
                        <a href="https://github.com/ajayyy/SponsorBlockSite/graphs/contributors">SponsorBlockSite contributors</a> such 
                        as <a href="https://github.com/NDevTK">NDev</a>, <a href="https://github.com/Joe-Dowd">Joe Dowd</a>,{' '}
                        <a href="https://github.com/bershanskiy">Anton Bershanskiy</a> and more.
                    </p>

                    <p className="text-center">
                        Neural network moderation powered by <a href="https://github.com/andrewzlee">Andrew Lee{"'"}s</a> <a href="https://github.com/andrewzlee/NeuralBlock">NeuralBlock</a>.
                    </p>

                    <p className="text-center">
                        Logo by <a href="https://github.com/munadikieh">@munadikieh</a>
                    </p>

                    <p className="text-center">
                        <a href="https://gist.github.com/ajayyy/aa9f8ded2b573d4f73a3ffa0ef74f796">Privacy Policy (Human Readable)</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
