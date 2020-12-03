import "../styles/main.scss";
import Nav from "../components/navigation";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
