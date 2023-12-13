import customFetcher from "./fetcher";

async function getMovies({ type = "popular", page = 1 }) {
  if (type != "popular" && type != "top_rated" && type != "upcoming") {
    console.log("unsupported type");
    return;
  }

  const res = await customFetcher(`/movie/${type}`, { page });
  const data = await res.json();

  if (!data || !data.results) {
    return [];
  }
  return data.results;
}

async function getMovie({ id }) {
  if (!id) {
    console.log("invalid id");
    return;
  }
  const res = await customFetcher(`/movie/${id}`);
  const data = await res.json();
  return data;
}

async function getCaster({ id }) {
  if (!id) {
    console.log("invalid id");
    return;
  }
  const res = await customFetcher(`/movie/${id}/credits`);
  const data = await res.json();
  return data;
}

export { getMovies, getMovie, getCaster };
