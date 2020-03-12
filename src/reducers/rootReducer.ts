import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'

const rootReducer = combineReducers({
  itemsState: itemsReducer
})

export default rootReducer