const { axiosInstance } = require('./index');

export const AddMovie = async (payload)=>{
    try {
      const response =await axiosInstance.post('/add-movie', payload);
      return response.data
    } catch (error) {
        return error
    }
}


export const GetAllMovies = async(payload)=>{
    try {
        const response = await axiosInstance.get('get-all-movies', payload)
        return response.data
    } catch (error) {
        return error
    }
}

export const UpdateMovie = async(payload)=>{
    try {
        const response = await axiosInstance.post('/update-movie', payload) ;
        return response.data
    } catch (error) {
        return error
    }


}

export const DeleteMovie = async (payload) => {
    try {
        const response = await axiosInstance.post("/delete-movie", payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

export const GetMovieById = async (id) => {
    try {
        const response = await axiosInstance.get(`/get-movie-by-id/${id}`);
        return response.data;
    } catch (error) {
        return error.response;
    }
}