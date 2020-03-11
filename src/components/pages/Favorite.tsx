import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../parts/Header';
import HomeInner from '../HomeInner';

const Favorite: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <HomeInner name="Favorite page" />
      </IonContent>
    </IonPage>
  );
};

export default Favorite;
