import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions/itemsAction'

export interface ItemsState {
  isFetching: boolean,
  items: []
}

const initialState: ItemsState = {
  isFetching: false,
  items: []
}

const itemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      console.log('%c==================reducers/itemsReducer: GET_ITEMS_REQUEST', 'color: red')
      // immutable
      return { ...state,
        items: [],
        isFetching: true
      }
    case GET_ITEMS_SUCCESS:
      console.log('%c==================reducers/itemsReducer: GET_ITEMS_SUCCESS', 'color: red')
      // immutable
      return { ...state,
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      }
    case GET_ITEMS_FAILURE:
      console.log('%c==================reducers/itemsReducer: GET_ITEMS_FAILURE', 'color: red')
      // immutable
      return { ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state
  }
}

export default itemsReducer