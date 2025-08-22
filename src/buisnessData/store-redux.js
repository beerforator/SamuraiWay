import { combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import friendsReducer from './friendsReducer'

let reducers = combineReducers(
    {
        profile: profileReducer,
        messages: messagesReducer,
        friends: friendsReducer
    }
)

let store_redux = createStore(reducers)

export default store_redux