import Typography from 'typography'
import gray from 'gray-percentage'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

const typography = new Typography({
  title: 'Russell',
  baseFontSize: '21px',
  baseLineHeight: 1.2,
  scaleRatio: 1.5,
  googleFonts: [
    {
      name: 'Libre Franklin',
      styles: ['700'],
    },
    {
      name: 'EB Garamond',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Libre Franklin', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['EB Garamond', 'Georgia', 'serif'],
  bodyColor: '#333333',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const styles = {
      a: {
        color: options.bodyColor,
      },
      'a:hover': {
        color: '#BB0000',
      },
      blockquote: {
        ...scale(1 / 5),
        color: gray(30),
        paddingLeft: rhythm(3 / 4),
        marginLeft: 0,
        marginRight: 0,
        borderLeft: `${rhythm(1 / 4)} solid ${gray(30)}`,
      },
      'h3,h4,h5,h6': {
        marginBottom: rhythm(1 / 2),
      },
      table: {
        ...scale(-1 / 5),
      },
      // Mobile styles.
      [TABLET_MEDIA_QUERY]: {
        blockquote: {
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
          paddingLeft: rhythm(1 / 2),
        },
      },
    }

    return styles
  },
})

export default typography
