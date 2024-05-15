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

const getTopRatedList = async (type: string): Promise<any> => {
  const urlType = pruralToSingular(type);
  const options = {
    method: "GET",
    url: `${REACT_APP_THEMOVIEDB_API_URL}${urlType}/top_rated`,
    params,
    headers: {
      accept: "application/json",
    },
  };
  return axiosRequest(options);
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
  return axiosRequest(options);
};

const getDetailedViewData = async (id: number, type: string) => {
  const urlType = pruralToSingular(type);
  const options = {
    method: "GET",
    url: `${REACT_APP_THEMOVIEDB_API_URL}${urlType}/top_rated`,
    params,
    headers: {
      accept: "application/json",
    },
  };
  return axiosRequest(options);
};

export { getTopRatedList, getSearchResults, getDetailedViewData };

//helper fucntions
const axiosRequest = async (options: any) => {
  const response = await axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("Response: ", err);
    });
};

const pruralToSingular = async (type: string) => {
  return type === "movies" ? "movie" : "tv";
};
