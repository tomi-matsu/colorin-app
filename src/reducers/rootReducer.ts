import { combineReducers } from 'redux'
import itemsReducer, { ItemsState } from './itemsReducer'
import authReducer, { authState } from './authReducer'

export interface State {
  itemsState: ItemsState,
  authState: authState
}

const rootReducer = combineReducers({
  itemsState: itemsReducer,
  authState: authReducer
})

export default rootReducer