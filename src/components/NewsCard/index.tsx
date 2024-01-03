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
import { useToast } from "../../hooks/useToast";
import noImage from "../../images/no-image.png";
import { isPlatform } from "@ionic/react";

const NewsCard = ({
  news,
  loader,
  image,
  title,
  channelLogo,
  shortSummary,
  time,
  //   isNewsSaved,
  channelName,
}: any) => {
  //   const channels = useSelector((state: reducerState) => state.app?.channels);
  const dispatch = useDispatch();
  const { presentToast } = useToast();
  const [imageError, setImageError] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const saveNews = useSelector((state: reducerState) => state.user?.saveNews);
  let isNewsSaved = saveNews.find((data) => data._id == news._id);
  const saveTheNews = () => {
    let index = saveNews.findIndex((data) => data._id == news._id);
    if (index != -1) {
      let data = saveNews.filter((data) => data._id != news._id);
      console.log({ data });
      presentToast("News unsaved");
      dispatch(saveNewsResponse({ news: data }));

      return;
    }
    presentToast("News Saved");

    dispatch(saveNewsResponse({ news: [news, ...saveNews] }));
  };
  return (
    <IonCard
      onClick={() => {
        if (isPlatform("mobile")) {
          setExpand(!expand);
        } else {
          dispatch(onExpandNews([news]));
        }
      }}
      className={expand ? styles.cardsMobile : styles.cards}
    >
      <img
        alt="Silhouette of mountains"
        className={styles.image}
        onError={handleImageError}
        src={!imageError ? image : noImage}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <IonCardHeader>
          <IonCardTitle className={styles.header}>{title}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent className={styles.shortSummary}>
          {shortSummary}
        </IonCardContent>
        {expand && (
          <p
            style={{
              textAlign: "end",
              fontFamily: "urduFont",
              paddingLeft: "5px",
              paddingRight: "5px",
              fontSize: "10px",
            }}
          >
            {news.summary}
          </p>
        )}
        <IonRow
          // class="ion-justify-content-between"
          className={styles.cardFooter}
        >
          <IonRow
            style={{
              paddingBottom: 0,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              flexWrap: "nowrap",
            }}
            // class="ion-justify-content-between ion-align-items-center ion-padding"
          >
            <IonAvatar
              style={{
                height: 20,
                width: 20,
                alignSelf: "center",
                marginRight: "5px",
              }}
            >
              <img alt="Silhouette of a person's head" src={channelLogo} />
            </IonAvatar>
            <p className={styles.channelName}>{channelName}</p>
            <p className={styles.channelName}>{time}</p>
          </IonRow>
          <IonRow
            style={{
              paddingBottom: 0,
            }}
            // class="ion-align-items-center ion-padding"
          >
            <IonIcon
              onClick={(e) => {
                saveTheNews();
                e.stopPropagation();
              }}
              icon={isNewsSaved ? saveSharp : saveOutline}
            />
          </IonRow>
        </IonRow>
      </div>
    </IonCard>
  );
};

export default NewsCard;
