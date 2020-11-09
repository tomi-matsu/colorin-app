import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

interface HeaderProps {
  title: string
}

export class Header extends React.Component<HeaderProps> {
  public static defaultProps: HeaderProps = {
    title: ''
  };

  render(){
    return (
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>{this.props.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  }
};

export default Header;
