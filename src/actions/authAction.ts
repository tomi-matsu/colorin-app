import firebase from '../firebase'

export const changeEmail = (email: string) => {
  return {
    type: 'change_email',
    payload: email
  };
};

export const changePassword = (password: string) => {
  return {
    type: 'change_password',
    payload: password
  };
};

export const submitLogin = ({ email, password }: {email: string, password: string} ) => {
  return (dispatch: any) => {
    dispatch({ type: 'login_start' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: 'login_success' });
        dispatch({ type: 'login_end' });
      })
      .catch(() => {
        dispatch({ type: 'login_fail' });
        dispatch({ type: 'login_end' });
      });
  }
}