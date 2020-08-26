import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>ホーム</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
