import Typography from "typography"
// import bootstrapTheme from "typography-theme-bootstrap"
import githubTheme from "typography-theme-github"
import CodePlugin from 'typography-plugin-code'

githubTheme.plugins = [
  new CodePlugin(),
]

const typography = new Typography(githubTheme)
export default typography
