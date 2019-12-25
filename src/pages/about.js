import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="About" />

        <div className="container text-large">
            <p>
                The{" "}
                <a href="https://github.com/ajayyy/SponsorBlock">source code</a>{" "}
                is fully open and the{" "}
                <a href="https://sponsor.ajay.app/database.db">database</a> can
                be downloaded by anyone. I want to keep this as open as
                possible! You can view the docs for the{" "}
                <a href="https://github.com/ajayyy/SponsorBlock/wiki/API-Docs">
                    public API here.
                </a>
            </p>

            <h2>How it works</h2>

            <p>
                When you visit a YouTube video, it will check the database to
                see if anyone has made any submissions for the video. If so, the
                sponsored segment will automatically get skipped when you reach
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
                Once the sponsorship is skipped, you can report this sponsorship
                and it will be recorded in the database. If you don't report it,
                it will automatically be treated as an upvote (this can be
                disabled in the options).
            </p>

            <p>
                Upvotes are considered in an interesting way. Instead of just
                sending the top reported time, it uses an algorithm that is a
                little more complex, since some videos will have more than 1
                sponsorship message. It will looks for all the "similar
                sponsors" (I'm using the word similar here like it is used in
                the term similar triangle). For each similar sponsor, only one
                will be sent to the user. A similar sponsor is one that is
                contained in eachother, so probably just similar times and one
                is slightly off.
            </p>

            <h3>Fancy vote distribution algorithm</h3>

            <p>
                In a system like that, one sponsor would get a few votes, and
                then the rest of the sponsors would never appear again, and
                could never get votes. I decided on using a more fancy algorithm
                that used a weighted random distribution based on a square root
                function.
                <br />
                <img
                    className="pull-right"
                    src="/sqrtFunction.png"
                    alt="Square root function"
                />
                This formula makes small amount of votes (under 10), matter a
                lot, and makes the really large votes slowly not matter as much.
                This makes a newly submitted sponsor time always possible to be
                sent out to users to get votes. So, most users will get the best
                submission, but some users will get lesser votes submissions so
                that they can either be upvoted or downvoted. Submissions with
                less than -2 votes are ignored entirely.
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
                Anyone can submit sponsors, either by clicking on the button
                that is added to the YouTube player or by opening the extensions
                popup. The button in the YouTube player can be hidden. You click
                once to indicate the start of a sponsor, then click again to
                indicate the end. You can report as many sponsors as there are
                in the video. Just make sure to hit the submit button when
                you're finished.
            </p>

            <h3>What data is stored?</h3>

            <p>
                The bare minimum. Everything stored can be downloaded from the
                link above if you want to see.
            </p>

            <p>
                When you submit a sponsor, a few things are stored. The data for
                the sponsor, the video id, and a hashed version of your user ID
                is stored. Your user ID is a randomly generated UUID generated
                by your browser. As well as these, a hashed + salted (5000
                times) version of your ip address is saved. This is to be able
                to rate limit one ip sending way too much spam. Why is this
                hashed? This just adds an extra layer of security if there is a
                database breach. After hashing it this many times, it becomes
                extremely difficult to reverse it and find what your actual IP
                address is, but I can still verify that the current connection
                is from that hashed ip. By hashing it 5000 times and salting it,
                brute forcing would take longer to do.{" "}
            </p>
            <p>
                When you vote, your user ID and hashed ip is stored along with
                what you voted for.
            </p>

            <p>
                As well as these, whenever you submit a sponsor, it tells the
                server and the server records one "view" on that sponsor. No IP
                data or userId data is collected for this. This is to make it so
                that you can see how many people you have helped and I can see
                how much the extension is being used. However, I perfectly
                understand why someone wouldn't want this data logged, so there
                is an option to disable this if you would like.
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
                <a href="https://sponsor.ajay.app/database.db">here</a>. It is a
                sqlite database and can be opened in any sqlite database reading
                program. Certain sensitive info is not in this database and is
                not public such as individual votes (not vote counts) and IP
                addresses. That information isn't needed by anyone anyone, only
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
                Logo by <a href="https://github.com/munadikieh">@munadikieh</a>
            </p>

            <p>
                The awesome{" "}
                <a href="https://github.com/omarroth/invidious/wiki/API">
                    Invidious API
                </a>{" "}
                is used to grab the time the video was published.
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
        </div>
    </Layout>
);

export default IndexPage;
