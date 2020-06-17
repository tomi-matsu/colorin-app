import React from 'react';
import { IonContent, IonPage, withIonLifeCycle } from '@ionic/react';
import Header from '../parts/Header';
// import HomeInner from '../HomeInner';
import Fab from '../parts/Fab';
import { HomeHandler } from '../../container/HomeContainer';

interface HomeProps {
  isFetching: boolean
  items: any[]
}

type Props =  HomeProps & HomeHandler

export class Home extends React.Component<Props> {
  ionViewWillEnter() {
    console.log(this.props)
    console.log('%c==================components/pages/Home', 'color: blue')
    this.props.handleGetItems()
  }

  render(){
      return (
        <IonPage>
          <Header />
          <IonContent>
            {/* <HomeInner name="HOME page" /> */}
            <p>{this.props.isFetching}</p>
            {this.props.items.map((item, index) => {
              return <li key={index}>{item['userId']}</li>
            })}
          </IonContent>
          <Fab />
        </IonPage>
      )
  }
}

export default withIonLifeCycle(Home);
