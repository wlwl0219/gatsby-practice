import * as React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevSticker">
      <div></div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
