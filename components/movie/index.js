import React, { Suspense } from "react";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";

const Movie = (props) => {
  const { info } = props;
  return (
    <Link className="sub__slider__item" href={`/${info.id}`}>
        <div className="overlay"></div>
        <span>Vote: {info.vote_average.toFixed(1)}</span>
        <Image
          unoptimized
          width={100}
          height={100}
          src={`${process.env.API_IMGURL}${info.poster_path}`}
          alt={info.title}
        />

        <div className="sub__title">
          <h4>{info.title}</h4>
          <p>{info.release_date}</p>
        </div>
    </Link>
  );
};

export default Movie;
