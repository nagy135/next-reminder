import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/login";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import App from "../components/app";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Reminder</title>
        <meta name="description" content="Reminds about important events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{session ? <Login /> : <App />}</main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
