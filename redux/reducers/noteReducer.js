let defaultState = {
    notes:{items:[],id:''}
}

let noteReducer = (state=defaultState,action) =>{
    switch(action.type){
        case 'ADD_NOTE':
            let newState = {...state};
            newState.notes = {
                items:[...newState.notes.items,action.payload],
                id:action.payload.id 
            }
            return newState;
        default:
            return state;
    }

}
export default noteReducer