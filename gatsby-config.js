module.exports = {
    siteMetadata: {
        title: "SponsorBlock",
        description:
            "SponsorBlock is a crowdsourced browser extension to block sponsor segments of YouTube videos.",
        author: "Ajay Ramachandran",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "SponsorBlock",
                short_name: "SponsorBlock",
                start_url: "/",
                background_color: "#fff",
                theme_color: "#fff",
                icon: "static/LogoSponsorBlockSimple256px.png",
            },
        },
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-purgecss",
            options: {
                printRejected: true,
            },
        },
    ],
};
