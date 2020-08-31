import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="About" />

        <div className="container">
            <h2>How it works</h2>

            <p>
                When you visit a YouTube video, it will check the database to
                see if anyone has made any submissions for the video. If so, the
                segment will automatically get skipped when you reach
                it.
            </p>

            <div className="text-center">
                <img
                    src="/new_notice.gif"
                    alt="The notice notification"
                    title="The notice you receive (you can disable it)"
                />
            </div>

            <p>
                Once the sponsorship is skipped, you can upvote or downvote this
                segment and it will be recorded in the database.
            </p>

            <p>
                Instead of just sending the top reported segment, it finds 
                all of the overlapping segments. Only one segment from
                each group of overlapping segments will be sent to the user.
            </p>

            <h3>Pseudo-random distribution</h3>

            <p>
                To prevent one submission with a lot of votes never being able 
                to be replaced, I decided to use a weighted random distribution 
                based on the equation on the right.
                <br />
                <img
                    className="pull-right"
                    src="/sqrtFunction.png"
                    alt="Square root function"
                />
                This formula makes the first few votes matter a lot more than
                votes on a submission that already has a lot of votes.
                This gives newly submitted segments a better chance of being 
                sent out to users to get votes. So, most users will get the best
                submission, but some users will get lesser votes submissions so
                that they can either be upvoted or downvoted. Submissions with
                less than -1 votes are ignored entirely.
            </p>

            <p>
                You can read more about my algorithm{" "}
                <a href="https://ajay.app/blog.html#voting-and-pseudo-randomness-or-sponsorblock-or-youtube-sponsorship-segment-blocker">
                    here
                </a>
                .
            </p>

            <h3>Submissions</h3>

            <p>
                Anyone can submit segments, either by clicking on the button
                that is added to the YouTube player or by opening the extensions
                popup. The button in the YouTube player can be hidden. You click
                once to indicate the start of a segment, then click again to
                indicate the end. You can submit as many segments as there are
                in the video. Make sure to choose the correct category for each segment.
            </p>

            <h3>What data is stored?</h3>

            <p>
                The bare minimum. Check {" "}
                <a href="https://gist.github.com/ajayyy/aa9f8ded2b573d4f73a3ffa0ef74f796">
                    this list
                </a>{" "}
                for more information
            </p>

            <h3>Previous projects like this</h3>

            <p>
                In January 2019, a group of people tried to do a similar thing,
                but instead of using other people's submissions to skip sponsor
                segments for everyone, they{" "}
                <a href="https://github.com/Sponsoff">
                    ran the data through a neural network
                </a>
                . Sadly, this project was abandoned.
            </p>

            <p>
                I don't want something similar to happen to this project, that's
                why all this code is open-sourced and, most importantly, the
                database can be downloaded by anyone. The database may even be
                automatically backed up by archive.org! The database will always
                be available{" "}
                <a href="https://api.sponsor.ajay.app/database.db">here</a>. It is a
                sqlite database and can be opened in any sqlite database reading
                program. Certain sensitive info is not in this database and is
                not public such as individual votes (not vote counts) and hashed IP
                addresses. That information isn't needed by anyone else, only
                the server.
            </p>

            <h3>When was this started</h3>

            <p>
                The project was started July 5th 2019 and was first released to
                the public July 26th 2019.
            </p>

            <h2>Contact Info</h2>

            <p>If you have any suggestions, feel free to tell me.</p>

            <p>
                You can find all my progress updates here:{" "}
                <a href="https://sponsor.ajay.app/news">
                    https://sponsor.ajay.app/news
                </a>
            </p>

            <p>
                You can contact me by email at dev @ ajay.app if you have any
                questions.
            </p>

            <p>
                Feel free to join this Discord:{" "}
                <a href="https://discord.gg/QnmVMpU">
                    https://discord.gg/QnmVMpU
                </a>
            </p>

            <p>
                Or follow on Twitter:{" "}
                <a href="https://twitter.com/SponsorBlock">
                    https://twitter.com/SponsorBlock
                </a>
            </p>

            <h4>Credit</h4>

            <p>
                Built and maintained by <a href="https://ajay.app/">Ajay Ramachandran</a>
            </p>

            <p>
                Thanks to all <a href="https://github.com/ajayyy/SponsorBlock/graphs/contributors">SponsorBlock contributors</a> and {' '}
                <a href="https://github.com/ajayyy/SponsorBlockServer/graphs/contributors">SponsorBlockServer contributors</a> such 
                as <a href="https://github.com/NDevTK">NDev</a>, <a href="https://github.com/Joe-Dowd">Joe Dowd</a>,{' '}
                <a href="https://github.com/bershanskiy">Anton Bershanskiy</a> and more.
            </p>

            <p>
                Logo by <a href="https://github.com/munadikieh">@munadikieh</a>
            </p>

            <p>
                Some icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/gregor-cresnar"
                    title="Gregor Cresnar"
                >
                    Gregor Cresnar
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>{" "}
                and are licensed by{" "}
                <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                >
                    CC 3.0 BY
                </a>
            </p>

            <p>
                Some icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                >
                    Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>{" "}
                and are licensed by{" "}
                <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                >
                    CC 3.0 BY
                </a>
            </p>

            <p>
                The awesome{" "}
                <a href="https://github.com/omarroth/invidious/wiki/API">
                    Invidious API
                </a>{" "}
                was used previously.
            </p>
        </div>
    </Layout>
);

export default IndexPage;
