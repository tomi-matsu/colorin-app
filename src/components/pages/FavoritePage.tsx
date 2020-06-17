import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../parts/Header';
import HomeInner from '../inners/HomeInner';

const Favorite: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <HomeInner />
      </IonContent>
    </IonPage>
  );
};

export default Favorite;
