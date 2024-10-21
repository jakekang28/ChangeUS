import { instance } from "../utils";

// 개인 점수
export const getUserScore = async () => {
  const url = "http://localhost:4003/api/users/userscore";
  try {
    await instance.get(url).then((res)=>{
      
      return res.data[0]
    })
    
    
  } catch (error) {
    console.error(error);
  }
};


