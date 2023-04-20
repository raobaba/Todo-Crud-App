import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { tabReducer, todosReducer } from './reducer.js';

const reducer = combineReducers({
      todos:todosReducer,
      currentTab:tabReducer   
})
const middleware = [thunk];
const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default  Store;