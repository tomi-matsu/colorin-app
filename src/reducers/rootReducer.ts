import { combineReducers } from 'redux'
import itemsReducer, { ItemsState } from './itemsReducer'

export interface State {
  itemsState: ItemsState
}

const rootReducer = combineReducers({
  itemsState: itemsReducer
})

export default rootReducer