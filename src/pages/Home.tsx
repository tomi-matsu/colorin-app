import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tab from '../components/Tab';
import ExploreContainer from '../components/ExploreContainer';
// import './Tab1.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ホーム</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ホーム</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Tab />
        <ExploreContainer name="HOME page" />
      </IonContent>
    </IonPage>
  )
};

export default Home;
