import { ADD_CURRENT_FORECAST } from "../actionTypes"
export const addCurrentForecast = (data) =>{
    return{
        type:ADD_CURRENT_FORECAST,
        payload:data

    }
}

