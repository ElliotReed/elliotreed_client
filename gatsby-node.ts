/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import type { GatsbyNode } from "gatsby";
import path from "node:path";

interface MdxEdge {
  node: {
    id: string;
    frontmatter: {
      slug: string;
    };
    fields: {
      source: string;
    };
  };
}

interface QueryResult {
  data: {
    allMdx: {
      edges: MdxEdge[];
    };
  };
  errors?: any;
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // const result: QueryResult = await graphql(`
  //   {
  //     allMdx {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             slug
  //           }
  //           fields {
  //             source
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // if (result.errors) {
  //   throw result.errors;
  // }

  // result.data.allMdx.edges.forEach(({ node }) => {
  //   let componentPath;
  //   let routeBasePath;

  //   if (node.fields.source === "cakewalk") {
  //     componentPath = path.resolve(`src/pages/cakewalk/[slug].tsx`);
  //     routeBasePath = "cakewalk";
  //   } else if (node.fields.source === "finale") {
  //     componentPath = path.resolve(`src/pages/finale/[slug].tsx`);
  //     routeBasePath = "finale";
  //   } else if (node.fields.source === "jeremy-mahoney") {
  //     componentPath = path.resolve(`src/pages/jeremy-mahoney/[slug].tsx`);
  //     routeBasePath = "finale";
  //   } else if (node.fields.source === "guitar") {
  //     componentPath = path.resolve(`src/pages/guitar/[slug].tsx`);
  //     routeBasePath = "finale";
  //   } else if (node.fields.source === "vocals") {
  //     componentPath = path.resolve(`src/pages/vocals/[slug].tsx`);
  //     routeBasePath = "finale";
  //   } else if (node.fields.source === "bands") {
  //     componentPath = path.resolve(`src/pages/about/bands/[slug].tsx`);
  //     routeBasePath = "about/bands";
  //   } else {
  //     // Handle other paths or skip
  //     return;
  //   }

  //   createPage({
  //     path: `/${routeBasePath}/${node.frontmatter.slug}`,
  //     component: componentPath,
  //     context: {
  //       id: node.id,
  //       slug: node.frontmatter.slug,
  //       source: node.fields.source,
  //     },
  //   });
  // });
};

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage } = actions

  if (!page.context) return;

  if (RegExp(/design/).exec(page.path)) {
    page.context.layout = "design";
    createPage(page);
  }
  // if (RegExp(/cakewalk/).exec(page.path)) {
  //   // page.context.layout = "design";
  //   createPage(page);
  // }
}
