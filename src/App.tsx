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

// import Home from './components/pages/Home';
import HomeContainer from './container/HomeContainer';
import Favorite from './components/pages/Favorite';
import Account from './components/pages/Account';

import './App.scss';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// /* firebase */
// import firebase, { db } from './firebase';

// const items = db.collection("items").doc("iAHl8KwVQt7SLHiuMgqv");
// items.get().then((doc) => {
//   if (doc.exists) {
//     console.log("Document data:", doc.data());
//     this.props.handleItemsGet(doc.data())
//   } else {
//     console.log("No such document!");
//   }
// }).catch((error) => {
//   console.log("Error getting document:", error);
// });

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
