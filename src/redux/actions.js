import { types } from "./types"

export const AddAction=(number)=>{
    return {
        type: types.ADD,
        payload: number
    }
}
export const ClearAll=()=>{
    return {
        type: types.CLEAR
    }
}