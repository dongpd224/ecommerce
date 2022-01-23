export const addItem = (quantity) =>{
    return{
        type: 'ADD_ITEM',
        payload: quantity,
    }
}
export const removeItem = (quantity) =>{
    return{
        type: 'REMOVE_ITEM',
        payload: quantity,
    }
}