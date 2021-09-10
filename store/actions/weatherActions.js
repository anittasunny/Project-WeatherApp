import { GET_WEATHER, SET_ERROR } from '../types';
import { openweathermap_api_key } from '../../config.json';

export const getweather = (city,onSucess = () => {}, onError = () => {}) => {
    return async dispatch => {


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap_api_key}`)
      .then((response) => response.json())
      .then((json) => 
            dispatch({
             type: GET_WEATHER,
              payload: json

            })  ,
            onSucess()
      )
      .catch((error) => dispatch(setError(error.message),onerror()))

    }
}

const setError = (err) => {
    return {
        type: SET_ERROR,
        payload:err,
    }
};