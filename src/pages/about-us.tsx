import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout title="About us">
      <div>
        <p>we are the happiness sticker store.</p>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="About Us" />;
