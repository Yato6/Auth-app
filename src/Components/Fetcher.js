import { axiosInstance } from "./Api";

const getToken = () => {
  return "Bearer " + localStorage.getItem("token");
};

export const fetcher = async () => {
  const response = await axiosInstance.get("/users", {
    headers: { authorization: getToken() },
  });

  if (response.statusText !== "OK") {
    const error = new Error();
    error.message = "An error occured while fetching the data...";
    throw error;
  }
  return response.data;
};
