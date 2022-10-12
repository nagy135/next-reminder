import Head from "next/head";
import React from "react";
import { useMockSession } from "../hooks/session-mock";
import Login from "./login";
import styles from "../styles/Home.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ILayout {
  children?: JSX.Element;
}

const queryClient = new QueryClient();

const Layout: React.FC<ILayout> = ({ children }) => {
  const { data: session } = useMockSession();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/daisyui@2.17.0/dist/full.css"
            rel="stylesheet"
            type="text/css"
          />
          <script src="https://cdn.tailwindcss.com" defer></script>
          <title>Reminder</title>
          <meta
            name="description"
            content="Reminds you about stuff you forget!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>{!session ? <Login /> : children}</main>
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
