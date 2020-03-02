import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

const Fab: React.FC = () => (
  <IonFab vertical="bottom" horizontal="end" color="primary">
    <IonFabButton>
      <IonIcon icon={ add } />
    </IonFabButton>
  </IonFab>
);

export default Fab;
