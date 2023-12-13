import { getMovies } from "@/libs/api/movies";
import Movies from "@/components/movies";
import "./index.scss";
import { Suspense } from "react";

export default async function Home() {
  const movies = await getMovies();

  return (
      <Movies movies={movies} />
  );
}
