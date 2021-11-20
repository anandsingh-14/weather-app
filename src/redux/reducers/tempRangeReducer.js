import { ADD_TEMPERATURE_RANGE } from "../actionTypes"

const initial_state = {
    temp:null
}

export const tempRangeReducer = (state = initial_state, action)=>{
    switch (action.type){
        case ADD_TEMPERATURE_RANGE:{
            return {
                ...state,
                temp: action.payload
            }
        }
      default: {
          return state;
          
      }
    }
    

}