import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../actions/authAction'

export interface authState {
  credential: any,
  googleUser: any,
  lastLogin: Date | null
}

const initialState: authState = {
  credential: null,
  googleUser: null,
  lastLogin: null
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_REQUEST:
      console.log('%c==================reducers/authReducer:AUTH_REQUEST', 'color: red')
      // immutable
      return { ...state,
        googleUser: null,
        isFetching: true
      }
    case AUTH_SUCCESS:
      console.log('%c==================reducers/authReducer: AUTH_SUCCESS', 'color: red')
      // immutable
      return { ...state,
        isFetching: false,
        googleUser: action.googleUser,
        lastLogin: action.receivedAt
      }
    case AUTH_FAILURE:
      console.log('%c==================reducers/authReducer: AUTH_FAILURE', 'color: red')
      // immutable
      return { ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state
  }
}

export default authReducer