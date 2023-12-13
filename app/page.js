import { getMovies } from "@/libs/api/movies";
import Movies from "@/components/movies";
import "./index.scss";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home({ searchParams }) {
  const page = searchParams.page ? +searchParams.page : 1;
  const movies = await getMovies({ page });

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Movies movies={movies} />
      </Suspense>
      <div className="pagination">
        <Link href={`?page=${+page > 1 ? +page - 1 : 1}`}>Previous</Link>
        <Link href={`?page=${+page + 1}`}>Continue</Link>
      </div>
    </>
  );
}
