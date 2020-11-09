import React from 'react';
import { cfaSignOut } from 'capacitor-firebase-auth';
import { IonContent, IonPage, withIonLifeCycle, IonButton } from '@ionic/react';
import Header from '../parts/Header';
import HomeInner from '../inners/HomeInner';
import Fab from '../parts/Fab';
import { HomeHandler } from '../../container/HomeContainer';
import Segment from '../parts/Segment';

interface HomeProps {
  isFetching: boolean
  items: any[]
}

type Props =  HomeProps & HomeHandler

export class Home extends React.Component<Props> {
  ionViewWillEnter() {
    console.log(this.props)
    console.log('%c==================components/pages/Home', 'color: blue')
    // TODO: コメントアウト解除すること
    this.props.handleGetItems()
  }

  signOut() {
    cfaSignOut().subscribe()
  }

  render(){
    // if (this.props.items) {
      return (
        <IonPage>
          <Header title={'ホーム'} />
          <Segment />
          <IonContent>
            <HomeInner items={this.props.items} />
          </IonContent>
          <Fab />
        </IonPage>
      )
    // } else {
    //   return (
    //     <IonPage>
    //       <Header />
    //       <Fab />
    //     </IonPage>
    //   )
    // }

  }
}

export default withIonLifeCycle(Home);
