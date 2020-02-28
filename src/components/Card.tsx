import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import './Card.scss';

interface CardProps {
}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <IonCard>
      {/* <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader> */}

      <IonCardContent mode="md" className="card-wrap">
        <div className="left">aaa</div>
        <div className="right">aaa</div>
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
