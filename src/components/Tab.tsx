import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';

// import './ExploreContainer.css';

interface TabProps {
}

const Tab: React.FC<TabProps> = ({}) => {
  return (
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar slot="top" mode="md" selected-tab="all">
        <IonTabButton tab="all">
          <IonLabel>ALL</IonLabel>
        </IonTabButton>

        <IonTabButton tab="red">
          <IonLabel>赤</IonLabel>
        </IonTabButton>

        <IonTabButton tab="yellow">
          <IonLabel>黄</IonLabel>
        </IonTabButton>

        <IonTabButton tab="green">
          <IonLabel>緑</IonLabel>
        </IonTabButton>

        <IonTabButton tab="blue">
          <IonLabel>青</IonLabel>
        </IonTabButton>

        <IonTabButton tab="brown">
          <IonLabel>茶</IonLabel>
        </IonTabButton>

        <IonTabButton tab="black">
          <IonLabel>黒</IonLabel>
        </IonTabButton>

        <IonTabButton tab="white">
          <IonLabel>白</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tab;
