const customFetcher = async (url, options) => {
  const completedUrl = `${process.env.API_ENDPOINT}${url}?api_key=${process.env.API_APIKEY}`
  console.log(completedUrl);
  return await fetch(completedUrl, options);
}

export default customFetcher;