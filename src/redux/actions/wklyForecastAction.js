import { ADD_WEEKLY_FORECAST } from "../actionTypes"

export const addWeeklyForecast = (data)=> {
    return {
        type: ADD_WEEKLY_FORECAST,
        payload:data
    }
     
}