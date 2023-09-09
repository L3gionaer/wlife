import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Rahmenlos`,
    siteUrl: `https://rahmen-los.de`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass"]
};

export default config;
