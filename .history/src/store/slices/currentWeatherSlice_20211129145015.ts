import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather } from "../types/types";


type CurrentWeather = {
    weather: Weather;
    isLoading: Boolean;
    response: Response;
}

type Response = {
    status: number;
    message: string;
};

const initialState: CurrentWeather = {
    weather: {
        main: {
            temp:0,
        };
    },
    isLoading: false,
    Response: {
        status: 0,
        message: '',
    },
};

export const CurrentWeatherSlice = createSlice( {
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
           state.weather = action.payload.data;
           state.isLoading = false;
           state.Response = {
            status: action.payload.status,
            message: action.payload.statusText,
           };
        },
        
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
           state.isLoading = false;
           state.Response = {
            status: action.payload.status,
            message: action.payload.statusText,
           };
        },
    },

});


export default CurrentWeatherSlice.reducer;
