import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../parts/Header';
import HomeInner from '../HomeInner';

const Account: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <HomeInner name="Account 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Account;
