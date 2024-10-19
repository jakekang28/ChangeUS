import { instance } from "../utils/index";

export const createUser = async (nickname, sex, userPw) => {
  const url = "/api/users/register";
  try {
    const { data } = await instance.post(url, { nickname, sex, userPw });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (nickname, userPW) => {
  const url = "/api/users/login";
  try {
    const { data } = await instance.post(url, { nickname, userPW });
    return data;
  } catch (error) {
    console.error(error);
  }
};
