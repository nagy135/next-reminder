import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/login";
import styles from "../styles/Home.module.css";
import App from "../components/app";
import { useMockSession } from "../hooks/session-mock";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const { data: session } = useMockSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Reminder</title>
        <meta name="description" content="Reminds about important events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>{!session ? <Login /> : <App />}</Layout>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
