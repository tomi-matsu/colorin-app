import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import Segment from './Segment';

interface HeaderProps {
  // name: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>ホーム</IonTitle>
      </IonToolbar>
      <Segment />
    </IonHeader>
  );
};

export default Header;
