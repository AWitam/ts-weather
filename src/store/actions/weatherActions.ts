import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { WeatherAction, WeatherData, GET_WEATHER, SET_LOADING, WeatherError, SET_ERROR } from "../types";

export const GetWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
      console.log(res.json());
      if (!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: WeatherData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
