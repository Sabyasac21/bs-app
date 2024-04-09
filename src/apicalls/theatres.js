import { axiosInstance } from ".";

export const AddTheatre = async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/add-theatre",
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const DeleteTheatre = async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/delete-theatre",
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };


export const GetAllTheatresByOwner = async (payload) => {
try {
    const response = await axiosInstance.post(
    "/get-all-theatres-by-owner",
    payload
    );
    return response.data;
} catch (error) {
    return error.response;
}
};

export const UpdateTheatre = async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/update-theatre",
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };


  export const GetAllTheatres = async () => {
    try {
      const response = await axiosInstance.get("/get-all-theatres");
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const AddShow = async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/add-show",
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const GetAllShowsByTheatre = async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/get-all-shows-by-theatre",
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const DeleteShow = async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/delete-show",
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  export const GetAllTheatresByMovie = async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/get-all-theatres-by-movie",
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

  