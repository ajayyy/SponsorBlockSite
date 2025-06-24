import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { DonateComponent } from "../components/donate";

const IndexPage = () => (
    <Layout>
        <Seo title="Donate" />

        <div className="container">
            <h1>Donate</h1>

            <p>
                Hi, I'm Ajay.
                For the past 5 years, I've been working open-source tools like SponsorBlock and DeArrow.
                Thanks to your support, I am now able to work on these open-source projects full time.
            </p>

            <p>
                If you'd like to help make that possible, consider supporting using an option below.
            </p>

            <DonateComponent />

            <hr noshade />

            <h4>Creators</h4>

            <p>
                Consider helping out the creators of videos you watch by
                donating to their crowdfunding campaigns, or subscribing to
                services such as YouTube Premium.
            </p>

            <h4>Contributors</h4>

            <p>
                Also check out all the other contributors who have helped out
                with this project;{" "}
                <a href="https://github.com/ajayyy/SponsorBlock/graphs/contributors">
                    SponsorBlock contributors
                </a>
                ,{" "}
                <a href="https://github.com/ajayyy/SponsorBlockServer/graphs/contributors">
                    SponsorBlockServer contributors
                </a>{" "}
                and{" "}
                <a href="https://github.com/ajayyy/SponsorBlockSite/graphs/contributors">
                    SponsorBlockSite contributors
                </a>{" "}
                such as <a href="https://github.com/NDevTK">NDev</a>,{" "}
                <a href="https://github.com/Joe-Dowd">Joe Dowd</a>,{" "}
                <a href="https://mchang.name/">Michael Chang</a> and more.
            </p>

            <p>
                Also, all of the <a href="/stats">segment submitters</a>.
            </p>
        </div>
    </Layout>
);

export default IndexPage;
