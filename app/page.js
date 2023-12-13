import { getMovies } from "@/libs/api/movies";
import Movies from "@/components/movies";
import "./index.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default async function Home({ searchParams }) {
  console.log(searchParams);
  const page = searchParams ? Number(searchParams.page) : 1;
  const movies = await getMovies({ page });

  return (
    <>
      <Movies movies={movies} />
      <div className="pagination">
        <Link href={`?page=${page > 1 ? page - 1 : 1}`}>Previous</Link>
        <Link href={`?page=${page + 1}`}>Continue</Link>
      </div>
    </>
  );
}
