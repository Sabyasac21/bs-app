const { axiosInstance } = require("./index");

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/register", payload);

    return response.data;
  } catch (error) {
    // console.log("boom");
    return error;
  }
};

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/login", payload);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/get-current-user");
    // console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};
