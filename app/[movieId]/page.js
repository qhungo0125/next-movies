import { getCaster, getMovie, getMovies } from "@/libs/api/movies";
import React from "react";
import MainDetail from "@/components/movieDetail";

export async function generateStaticParams() {
  const moviesPages = await Promise.all([
    getMovies({ page: 1 }),
    getMovies({ page: 2 }),
    getMovies({ page: 3 }),
  ]);

  const listMovieId = [];

  moviesPages.forEach((movies) => {
    return movies.forEach((movie) => {
      listMovieId.push(movie.id.toString());
    });
  });

  return listMovieId;
}

const MoviePage = async ({ params }) => {
  const [data, casters] = await Promise.all([
    getMovie({ id: params.movieId }),
    getCaster({ id: params.movieId }),
  ]);

  // console.log(data);

  console.log(casters);

  // if(!data || !data.sccuess ){
  //   return NotFound();
  // }

  return <MainDetail info={data} casters={casters.cast} />;
};

export default MoviePage;
