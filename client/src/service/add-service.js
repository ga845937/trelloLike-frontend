import axios from "axios";
const API_URL = "http://192.168.10.20:3000";

export const getToken = async () => {
  const rowToken = await axios.get(API_URL + "/main/login");
  const token = await rowToken.data.data;
  return token;
};

export const taskPost = async (taskName, token) => {
  return await axios.post(
    API_URL + "/list/",
    {
      name: taskName,
    },
    {
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    }
  );
};

export const taskGet = async (token) => {
  return await axios.get(API_URL + "/list/", {
    headers: {
      authorization: token,
    },
  });
};

export const taskDelete = async (id, token) => {
  return await axios.delete(
    API_URL + "/list/",
    {
      params: {
        id: id,
      },
    },
    {
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    }
  );
};
