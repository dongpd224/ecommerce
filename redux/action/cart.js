export const addItemToCart = (item) =>{
    return{
        type: 'ADD_ITEM',
        payload: item,
    }
}
export const removeCart = () =>{
    return{
        type: 'REMOVE_ALL'
    }
}