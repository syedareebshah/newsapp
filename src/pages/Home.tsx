import { IonPage } from "@ionic/react";
import "./Home.css";
import MenuComp from "../components/Menu";

const Home: React.FC = () => {
  return (
    <IonPage>
      <MenuComp />
    </IonPage>
  );
};

export default Home;
