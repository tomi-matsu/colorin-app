import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../parts/Header';
import HomeWrapper from '../HomeWrapper';

const Favorite: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <HomeWrapper name="Favorite page" />
      </IonContent>
    </IonPage>
  );
};

export default Favorite;
