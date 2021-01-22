import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Emails I get from scammers" />

        <div className="container">

            <h1>Emails I get from scammers</h1>

            <p>
                I've been seeing a lot of stories about extensions getting taken over by unknown developers and becoming malware. 
                Sadly, with how many permissions many  extensions have, it can do a lot of damage. 
                SponsorBlock only has access to youtube.com, so can do much less damage, but it still could do malicious things if someone took over.
            </p>
            
            <p>I decided to compile a list of these sketchy emails I have received to name and shame these companies. 
                To be clear I <strong>will never</strong> do anything of this sort, but make sure any extensions you install are from trusted developers and have as few permissions as possible. 
                Most of these scams wouldn&#39;t even work with SponsorBlock due to lack of permissions, but they spam email all developers anyway.
            </p>

            <h2>From partners@infatica.io (A proxy service (botnet?)):</h2>
            <a href="https://infatica.io/sdk-monetization/?utm_campaign=1+SDK+N+-+Accept+All">https://infatica.io/sdk-monetization/?utm_campaign=1+SDK+N+-+Accept+All</a>
            
            
            <p>Here's the <a href="https://pastebin.com/MXVMmwAx">code</a> for their sdk. 
                In the email they told me it was "open", so that should mean it is meant to be public.
                It is obfuscated. 
            </p>

            <img src="https://user-images.githubusercontent.com/12688112/105428261-04d7f180-5c1d-11eb-9d97-9f9be56eecef.png" alt="image"/>
            <img src="https://user-images.githubusercontent.com/12688112/105428173-d0643580-5c1c-11eb-8d41-a8214efa2725.png" alt="image"/>
            <img src="https://user-images.githubusercontent.com/12688112/105427987-68155400-5c1c-11eb-8837-cf6574dfea85.png" alt="image"/>
            <img src="https://user-images.githubusercontent.com/12688112/105427949-52079380-5c1c-11eb-956b-6e9a74d6567a.png" alt="image"/>
            
            <h2>From admedia.com:</h2>
            <img src="https://user-images.githubusercontent.com/12688112/105428058-8d09c700-5c1c-11eb-861a-30af42eb7bfe.png" alt="image"/>
            
            <h2>From invokevision.com/invoke.vision:</h2>
            <img src="https://user-images.githubusercontent.com/12688112/105428076-998e1f80-5c1c-11eb-8fce-d1f457bdd133.png" alt="image"/>
            
            <h2>From admitad.com:</h2>
            <img src="https://user-images.githubusercontent.com/12688112/105428131-b62a5780-5c1c-11eb-9c7a-dde5c23b8bc1.png" alt="image"/>
            
            <h2>From monetisationsolutions@gmail.com:</h2>
            <img src="https://user-images.githubusercontent.com/12688112/105428492-7dd74900-5c1d-11eb-842f-552131926ad5.png" alt="image"/>
            
            <h2>From sponsoredsearchsolutions@gmail.com:</h2>
            <img src="https://user-images.githubusercontent.com/12688112/105428629-be36c700-5c1d-11eb-8408-88bce74574a8.png" alt="image"/>

        </div>
    </Layout>
);

export default IndexPage;
