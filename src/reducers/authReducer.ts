import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../actions/authAction'
import firebase from '../firebase'

export interface authState {
  googleUser: {
    displayName: String | null,
    email: String | null,
    photoURL: String | null,
    refreshToken: String | null,
    uid: String | null
  },
  isFetching: boolean,
  lastLogin: Date | null,
  isLogin: boolean
}

const initialState: authState = {
  googleUser: {
    displayName: null,
    email: null,
    photoURL: null,
    refreshToken: null,
    uid: null
  },
  isFetching: false,
  lastLogin: null,
  isLogin: false
}

const authReducer = (state = initialState, action: any) => {
  // let user = firebase.auth().currentUser;
  // console.log('authReducer:user', user)
  switch (action.type) {
    case AUTH_REQUEST:
      console.log('%c==================reducers/authReducer:AUTH_REQUEST', 'color: red')
      // immutable
      return { ...state,
        googleUser: null,
        isFetching: true,
        isLogin: false
      }
    case AUTH_SUCCESS:
      console.log('%c==================reducers/authReducer: AUTH_SUCCESS', 'color: red')
      // immutable
      return { ...state,
        isFetching: false,
        googleUser: action.googleUser,
        lastLogin: action.receivedAt,
        isLogin: true
      }
    case AUTH_FAILURE:
      console.log('%c==================reducers/authReducer: AUTH_FAILURE', 'color: red')
      // immutable
      return { ...state,
        error: action.error,
        isFetching: false,
        isLogin: false
      }
    default:
      return state
  }
}

export default authReducer