module.exports = {
    siteMetadata: {
        title: "SponsorBlock",
        description:
            "SponsorBlock is a crowdsourced browser extension to skip sponsor segments in YouTube videos.",
        author: "Ajay Ramachandran",
        icon: "https://sponsor.ajay.app/LogoSponsorBlockSimple256px.png"
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
    ],
};
