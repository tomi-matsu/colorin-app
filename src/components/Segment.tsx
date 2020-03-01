import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel, IonIcon, IonToolbar, IonContent } from '@ionic/react';

interface SegmentProps {
}

const Segment: React.FC<SegmentProps> = () => {
  return (
    <IonSegment scrollable value="all">
      <IonSegmentButton value="all">
        <IonLabel>すべて</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="red">
        <IonLabel>赤</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="yellow">
        <IonLabel>黄</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="green">
        <IonLabel>緑</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="blue">
        <IonLabel>青</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="brown">
        <IonLabel>茶</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="black">
        <IonLabel>黒</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="white">
        <IonLabel>白</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default Segment;
