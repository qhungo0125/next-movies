import customFetcher from "./fetcher";

async function getMovies(type = "popular") {
  if (type != "popular" && type != "top_rated" && type != "upcoming") {
    console.log("unsupported type");
    return;
  }

  const res = await customFetcher(`/movie/${type}`);
  const data = await res.json();

  if (!data || !data.results) {
    return [];
  }
  return data.results;
}


export { getMovies };
