import React from "react";
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
import moment from "moment";
import { useSelector } from "react-redux";
import NewsCard from "../../components/NewsCard";
import { reducerState } from "../../models/types";

const SavedNews: React.FC = () => {
  const saveNews = useSelector((state: reducerState) => state.user?.saveNews);
  const channels = useSelector((state: reducerState) => state.app?.channels);

  return (
    <IonPage id="main-content">
      <HeaderWithoutTabs />
      <IonContent fullscreen>
        {saveNews.length < 1 ? (
          <IonGrid
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IonRow>
              <IonCol>
                <IonText
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  No Saved News found
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        ) : (
          <IonGrid>
            <IonRow>
              {saveNews.map((data: any, index: any) => (
                <IonCol
                  key={index}
                  sizeXs="12"
                  sizeSm="6"
                  sizeMd="4"
                  sizeLg="4"
                  sizeXl="3"
                >
                  <NewsCard
                    image={data.image}
                    title={data.title}
                    channelLogo={channels[data.source]?.image}
                    shortSummary={data.shortSummary}
                    time={moment(data?.updatedAt).fromNow()}
                    channelName={channels[data?.source]?.name}
                    news={data}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default SavedNews;
