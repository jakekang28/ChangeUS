import { instance } from "../utils";

// 퀴즈 대시보드 리스트
export const getQuizList = async () => {
  const url = "/api/quiz/data";
  try {
    const { data } = await instance.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 퀴즈
export const getQuizDetail = async (params) => {};
