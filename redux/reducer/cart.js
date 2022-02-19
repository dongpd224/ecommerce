import * as t from '../types'
const initState = {
    cart: []
}
const removeItem = (item) =>{
  return initState.cart.find(x => x.id === item.id).foo
}
const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case t.ADD_ITEM: {
            return{
                ...state,
                cart: [...state.cart,action.payload]
            }
            break;
        }
        case t.REMOVE_ALL:{
            return initState
        }
        case t.SHOW_CART: {
            return{
                ...state
            }
            break;
        }
        default:
            return state;
    }
}
export default cartReducer