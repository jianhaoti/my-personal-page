import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Head from "next/head";
import Card from "../components/Card";
import Card2 from "../components/Card2";

const Home: NextPage = () => {
  return (
    <Layout isHome>
      <NextSeo title="Paul's Portfolio" description="My Projects" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
      <Card2 />
    </Layout>
  );
};

export default Home;
