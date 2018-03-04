import Typography from "typography";
import gray from "gray-percentage";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";

const typography = new Typography({
  title: "Russell",
  baseFontSize: "21px",
  baseLineHeight: 1.3,
  scaleRatio: 1.5,
  googleFonts: [
    {
      name: "Libre Franklin",
      styles: ["800", "700", "600"]
    },
    {
      name: "EB Garamond",
      styles: ["400", "400i", "700"]
    },
    {
      name: "Source Code Pro",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Libre Franklin", "Helvetica", "sans-serif"],
  bodyFontFamily: ["EB Garamond", "Georgia", "serif"],
  bodyColor: "#333333",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: "#BB0000",
      textDecoration: "none"
    },
    "a:hover": {
      textDecoration: "underline"
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(30),
      fontStyle: "italic",
      paddingLeft: rhythm(3 / 4),
      marginLeft: 0,
      marginRight: 0,
      borderLeft: `${rhythm(1 / 4)} solid ${options.bodyColor}`
    },
    code: {
      ...adjustFontSizeTo("16px"),
      fontFamily: '"Source Code Pro", mono'
    },
    "div.gatsby-highlight": {
      marginTop: 0,
      marginBottom: rhythm(1 / 2)
    },
    "h2,h3,h4,h5,h6": {
      paddingBottom: rhythm(1 / 4),
      marginBottom: rhythm(1 / 4),
      borderBottom: `1px solid rgba(0, 0, 0, 0.2)`
    },
    h1: {
      fontWeight: 800
    },
    "h4,h5,h6": {
      fontWeight: 600
    },
    table: {
      ...scale(-1 / 5)
    },
    svg: {
      fontFamily: '"Source Code Pro", mono'
    },
    // Mobile styles.
    [TABLET_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(1 / 2)
      }
    }
  })
});

export default typography;
