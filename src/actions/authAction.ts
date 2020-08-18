import { User } from 'firebase/app'
import { cfaSignIn } from 'capacitor-firebase-auth';

// リクエスト開始時
export const AUTH_REQUEST = 'AUTH_REQUEST'
const authRequest = () => {
  return {
    type: AUTH_REQUEST
  }
}

// リクエスト成功時
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
const authSuccess = (data: any) => {
  return {
    type: AUTH_SUCCESS,
    googleUser: data,
    receivedAt: Date.now()
  }
}

// リクエスト失敗時
export const AUTH_FAILURE = 'AUTH_FAILURE'
const authFailure = (error: { code: any; }) => {
  return {
    type: AUTH_FAILURE,
    error
  }
}

export const googleLogin = (): Function => {
  console.log('%c==================actions/authActions: googleLogin', 'color: red')
  return (dispatch: any) => {
    dispatch(authRequest())
    let googleUser: {
      displayName: String | null,
      email: String | null,
      photoURL: String | null,
      refreshToken: String | null,
      uid: String | null
    }
    cfaSignIn('google.com').subscribe(
      (user: User) => {
        googleUser = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          refreshToken: user.refreshToken,
          uid: user.uid
        }
        dispatch(authSuccess(googleUser))
      }
    )
  }
}
