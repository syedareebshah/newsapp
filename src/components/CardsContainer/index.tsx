import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import React, { useCallback, useEffect, useState } from "react";
import { saveSharp, saveOutline } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../models/types";
import moment from "moment";
import styles from "./cards.module.css";
import { onExpandNews } from "../../store/slice/appSlice";
import { saveNewsResponse } from "../../store/slice/userSlice";
import NewsCard from "../NewsCard";

const CardsContainer = ({ news, loader }: any) => {
  const channels = useSelector((state: reducerState) => state.app?.channels);
  let cards = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2];

  return (
    <IonGrid>
      <IonRow>
        {loader == true ? (
          cards.map((data, index) => {
            return (
              <IonCol
                key={index}
                sizeXs="12"
                sizeSm="6"
                sizeMd="4"
                sizeLg="4"
                sizeXl="3"
              >
                <IonCard>
                  <div
                    style={{
                      height: 250,
                      backgroundColor:
                        "var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)))",
                    }}
                  />
                </IonCard>
              </IonCol>
            );
          })
        ) : news == null || news?.length < 1 ? (
          <IonGrid
            style={{
              height: "30vh",
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
                  No News found
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        ) : (
          news.map((data: any, index: any) => {
            return (
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
            );
          })
        )}
      </IonRow>
    </IonGrid>
  );
};

export default CardsContainer;
