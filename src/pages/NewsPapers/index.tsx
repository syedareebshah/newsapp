import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import MenuComponent from "../../components/MenuComponent";
import Card from "../../components/CustomCard";
import HeaderWithoutTabs from "../../components/Header/Header";
import { papers } from "./data";

const NewsPapers: React.FC = () => {
  return (
    <IonPage id="main-content">
      <HeaderWithoutTabs />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {papers.map((data: any, index: any) => {
              console.log(data.key);
              return (
                <IonCol
                  key={index}
                  sizeXs="12"
                  sizeSm="6"
                  sizeMd="6"
                  sizeLg="6"
                  sizeXl="6"
                >
                  <Card name={data.key} nameTwo={data.name} logo={data.logo} />
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewsPapers;
