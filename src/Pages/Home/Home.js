import React, { useEffect } from "react";
import { Col, message, Row, Input} from "antd";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { GetAllMovies } from "../../apicalls/movies";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Home = () => {
  const [searchText = "", setSearchText] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllMovies();
      if (response.success) {
        setMovies(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
      <Input
        style={{ width: "96vw" }}
        type="text"
        className="search-input"
        placeholder="Search for movies"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <h1 className="text-md uppercase mb-2">Currently Showing Movies</h1>

<Row gutter={[20]} className="mt-2">
  {movies
  .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
  .map((movie) => (
    <Col span={6}>
      <div
        className="card flex flex-col gap-3 cursor-pointer"
        onClick={() =>
          navigate(
            `/movie/${movie._id}?date=${moment().format("YYYY-MM-DD")}`
          )
        }
      >
        <img src={movie.poster} alt="" height={200} />

        <div className="flex justify-center p-1">
          <h1 className="text-md uppercase">{movie.title}</h1>
        </div>
      </div>
    </Col>
  ))}
</Row>



</div>
    </div>
  )
}

export default Home