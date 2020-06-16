import React from 'react';
import { LoginHandler } from '../container/LoginContainer';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  withIonLifeCycle
} from '@ionic/react';

interface LoginProps {}
interface LoginState {}

type Props =  LoginProps & LoginHandler

export class Login extends React.Component<Props> {

  async googleLogin() {
    this.props.googleLogin()
  }

  render() {
    return (
      <IonPage>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle>LOGIN</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
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

