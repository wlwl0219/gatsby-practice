import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  title?: string | null;
}

export function Seo({ title }: ISeoProps) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title ?? "없어"} | {data.site?.siteMetadata?.title}!
    </title>
  );
}
