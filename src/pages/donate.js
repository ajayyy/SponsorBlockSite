import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Donate" />

        <div className="container">
            <h1>Donate</h1>

            <p>
                One-time donation: <a href="https://paypal.me/ajayyy">Paypal</a>
            </p>
    
            <p>
                Recurring: <a href="https://www.patreon.com/ajayyy">Patreon</a>
            </p>

            <hr noshade/>
    
            <h4>Creators</h4>

            <p>
                Consider helping out the creators of videos you watch by donating to their crowdfunding campaigns, or subscribing to services such as YouTube Premium.
            </p>
    
            <h4>Contributors</h4>
    
            <p>
                Also check out all the other contributors who have helped out with this project;{' '}
                <a href="https://github.com/ajayyy/SponsorBlock/graphs/contributors">SponsorBlock contributors</a>, {' '}
                <a href="https://github.com/ajayyy/SponsorBlockServer/graphs/contributors">SponsorBlockServer contributors</a> and {' '}
                <a href="https://github.com/ajayyy/SponsorBlockSite/graphs/contributors">SponsorBlockSite contributors</a> such 
                as <a href="https://github.com/NDevTK">NDev</a>, <a href="https://github.com/Joe-Dowd">Joe Dowd</a>,{' '}
                <a href="https://github.com/bershanskiy">Anton Bershanskiy</a> and more.
            </p>
    
            <p>
                Also, all of the <a href="/stats">segment submitters</a>.
            </p>
        </div>
    </Layout>
);

export default IndexPage;
