import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC<any> = (props) => {
  useIonViewWillEnter(() => {
    props.setEnabledMenu('tab2-menu');
  });
  return (
    <IonPage>
      <IonMenu disabled={props.enabledMenu !== 'tab2-menu'} contentId="tab2-content" menuId="tab2-menu">Tab 2 Menu</IonMenu>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton menu="tab2-menu" />
          </IonButtons>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="tab2-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
