import { types } from "../types"

const initial ={
    numbers:[],
    
}
export const listReducer=(state=initial,action)=>{
    switch(action.type){
        case types.ADD:
            let lastNumber = state.numbers[state.numbers.length-1]
            return{...state,numbers: lastNumber!==undefined ?[...state.numbers,action.payload+lastNumber]:[...state.numbers,action.payload]}
        case types.CLEAR:
            return {...state,numbers:[]}
        default:
            return state
    }
}