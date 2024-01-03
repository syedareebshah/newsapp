import { IonCard, IonImg, IonRow, IonTitle } from "@ionic/react";
import { useHistory } from "react-router";

const Card = ({ name, nameTwo, logo }: any) => {
  const history = useHistory();
  return (
    <IonCard
      onClick={(e) => {
        // e.preventDefault();
        history.push(`/newspapers/${name}`);
      }}
    >
      <IonRow class="ion-align-items-center">
        <IonImg
          style={{ height: 100, width: 100 }}
          src={logo}
          alt="newspapers logo"
        />
        <IonTitle>{nameTwo}</IonTitle>
      </IonRow>
    </IonCard>
  );
};
export default Card;
