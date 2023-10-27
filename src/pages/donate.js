import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
    <Layout>
        <Seo title="Donate" />

        <div className="container">
            <h1>Donate</h1>

            <p>
                Hi, I'm Ajay.
                For the last 4 years, I've been working on SponsorBlock in my spare time.
                In January 2024, I will be graduating from university and hope to make SponsorBlock and future open-source user-focused tools my full time job.
            </p>

            <p>
                If you'd like to help make that possible, consider supporting using an option below.
                If you are able to, a recurring donation would be super helpful, but one time donations are very much appreciated as well!
            </p>

            <p>
                Recurring:{" "}
                <a href="https://github.com/sponsors/ajayyy-org">
                    GitHub (lowest fees)
                </a>
                ,{" "}
                <a href="https://www.patreon.com/ajayyy">Patreon</a>
            </p>

            <p>
                One-time donation:{" "}
                <a href="https://github.com/sponsors/ajayyy-org?frequency=one-time">
                    GitHub (lowest fees)
                </a>
                , <a href="https://paypal.me/ajayyy">Paypal</a>,{" "}
                <a href="bitcoin:bc1qvnjvuqycefz593pu6f2vpngml8ld9wjqd5qcus">
                    BTC
                </a>
            </p>

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
