import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';

const Fab: React.FC = () => (
  <IonFab vertical="bottom" horizontal="end" color="primary">
    <IonFabButton>
      <IonIcon name="add" />
    </IonFabButton>
  </IonFab>
);

export default Fab;
