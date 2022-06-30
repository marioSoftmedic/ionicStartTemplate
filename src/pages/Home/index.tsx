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
  // WEB
  // GoogleAuth.initialize({
  //   clientId:
  //     "656892509205-6u4nf3tphb2vk5feknmnvc4e90ncpont.apps.googleusercontent.com",
  //   scopes: ["profile", "email"],
  //   grantOfflineAccess: true,
  // });

  // Android
  GoogleAuth.initialize({
    clientId:
      "656892509205-bh1n3qjetjhoa4cnipegrts720ntb6o4.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    grantOfflineAccess: true,
  });

  async function signIn() {
    console.log(GoogleAuth.signIn());
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hola Mundo 1</IonTitle>
        </IonToolbar>
        “
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
