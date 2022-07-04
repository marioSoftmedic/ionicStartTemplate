import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import "./styles.css";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { isPlatform } from "@ionic/react";
import {
  SignInWithApple,
  SignInWithAppleResponse,
  SignInWithAppleOptions,
} from "@capacitor-community/apple-sign-in";
import { logoApple, logoGoogle } from "ionicons/icons";

const ANDROID = isPlatform("android");
const IOS = isPlatform("ios");
const DESKTOP = isPlatform("desktop");

const Home: React.FC = () => {
  GoogleAuth.initialize();

  async function signIn() {
    const user = await GoogleAuth.signIn();

    console.log(user);
  }
  async function signInWithApple() {
    let options: SignInWithAppleOptions = {
      clientId: "com.your.webservice",
      redirectURI: "https://www.yourfrontend.com/login",
      scopes: "email name",
      state: "12345",
      nonce: "nonce",
    };
    SignInWithApple.authorize(options)
      .then((result: SignInWithAppleResponse) => {
        // Handle user information
        // Validate token with server and create new session
        console.log("hola");
      })
      .catch((error) => {
        // Handle error
        console.log("errores");
      });
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
        {IOS && (
          <IonButton onClick={signInWithApple}>
            <IonIcon icon={logoApple}></IonIcon> Login with APPLE
          </IonButton>
        )}

        {ANDROID && (
          <IonButton expand="block" onClick={signIn}>
            <IonIcon icon={logoGoogle}></IonIcon> Login with Google
          </IonButton>
        )}
        {DESKTOP && (
          <IonButton expand="block" onClick={signIn}>
            <IonIcon slot="start" icon={logoGoogle}></IonIcon> Login with Google
          </IonButton>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
