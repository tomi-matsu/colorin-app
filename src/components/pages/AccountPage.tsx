import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../parts/Header';
import AccountInner from '../inners/AccountInner';

const Account: React.FC = () => {
  return (
    <IonPage>
      <Header　title={'アカウント'} />
      <IonContent>
        <AccountInner />
      </IonContent>
    </IonPage>
  );
};

export default Account;
