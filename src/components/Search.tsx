import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alertActions";
import { GetWeather, setLoading } from "../store/actions/weatherActions";

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city === "") {
      return dispatch(setAlert("City is required"));
    }
    dispatch(setLoading);
    dispatch(GetWeather(city));
    setCity("");
  };

  return (
    <div className="hero is-light has-text-centered">
      <div className="container">
        <h1 className="title">{title}</h1>
        <form onSubmit={handleSubmit} className="py-5">
          <input
            type="text"
            className=" input has-text-centered mb-2"
            placeholder="City name"
            style={{ maxWidth: 300 }}
            value={city}
            onChange={handleChange}
          />
          <button className="button is-primary is-fullWidth" style={{ maxWidth: 300, margin: "0 auto" }}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
