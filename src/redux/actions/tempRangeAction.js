import { ADD_TEMPERATURE_RANGE } from "../actionTypes"

export const addTempDetail = (data)=>{
    return{
        type: ADD_TEMPERATURE_RANGE,
        payload: data

    }
}