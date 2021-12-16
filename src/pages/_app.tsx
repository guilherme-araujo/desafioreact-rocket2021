import Head from "next/head";

import GlobalStyles from "../styles/global";
//import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CentraLearn</title>
        <meta
          name="description"
          content="CentraLearn - Cursos gratuitos para aspirantes a profissional em tecnologia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
