import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import './Template.css';
import React from 'react';

const Login: React.FC = () => {

  const navigation = useIonRouter();
  const doLogin = () => {
    navigation.push('/app', 'forward', 'push');
  }
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
            <IonMenuButton slot='start'>
            </IonMenuButton>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonButton expand="full" onClick={doLogin}>Login</IonButton>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Login;