import axios from "axios";

const {
  REACT_APP_THEMOVIEDB_API_URL,
  REACT_APP_THEMOVIEDB_API_KEY,
  REACT_APP_THEMOVIEDB_IMAGES_URL,
} = process.env;

const params = {
  language: "en-US",
  page: "1",
  api_key: REACT_APP_THEMOVIEDB_API_KEY,
};

const getTopRatedList = async (type: string) => {
  const urlType = pruralToSingular(type);

  const options = {
    method: "GET",
    url: `${REACT_APP_THEMOVIEDB_API_URL}${urlType}/top_rated`,
    params,
    headers: {
      accept: "application/json",
    },
  };
  const response = await axiosRequest(options);

  return response?.results.slice(0,10);
};

const getSearchResults = async (type: string, searchText: string) => {
  const urlType = pruralToSingular(type);
  const options = {
    method: "GET",
    url: `${REACT_APP_THEMOVIEDB_API_URL}search/${urlType}`,
    params: { ...params, query: searchText },
    headers: {
      accept: "application/json",
    },
  };
  const response = await axiosRequest(options);
  return response?.results;
};

const getDetailedViewData = async (id: any, type: string) => {
  const urlType = pruralToSingular(type);
  const options = {
    method: "GET",
    url: `${REACT_APP_THEMOVIEDB_API_URL}${urlType}/${id}?append_to_response=videos`,
    params,
    headers: {
      accept: "application/json",
    },
  };
  return await axiosRequest(options);
};

const axiosRequest = async (options: any) => {
  const response: any = await axios
    .request(options)
    .catch((err) => console.error("Failed to fetch top rated: ", err.message));
  return response.data;
};

const pruralToSingular = (type: string) => {
  return type === "movies" ? "movie" : "tv";
};

export { getTopRatedList, getSearchResults, getDetailedViewData };
