import * as t from '../types'
const quantityReducer = (state = 0, action) =>{
    switch (action.type){
        case t.ADD_ITEM:{
            return state + 1
            break;
        }
        case t.REMOVE_ITEM:{
            return state -1
            break;
        }
        default:    
            return state;
    }
}
export default quantityReducer