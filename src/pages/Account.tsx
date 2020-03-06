import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import HomeContainer from '../components/HomeContainer';
import './Tab1.css';

const Account: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <HomeContainer name="Account 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Account;
