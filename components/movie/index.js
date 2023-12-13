import React, { Suspense } from "react";
import "./style.scss";
import Image from "next/image";

const Movie = (props) => {
  const { info } = props;
  return (
      <div className="sub__slider__item">
        <div className="overlay"></div>

        <span>Vote: {info.vote_average.toFixed(1)}</span>
        <Image
          width={100}
          height={100}
          // fill={true}
          // placeholder="blur"
          // blurDataURL=""
          src={`${process.env.API_IMGURL}${info.poster_path}`}
          alt={info.title}
        />

        <div className="sub__title">
          <h4>{info.title}</h4>
          <p>{info.release_date}</p>
        </div>
      </div>
  );
};

export default Movie;
