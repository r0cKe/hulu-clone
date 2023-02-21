import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import request from "@/utils/request";
import Results from "@/components/Results";

export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NavBar />
      <Results results={results} />
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const response = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: response.results,
    },
  };
}
