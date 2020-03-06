import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import HomeContainer from '../components/HomeContainer';
import Fab from '../components/Fab';

// import './Tab1.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <HomeContainer name="HOME page" />
      </IonContent>
      <Fab />
    </IonPage>
  )
};

export default Home;
