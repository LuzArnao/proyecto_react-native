import { ITEMS } from "../../data/items";
import { SELECTED_ITEM, FILTERED_ITEM } from "../actions/item.action";

const initialState = {
    items: ITEMS,
    filteredItem: [],
    selected: null,
};

const ItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_ITEM:
            return {
                ...state,
                selected: state.items.find((item) => item.id === action.itemID),
            }
        case FILTERED_ITEM: 
            return {
                ...state,
                filteredItem: state.items.filter(
                    (item) => item.category === action.categoryID
                ),
            };
        default:
            return state;
    }
};

export default ItemsReducer;