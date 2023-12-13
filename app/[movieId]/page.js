import { getCaster, getMovie } from "@/libs/api/movies";
import React from "react";
import MainDetail from "@/components/movieDetail";

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
