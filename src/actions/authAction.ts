import firebase from '../firebase'
// import '@codetrix-studio/capacitor-google-auth';
// import { Plugins } from '@capacitor/core';
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
    // const googleUser: any = {}
    cfaSignIn('google.com').subscribe(
      (user: User) => console.log(user.displayName)
    )
    // Plugins.GoogleAuth.signIn()
    //   .then(async (googleUser: { authentication: { idToken: any; }; name: any; }) => {
    //     googleUser = googleUser
    //     console.log('%c==================actions/authActions: auth success', 'color: red')
    //     console.log(googleUser)
    //     const credential = Plugins.GoogleAuthProvider.credential(googleUser.authentication.idToken);
    //     console.log(credential)
    //     // firebase.auth().onAuthStateChanged(function(user) {
    //     //   if (user) {
    //     //     console.log(user)
    //     //     // User is signed in.
    //     //   } else {
    //     //     // No user is signed in.
    //     //   }
    //     // });
    //     dispatch(authSuccess(googleUser))
    //   }).catch((error: { code: any; }) => {
    //     console.log('%c==================actions/authActions: auth error', 'color: red')
    //     dispatch(authFailure(error))
    //   })
  }
}
