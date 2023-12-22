import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";

import Seo from "../../../components/SEO/Seo";
import Paragraph from "../../../components/UI/Paragraph/Paragraph";
import Heading from "../../../components/Heading/Heading";
import MaxWidthContainer from "../../../components/MaxWidthContainer";

export default function BlogPost({ data, children }: Readonly<PageProps>) {
  return (
    <main>
      <MaxWidthContainer>
        <Heading level={1}>
          {data.mdx.frontmatter.title}
        </Heading>
        <Paragraph>Posted: {data.mdx.frontmatter.date}</Paragraph>
        {children}
      </MaxWidthContainer>
    </main>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

// export const Head: HeadFC<string> = () => <Seo title=`Blog |  ${data.mdx.frontmatter.title} | Elliot Reed | Developer` />
export const Head: HeadFC<string> = ({ data }: PageProps) => <Seo title={`${data.mdx.frontmatter.title} | Blog | Elliot Reed | Developer`} />