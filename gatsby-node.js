/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/developer/)) {
    page.context.layout = "developer"
    createPage(page)
  } else if (page.path.match(/musician/)) {
    page.context.layout = "musician"
    createPage(page)
  }
}

exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/context/",
    component: require.resolve("./src/templates/with-context.js"),
    context: {
      title: "some context",
      content: "no graphQL in this page",
    },
  })
}
