import { IonPage, useIonRouter } from "@ionic/react";
import React from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router";
import { papers } from "../../pages/NewsPapers/data";
const NewsPaperView = () => {
  const { id } = useParams<any>();
  let res = papers.filter((data: any) => data.key == id);

  return (
    <IonPage>
      <Iframe
        url={res[0].id}
        width="100%"
        height="100%"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </IonPage>
  );
};

export default NewsPaperView;
