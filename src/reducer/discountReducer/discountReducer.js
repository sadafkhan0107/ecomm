export const discountReducer =(state,{type,payload}) =>{
switch(type){
    case "discount" : 
     return {...state, discount: payload};
    default:
        return state;
}
}