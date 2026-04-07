import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Template.css';
import React from 'react';      

 const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle>Template</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Template</IonTitle>
            </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  )
}
export default Menu;