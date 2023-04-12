import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import { PageProps, graphql } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <h3>{file.frontmatter?.title}</h3>
            <h5>
              {file.frontmatter?.author} in {file.frontmatter?.category}
            </h5>
            <h6>{file.frontmatter?.data}</h6>
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          data
          title
        }
        excerpt(pruneLength: 43)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
