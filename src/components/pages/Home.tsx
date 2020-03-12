import React from 'react';
import { IonContent, IonPage, withIonLifeCycle } from '@ionic/react';
import Header from '../parts/Header';
// import HomeInner from '../HomeInner';
import Fab from '../parts/Fab';
import { HomeHandler } from '../../container/HomeContainer';

interface OwnProps {
  // title: string
  // inputValue: string
  // onChangeValue: Function
  isFetching: boolean
  items: any[]
}

type Props =  OwnProps & HomeHandler

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
            {/* <HomeInner name="HOME page" /> */}
            <p>{this.props.isFetching}</p>
            {this.props.items.map((item, index) => {
              return <li key={index}>{item['id']}</li>
            })}
            <button onClick={this.props.handleGetItems}>
              Activate Lasers
            </button>
          </IonContent>
          <Fab />
        </IonPage>
      )
  }
}

export default withIonLifeCycle(Home);
