import React from 'react';
import { IonContent, IonPage, withIonLifeCycle } from '@ionic/react';
import Header from '../parts/Header';
import HomeInner from '../HomeInner';
import Fab from '../parts/Fab';
import { TopPageHandler } from '../../container/HomeContainer';

interface OwnProps {
  // title: string
  // inputValue: string
  // onChangeValue: Function
  items: { name: string}
}

type Props =  OwnProps & TopPageHandler

export class Home extends React.Component<Props> {
  ionViewWillEnter() {
    console.log('components/pages/Home !!!!!!!!!!!!!!!!')
    this.props.handleGetItems()
  }

  render(){
      return (
        <IonPage>
          <Header />
          <IonContent>
            <HomeInner name="HOME page" />
            <p>{ this.props.items.name }</p>
          </IonContent>
          <Fab />
        </IonPage>
      )
  }
}

export default withIonLifeCycle(Home);
