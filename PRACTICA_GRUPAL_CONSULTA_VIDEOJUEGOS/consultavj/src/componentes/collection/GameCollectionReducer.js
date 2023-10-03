export const GameCollectionReducer = (state = [], action) => {

    if (action.type === "add"){
        return [...state, action.payload];
    } else if (action.type === "delete"){
        return state.filter((game) => game.id !== action.payload);
    } else {
        return ;
    }
};