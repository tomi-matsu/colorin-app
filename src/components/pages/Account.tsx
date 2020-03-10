import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../parts/Header';
import HomeWrapper from '../HomeWrapper';

const Account: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <HomeWrapper name="Account 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Account;
