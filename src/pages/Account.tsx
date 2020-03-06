import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomeContainer from '../components/HomeContainer';
import './Tab1.css';

const Account: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <HomeContainer name="Account 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Account;
