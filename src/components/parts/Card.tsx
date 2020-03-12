import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import { IonCard, IonCardContent, IonIcon, withIonLifeCycle } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import './Card.scss';

interface CardProps {
}

export class Card extends React.Component {
  ionViewWillEnter() {
    console.log('%c==================components/parts/Card', 'color: blue')
  }

  render(){
    return (
      <IonCard>
        <IonCardContent className="card">
          <div className="card__left-content">
            <div className="card__color-box first"></div>
            <div className="card__color-box second"></div>
            <div className="card__color-box third"></div>
          </div>
          <div className="card__right-content">
            <div className="card__right-content-upper">
              <span className="card__date">2020/02/29</span>
              <IonIcon icon={ heartOutline } className='icon' color="primary" />
            </div>
            <div className="card__right-content-lower">
              <span className="card__tag">青</span>
              <span className="card__tag">赤</span>
              <span className="card__tag">黄</span>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    );
  }
}

export default withIonLifeCycle(Card);
