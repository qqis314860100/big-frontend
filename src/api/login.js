import axios from "axios";
const getCode = async () => {
  try {
    const result = await axios.get("/getCaptcha");
    if (result.status === 200 && result.data) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getCode };
