/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import type { GatsbyNode } from "gatsby";

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage } = actions

  if (!page.context) return;

  if (page.path.match(/developer/)) {
    page.context.layout = "developer"
    createPage(page)
  } else if (page.path.match(/musician/)) {
    page.context.layout = "musician"
    createPage(page)
  }
}

// export const createPages: GatsbyNode['createPages'] = ({ actions: { createPage } }) => {
//   createPage({
//     path: "/context/",
//     component: require.resolve("./src/templates/with-context.js"),
//     context: {
//       title: "some context",
//       content: "no graphQL in this page",
//     },
//   })
// }
