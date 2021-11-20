import { ADD_FORECAST_DETAIL } from "../actionTypes"

export const addForecastDetail = (data)=>{
    return{
        type: ADD_FORECAST_DETAIL,
        payload:data
    }
}