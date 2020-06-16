import React from 'react';
import { LoginHandler } from '../container/LoginContainer';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  withIonLifeCycle
} from '@ionic/react';
import { auth } from 'firebase/app';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
const { GoogleAuth } = Plugins;

interface LoginProps {
  // {email: string, password}
  // handlelogin: Function;
  // email: string;
  // password: string;
  // handleLogin: ({ email, password }: {email: string, password: string} ) => Function | void;
}
// interface LoginState {}

type Props =  LoginProps & LoginHandler

export class Login extends React.Component<Props> {

  async googleLogin() {
    await Plugins.GoogleAuth.signIn()
      .then(async (googleUser: { authentication: { idToken: any; }; name: any; }) => {
        const credential = auth.GoogleAuthProvider.credential(
          googleUser.authentication.idToken
        );
        console.log(googleUser)
        console.log(credential)
      })
      .catch((error: { code: any; }) => {
        console.log('Googleログイン失敗したーー〜ー');
        console.log(error);
        const code = error.code;
        console.log(code);
      });
  }

  // doLogin() {
  //   const { email, password } = this.props;
  //   this.props.handleLogin({ email, password })
  // }

  // handleEmailChange = (event: any) => {
  //   console.log('hey')
  //   this.setState({email: event.target.value});
  // }

  // handlePasswordChange = (event: any) => {
  //   this.setState({password: event.target.value});
  // }

  render() {
    return (
      <IonPage>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle>LOGIN</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          {/* <IonItem>
            <IonLabel>Email Address</IonLabel>
            <IonInput
              type="email"
              // ref={this.email}
              value={ this.props.email }
              name="email"
              onIonChange={e => this.props.changeEmail(e.detail.value!)}
            />
          </IonItem> */}
          {/* <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput
              type="password"
              // value={this.password}
              // ref={this.password}
              value={ this.props.password }
              name="password"
              onIonChange={e => this.props.changePassword(e.detail.value!)}
            />
          </IonItem> */}
          {/* <IonButton
            expand="full"
            style={{ margin: 14 }}
            onClick={e => {
              if (!e.currentTarget) {
                return;
              }
              e.preventDefault();
              this.doLogin()
            }}
          >
            LOGIN
          </IonButton> */}
          <IonButton
            expand="full"
            style={{ margin: 14 }}
            onClick={e => {
              this.googleLogin()
            }}
          >
            Googleでログイン
          </IonButton>
        </IonContent>
      </IonPage>
    )
  }
}

export default withIonLifeCycle(Login);

