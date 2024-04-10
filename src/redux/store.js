import {combineReducers,createStore} from 'redux'
import reducer from './reducer'

const rootReducer = combineReducers({
    userData: reducer
})

export const store = createStore(rootReducer)