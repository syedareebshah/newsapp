import { IonPage, IonContent } from "@ionic/react";
import "./NotFound.css";
import HeaderWithoutTabs from "../../components/Header/Header";

const NotFoundPage: React.FC = () => {
  return (
    <IonPage id="main-content">
      <HeaderWithoutTabs />

      <IonContent className="ion-text-center" fullscreen>
        <div className="centered">
          <h1>404</h1>
          <h1>Page Not Found</h1>
          <span style={{ fontSize: "100px" }}>&#128533;</span>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default NotFoundPage;
