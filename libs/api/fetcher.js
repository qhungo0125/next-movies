const customFetcher = async (url, options) => {
  let pageQuery;
  let others = options;
  if (options) {
    const { page, ...othersOpts } = options;
    pageQuery = page;
    others = othersOpts;
  }

  let completedUrl = `${process.env.API_ENDPOINT}${url}?api_key=${process.env.API_APIKEY}`;
  if (pageQuery) {
    completedUrl += `&page=${pageQuery}`;
  }
  // console.log(completedUrl);
  return await fetch(completedUrl, others);
};

export default customFetcher;
