import { combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'

let reducers = combineReducers(
    {
        profile: profileReducer,
        messages: messagesReducer
    }
)

let store_redux = createStore(reducers)

export default store_redux