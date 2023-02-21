"use client";
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
  const searchQuery = context.query.movie_name;

  let response;

  if (genre) {
    response = await fetch(
      `https://api.themoviedb.org/3${request[genre]?.url}`
    ).then((res) => res.json());
  } else if (searchQuery) {
    response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${searchQuery}`
    ).then((res) => res.json());
  } else {
    response = await fetch(
      `https://api.themoviedb.org/3${request.fetchTrending.url}`
    ).then((res) => res.json());
  }
  return {
    props: {
      results: response.results,
    },
  };
}
