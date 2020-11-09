import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../parts/Header';
import AccountInner from '../inners/AccountInner';

interface AccountProps {
  googleUser: {
    displayName: string,
    email: string,
    photoURL: string,
    refreshToken: string,
    uid: string
  }
}

export class Account extends React.Component<AccountProps> {
  render() {
    return (
      <IonPage>
        <Header　title={'アカウント'} />
        <IonContent>
          <AccountInner googleUser={this.props.googleUser}/>
        </IonContent>
      </IonPage>
    );
  }
};

export default Account;
