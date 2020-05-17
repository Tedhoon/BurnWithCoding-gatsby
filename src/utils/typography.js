import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// export const rhythm = typography.rhythm
// export const scale = typography.scale << 이 둘은 그냥 비구조화 할당해줘도 될 것 같은디,,,?
export const { rhythm, scale } = typography

export default typography