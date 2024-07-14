import { graphql } from 'gatsby';
import * as React from 'react';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/UI/Paragraph';

interface JeremyMahoneyData {
  mdx: {
    frontmatter: {
      title: string;
    }
  }
}
// : Readonly<JeremyMahoneyData>
export default function JeremyMahoney(props) {
  console.log(props)
  return (
    <main>
      {/* <Heading level={1}>{data.mdx.frontmatter.title}</Heading> */}
      <Paragraph>a
        {/* {data.mdx.body} */}
      </Paragraph>
    </main>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      }
      body
  }
}
`;