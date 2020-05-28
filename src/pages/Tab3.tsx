import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC<any> = (props) => {
  useIonViewWillEnter(() => {
    props.setEnabledMenu('tab3-menu');
  });
  return (
    <IonPage>
      <IonMenu disabled={props.enabledMenu !== 'tab3-menu'} contentId="tab3-content" menuId="tab3-menu">Tab 3 Menu</IonMenu>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton menu="tab3-menu" />
          </IonButtons>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="tab3-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
