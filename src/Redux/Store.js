import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { todoReducer } from './reducer.js';

const reducer = combineReducers({
      todo:todoReducer   
})
const middleware = [thunk];
const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default  Store;