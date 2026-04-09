import Head from "next/head";
import WelcomePage from "@/components/home/WelcomePage/WelcomePage";
import ProjectShowcase from "@/components/home/ProjectShowcase/ProjectShowcase";
import Contact from "@/components/home/Contact/Contact";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <WelcomePage />
        <ProjectShowcase />
        <Contact />
      </main>
    </>
  );
};

export default Home;
