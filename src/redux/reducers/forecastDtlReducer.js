import { ADD_FORECAST_DETAIL } from "../actionTypes";
const initial_state ={
    crrntForecastDtl:null
}

export const forecastDtlReducer =(state=initial_state,action)=>{
    switch(action.type){
        case ADD_FORECAST_DETAIL:{
            return{
                ...state,
                crrntForecastDtl:action.payload
            }
        }
        default:{
            return state;  
        }
    }

}