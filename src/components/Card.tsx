import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import { IonCard, IonCardContent, IonIcon } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import './Card.scss';

interface CardProps {
}

const Card: React.FC<CardProps> = () => {
  return (
    <IonCard>
      {/* <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader> */}

      <IonCardContent className="card-wrap">
        <div className="card-content left">
          <div className="color-box first"></div>
          <div className="color-box second"></div>
          <div className="color-box third"></div>
        </div>
        <div className="card-content right">
          <div className="upper">
            <span className="date">2020/02/29</span>
            <IonIcon icon={ heartOutline } className='icon favorite' />
          </div>
          <div className="lower">
            <span className="tag">青</span>
            <span className="tag">赤</span>
            <span className="tag">黄</span>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
