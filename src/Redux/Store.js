import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
const middleware = [thunk];
const reducer = combineReducers({

})

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default  Store;