import type { NextPage } from "next";
import App from "../components/app";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <App />
    </Layout>
  );
};

export default Home;
