import React from 'react';
import { IonContent, IonPage, withIonLifeCycle } from '@ionic/react';
import Header from '../parts/Header';
import HomeWrapper from '../HomeWrapper';
import Fab from '../parts/Fab';
import { TopPageHandler } from '../../container/TopPageContainer';

interface OwnProps {
  // title: string
  // inputValue: string
  // onChangeValue: Function
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
            <HomeWrapper name="HOME page" />
          </IonContent>
          <Fab />
        </IonPage>
      )
  }
}

export default withIonLifeCycle(Home);
