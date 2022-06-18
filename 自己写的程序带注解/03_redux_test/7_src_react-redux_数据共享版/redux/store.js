
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from "redux-thunk";
import countReducer from './reducers/count'
import personReducer from './reducers/person'

// 6. 将 reducers 提供给 Acrion
const allReducer = combineReducers({  // 给 combineReducers 的是一个对象，主要键的命名
    he:countReducer,
    rens:personReducer
})
export default createStore(allReducer, applyMiddleware(thunk))