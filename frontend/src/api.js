import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (formdata) => API.post("/api/auth", formdata);
export const signUp = (formdata) => API.post("/api/user", formdata);
export const createTour = (tourData) =>
  API.post("/api/posts", tourData, {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("profile"))["token"]
      }`,
    },
  });
export const getTours = () => API.get("api/posts");
export const getTour = (id) => API.get(`/api/posts/${id}`);
export const getTourByUser = (userId) =>
  API.get(`/api/posts/user_posts`, {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("profile"))["token"]
      }`,
    },
  });
export const deleteTour = (id) =>
  API.delete(`/api/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("profile"))["token"]
      }`,
    },
  });
