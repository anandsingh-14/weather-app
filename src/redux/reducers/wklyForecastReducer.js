import { ADD_WEEKLY_FORECAST } from "../actionTypes"

const initial_State = {
    upcomingForecast: null
     
}
 export const wklyForecastReducer = (state=initial_State,action)=>{
    switch(action.type){
    case ADD_WEEKLY_FORECAST: {
        return {
      ...state,
      upcomingForecast :action.payload
        }
    }
    default:{
        return state;
    }
    }
     
}