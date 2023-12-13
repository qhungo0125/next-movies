import React from "react";
import Movie from "@/components/movie";
import "./style.scss";

const Movies = (props) => {
  const { movies = [] } = props;
  
  return (
    <div className="slider__item">
      {movies.map((movie) => {
        return <Movie key={movie.id} info={movie} />;
      })}
    </div>
  );
};

export default Movies;
