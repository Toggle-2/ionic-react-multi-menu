import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC<any> = (props) => {
  useIonViewWillEnter(() => {
    props.setEnabledMenu('tab1-menu');
  });

  return (
    <IonPage>
      <IonMenu disabled={props.enabledMenu !== 'tab1-menu'} contentId="tab1-content" menuId="tab1-menu">Tab 1 Menu</IonMenu>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton menu="tab1-menu" />
          </IonButtons>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="tab1-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
