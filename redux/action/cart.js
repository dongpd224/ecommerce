export const addItemToCart = (item) =>{
    return{
        type: 'ADD_ITEM',
        payload: item,
    }
}
export const removeItemToCart = (item) =>{
    return{
        type: 'REMOVE_ITEM',
        payload: item,
    }
}