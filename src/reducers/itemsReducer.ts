import {
  GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE
} from '../actions/itemsAction'

export interface State {
  isFetching: boolean,
  items: any[]
}

const initialState: State = {
  isFetching: false,
  items: []
}

const items = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      console.log('reducers/itemsReducer:  GET_ITEMS_REQUEST !!!!!!!!!!!!!!!!')
      // immutable
      return { ...state,
        items: [],
        isFetching: true
      }
    case GET_ITEMS_SUCCESS:
      console.log('reducers/itemsReducer:  GET_ITEMS_SUCCESS !!!!!!!!!!!!!!!!')
      // immutable
      return { ...state,
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      }
    case GET_ITEMS_FAILURE:
      console.log('reducers/itemsReducer:  GET_ITEMS_FAILURE !!!!!!!!!!!!!!!!')
      // immutable
      return { ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}

export default items