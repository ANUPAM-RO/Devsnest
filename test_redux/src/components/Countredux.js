import { combineReducers } from "redux";

const Countereducer = (state=0, action )=>{
    if(action.type === "INCREMENT"){
        state += 1
    }else if(action.type === "DECREMENT"){
        state -= 1
    }
    return state;
}

    const combreducer = combineReducers({
        allcounter: Countereducer
    })
    export default combreducer;
