import {ADD_CURRENT_FORECAST} from '../actionTypes';
const initial_state ={
    currentWeather:null
}

export const crrntForecastReducer =(state=initial_state,action)=>{
    switch(action.type){
        case ADD_CURRENT_FORECAST:{
            return{
                ...state,
                currentWeather:action.payload
            }
        }
        default:{
            return state;  
        }
    }

}