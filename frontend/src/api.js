import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (formdata) => API.post("/api/auth", formdata);
export const signUp = (formdata) => API.post("/api/user", formdata);
export const createTour = (tourData) => API.post("/api/posts", tourData, {
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile"))["token"]}`
    }
});
