import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CategoryReducer from "./reducers/category.reducer";
import ItemsReducer from "./reducers/items.reducer";
import CartReducer from "./reducers/cart.reducer";
import OrderReducer from "./reducers/order.reducer";
import AuthReducer from "./reducers/auth.reduder";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    items: ItemsReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));