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
        </div>
    </Layout>
);

export default IndexPage;
