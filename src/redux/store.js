import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import filter from './reducers/filter'
import sushi from './reducers/sushi'
import cart from './reducers/cart'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
  filter,
  sushi,
  cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);


export default store