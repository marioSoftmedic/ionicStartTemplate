import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./styles.css";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

const Home: React.FC = () => {
  GoogleAuth.initialize();

  async function signIn() {
    const user = await GoogleAuth.signIn();

    console.log(user);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hola Mundo 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={signIn}>Logging with Google2</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
