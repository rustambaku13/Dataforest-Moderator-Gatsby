import { ms_auth } from ".";

export const loginUser = async ({ email, password }) => {
  return await ms_auth.post("/moderator-login", { email, password });
};
export const getLoggenInUser = async (token) => {
  return await ms_auth.get("/user-info",{headers:{Authorization:`Bearer ${token}`}});
};
