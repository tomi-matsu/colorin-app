import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import { IonCard, IonCardContent, IonIcon, withIonLifeCycle } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import './Card.scss';

interface CardProps {
  item: {
    id: null,
    colors: { first: string, second: string, third: string },
    text: string,
    image: string,
    tags: string[],
    createdAt: { seconds: number, nanosecinds: number }
  }
}

// type Props =  CardProps

export class Card extends React.Component<CardProps> {
  ionViewWillEnter() {
    console.log('%c==================components/parts/Card', 'color: blue')
    console.log(this.props.item)
  }

  render(){
    let firstColor = {
      backgroundColor: this.props.item.colors.first
    };
    let secondColor = {
      backgroundColor: this.props.item.colors.second
    };
    let thirdColor = {
      backgroundColor: this.props.item.colors.third
    };
    let dateTime = new Date(this.props.item.createdAt.seconds * 1000);

    return (
      <IonCard>
        <IonCardContent className="card">
          <div className="card__left-content">
            <div className="card__color-box" style={firstColor}></div>
            <div className="card__color-box" style={secondColor}></div>
            <div className="card__color-box" style={thirdColor}></div>
          </div>
          <div className="card__right-content">
            <div className="card__right-content-upper">
              <span className="card__date">{dateTime.toLocaleDateString()}</span>
              <IonIcon icon={ heartOutline } className='icon' color="primary" />
            </div>
            <div className="card__right-content-lower">
              <span className="card__tag">{this.props.item.tags[0]}</span>
              <span className="card__tag">{this.props.item.tags[1]}</span>
              <span className="card__tag">{this.props.item.tags[2]}</span>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    );
  }
}

export default withIonLifeCycle(Card);
