import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

export class Fab extends React.Component {

  render(){
    return (
      <IonFab vertical="bottom" horizontal="end">
        <IonFabButton color="secondary" routerLink="/registration">
          <IonIcon icon={ add } color="dark" />
        </IonFabButton>
      </IonFab>
    )
  }
};

export default Fab;
