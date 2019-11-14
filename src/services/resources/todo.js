import axios from "../index";

export const getTodoList = async () => {
  try {
    const { data } = await axios.get("/todo");
    return data;
  } catch (error) {
    throw error;
  }
};
