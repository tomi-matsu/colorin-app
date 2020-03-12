import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, heart, person } from 'ionicons/icons';

import HomeContainer from '../container/HomeContainer';
import Favorite from './pages/Favorite';
import Account from './pages/Account';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={HomeContainer} exact={true} />
          <Route path="/favorite" component={Favorite} exact={true} />
          <Route path="/account" component={Account} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>ホーム</IonLabel>
          </IonTabButton>
          <IonTabButton tab="favorite" href="/favorite">
            <IonIcon icon={heart} />
            <IonLabel>お気に入り</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon icon={person} />
            <IonLabel>アカウント</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
