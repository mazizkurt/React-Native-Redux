import { combineReducers } from "redux";

import noteReducer from "./noteReducer";

let reducers = combineReducers({
    noteReducer:noteReducer
})

const rootReducer = (state,action) => {
    return reducers(state,action)
}

export default rootReducer;