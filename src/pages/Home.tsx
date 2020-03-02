import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Segment from '../components/Segment';
import ExploreContainer from '../components/ExploreContainer';
import Fab from '../components/Fab';

// import './Tab1.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>ホーム</IonTitle>
        </IonToolbar>
        <Segment />
      </IonHeader>
      <IonContent>
        <ExploreContainer name="HOME page" />
      </IonContent>
      <Fab />
    </IonPage>
  )
};

export default Home;
