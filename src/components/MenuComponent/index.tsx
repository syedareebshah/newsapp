import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuToggle,
  IonButton,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonRow,
  IonTabButton,
  IonToggle,
} from "@ionic/react";
import React from "react";
import NavLogo from "../../images/PakistanUrduNewsLogoRound.png";
import styles from "./menucomo.module.css";
import { homeSharp, shareSocial, mailSharp } from "ionicons/icons";
import { useHistory } from "react-router";

const MenuComponent: React.FC = () => {
  const history = useHistory();
  const toggleDarkModeHandler = () => document.body.classList.toggle("dark");

  return (
    <IonMenu contentId="main-content">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonImg className={styles.navLogo} src={NavLogo} />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList lines="none">
          <IonMenuToggle>
            <IonTabButton tab="home" href="/home">
              <IonItem
                onClick={() => history.push("/home")}
                className={styles.list}
              >
                <IonRow
                  style={{ width: "100%" }}
                  class="ion-justify-content-between"
                >
                  <IonLabel>Main Page</IonLabel>
                  <IonIcon icon={homeSharp}></IonIcon>
                </IonRow>
              </IonItem>
            </IonTabButton>
          </IonMenuToggle>

          <IonTabButton>
            <IonItem className={styles.list}>
              <IonRow
                style={{ width: "100%" }}
                class="ion-justify-content-between"
              >
                <IonToggle>Notifications</IonToggle>
              </IonRow>
            </IonItem>
          </IonTabButton>
          <IonTabButton>
            <IonItem className={styles.list}>
              <IonRow
                style={{ width: "100%" }}
                class="ion-justify-content-between"
              >
                <IonToggle onIonChange={toggleDarkModeHandler}>
                  Dark Mode
                </IonToggle>
              </IonRow>
            </IonItem>
          </IonTabButton>
          <IonTabButton>
            <IonItem className={styles.list}>
              <IonRow
                style={{ width: "100%" }}
                class="ion-justify-content-between"
              >
                <IonLabel>Share</IonLabel>
                <IonIcon icon={shareSocial}></IonIcon>
              </IonRow>
            </IonItem>
          </IonTabButton>
          <IonTabButton>
            <IonItem className={styles.list}>
              <IonRow
                style={{ width: "100%" }}
                class="ion-justify-content-between"
              >
                <IonLabel>Contact Us</IonLabel>
                <IonIcon icon={mailSharp}></IonIcon>
              </IonRow>
            </IonItem>
          </IonTabButton>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MenuComponent;
