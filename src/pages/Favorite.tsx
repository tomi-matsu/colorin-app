import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomeContainer from '../components/HomeContainer';
import './Tab1.css';

const Favorite: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorite</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <HomeContainer name="Favorite page" />
      </IonContent>
    </IonPage>
  );
};

export default Favorite;
