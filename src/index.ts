import axios from "axios";
export const BASE_MEDIA = `https://briddgyazbucket.s3.amazonaws.com/static`;
export const bmify = (src) => `${BASE_MEDIA}/${src}`;
export const BACKEND_DATE_FORMAT = "YYYY-MM-DD";
export const FRONTEND_DATE_FORMAT = "DD MMM, YYYY";
export const ms_main = axios.create({
  // baseURL: "http://localhost:8002/",
  baseURL: "https://df-nosql-0.herokuapp.com/moderator",
  timeout: 30000,
  headers:{
    Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjE0NDE3MTYsImlhdCI6MTYyMTM1NTMxNiwic3ViIjoiZWRlMjhkNjMtYzhiMC00MDQ4LTkzMTItNDQzZjdmNTNiOGE2In0.no_bUN-EfYf66LYcs-1SCwz5NweDZtAr0yNIqxh3d5g`
  }
});
export const ms_auth = axios.create({
  // baseURL: "http://localhost:8002/",
  baseURL: "https://df-sql-0.herokuapp.com/auth",
  timeout: 30000,
});



// Other Constants

export const PREFERRED_COUNTRIES = ["en"];
