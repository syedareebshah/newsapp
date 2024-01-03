import React, { useCallback, useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRouterOutlet,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import Header from "../Header";
import CardsContainer from "../CardsContainer";
import { checkmarkCircle } from "ionicons/icons";
import BottomTabs from "../BottomTabs";
import MenuComponent from "../MenuComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryNewsRequest,
  getConfigRequest,
} from "../../store/actions/appAction";
import styles from "../Header/header.module.css";
import allLogo from "../../images/Tmam.png";
import getCategoryNews from "../../services/getCategoryNews";
import * as selectedChannelAction from "../../store/slice/selectedChannelSlice";
import NewsDetailsModal from "../NewsDetails";
import { useToast } from "../../hooks/useToast";
import { reducerState } from "../../models/types";
import { enableRefreshing } from "../../store/slice/loadingSlice";

function MenuComp() {
  const dispatch = useDispatch();
  const { presentToast } = useToast();

  const [news, setNews] = useState(null);
  const [loader, seLoader] = useState(false);
  const selectedTab = useSelector((state: any) => state.app?.selectedTab);
  console.log({ selectedTab });
  const channels = useSelector((state: any) => state.app?.channels);
  const tempChannelArray = Object.entries(channels);
  const channelArray = tempChannelArray.filter(
    (data) => data[0] !== "JangNews" && data[0] !== "GeoNews"
  );

  let allObj = [
    "All",
    {
      image: allLogo,
      key: "All",
      name: "All",
      visible: true,
    },
  ];

  // Convert the allObj array to a key-value pair format
  const allObjEntry: any = [allObj[0], allObj[1]];

  // Add the allObjEntry to the start of channelArray
  channelArray.unshift(allObjEntry);

  // Convert the channelArray back to an object
  const updatedChannels = Object.fromEntries(channelArray);
  console.log({ updatedChannels });

  const selectedChannel = useSelector(
    (state: any) => state.selectedChannels.channel
  );
  const [pageNumber, setPageNumber] = useState(2);
  const [pagingLoading, setPagingLoading] = useState(false);
  const [paginationError, setPaginationError] = useState("");
  const loading = useSelector((state: any) => state.loading.isLoadingVisible);
  const refreshing = useSelector(
    (state: reducerState) => state.loading.refreshing
  );

  console.log({ selectedChannel });
  useEffect(() => {
    dispatch(getConfigRequest({}));
  }, [refreshing]);

  useEffect(() => {
    getChannelNews();
  }, [selectedChannel, selectedTab, refreshing]);

  const getChannelNews = async () => {
    seLoader(true);
    // setPaginationError('');
    // setPageNumber(2);
    try {
      let response = await getCategoryNews(
        {
          category: selectedTab == "TopNews" ? "" : selectedTab,
          source: selectedChannel.toString(),
        },
        1,
        20
      );
      if (response && response?.status == true) {
        setNews(response?.data);
        console.log("menu comp", response?.data);
      }
      seLoader(false);
    } catch {
      seLoader(false);
    }
  };

  const onSelect = (id: any) => {
    if (selectedChannel.includes(id)) {
      let tempSeleted = selectedChannel.filter((data: any) => data !== id);
      dispatch(
        selectedChannelAction.getSelectedChannels({
          channel: tempSeleted,
        })
      );
    } else {
      dispatch(
        selectedChannelAction.getSelectedChannels({
          channel: [id, ...selectedChannel],
        })
      );
    }
  };

  const onEndReach = useCallback(
    async (e: any) => {
      try {
        if (
          !pagingLoading &&
          news &&
          news?.length > 19 &&
          paginationError == ""
        ) {
          setPagingLoading(true);

          let response = await getCategoryNews(
            {
              category: selectedTab == "TopNews" ? "" : selectedTab,
              source: selectedChannel.toString(),
            },
            pageNumber,
            30
          );
          if (response && response?.status == true && response?.data) {
            setNews((prv: any) => prv.concat(response?.data));

            if (response?.data?.length > 0) {
              setPageNumber((prev) => prev + 1);
              if (response?.message) {
                console.log("response.message", response.message);
                presentToast(response.message);
              }
            } else {
              setPaginationError("0 news found");
              presentToast("0 news found");
            }
            setPagingLoading(false);
          } else {
            setPaginationError("0 news found");
            presentToast("0 news found");

            setPagingLoading(false);
          }
        }
      } catch (err) {
        setPaginationError("0 news found");
        presentToast("0 news found");

        setPagingLoading(false);
      } finally {
        e.target.complete();
      }
    },
    [
      pagingLoading,
      setPagingLoading,
      news,
      selectedTab,
      paginationError,
      pageNumber,
      setNews,
    ]
  );

  const getAllChannels = () => {
    dispatch(
      selectedChannelAction.getSelectedChannels({
        channel: [],
      })
    );
    dispatch(
      getCategoryNewsRequest({
        category: [],
        source: [],
      })
    );
  };

  const pullRefresh = useCallback((event: any) => {
    dispatch(enableRefreshing());
    if (!refreshing) {
      event.detail.complete();
    }
  }, []);

  return (
    <IonPage id="main-content">
      <Header />
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={pullRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {/* /channels */}
        <IonToolbar>
          <IonSegment scrollable value="all">
            {channelArray.map((data: any, index: any) => (
              <IonSegmentButton
                onClick={() => {
                  if (data[1].key == "All") {
                    getAllChannels();
                  } else {
                    onSelect(data[1].key);
                  }
                }}
                value={data[1]?.key}
              >
                {selectedChannel.length == 0 && data[1].key == "All" ? (
                  <IonIcon
                    style={{
                      marginTop: -20,
                      position: "relative",
                      right: -20,
                      top: 25,
                    }}
                    icon={checkmarkCircle}
                  />
                ) : selectedChannel.includes(data[1].key) ? (
                  <IonIcon
                    style={{
                      marginTop: -20,
                      position: "relative",
                      right: -20,
                      top: 25,
                    }}
                    icon={checkmarkCircle}
                  />
                ) : selectedChannel.length < 1 && data[1].key == "All" ? (
                  <IonIcon
                    style={{
                      marginTop: -20,
                      position: "relative",
                      right: -20,
                      top: 25,
                    }}
                    icon={""}
                  />
                ) : (
                  <div style={{ marginTop: 20 }}></div>
                )}
                <IonImg className={styles.channelLogos} src={data[1]?.image} />
              </IonSegmentButton>
            ))}
          </IonSegment>
        </IonToolbar>

        <CardsContainer news={news} loader={loader} />

        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            onEndReach(ev);
          }}
        >
          <IonInfiniteScrollContent
            loadingText="Please wait..."
            loadingSpinner="bubbles"
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
}
export default MenuComp;
