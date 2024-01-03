import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import MenuComponent from "../../components/MenuComponent";
import HeaderWithoutTabs from "../../components/Header/Header";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { reducerState } from "../../models/types";
import AllStreams from "../../services/getAllStreams";
import YouTube from "react-youtube";
import { useHistory, useLocation } from "react-router-dom";

const LiveTv: React.FC = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<any>(null);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  let location = useLocation();
  const adminCredentials = useSelector(
    (state: reducerState) => state.user.adminCredentials
  );
  const fetchChannels = async () => {
    try {
      setLoading(true);
      let res = await AllStreams();
      let visibleResponse = res.data.filter((data) => data.visibility == true);
      console.log({ visibleResponse });
      if (adminCredentials?.userName?.length > 0) {
        setChannels(res?.data);
      } else {
        setChannels(visibleResponse);
      }

      // start playing new channel here...
      if (false) {
        // setSelectedChannel({ url: route?.params?.url, key: "" });
        console.log(
          'setSelectedChannel({ url: route?.params?.url, key: "" });'
        );
      } else {
        startPlayingVedio(visibleResponse[0]);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  };

  // const playVideo = () => {
  //   if (playerRef.current) {
  //     playerRef.current.playVideo();
  //   }
  // };

  // Function to pause the video
  // const pauseVideo = () => {
  //   if (playerRef.current) {
  //     playerRef.current.pauseVideo();
  //   }
  // };

  // useEffect(() => {
  //   console.log("window.location.pathname", window.location.pathname);
  //   if (window.location.pathname == "/liveTv") {
  //     playVideo();
  //   } else {
  //     pauseVideo();
  //   }
  // }, [window.location.pathname]);

  const startPlayingVedio = (data: any) => {
    setSelectedChannel({
      url: data?.liveYoutubeUrl?.split("watch?v=")[1],
      key: data?.key,
    });
  };
  console.log({ channels });

  useEffect(() => {
    fetchChannels();
  }, []);
  // load channel vedio streaming...

  return (
    <IonPage id="main-content">
      <HeaderWithoutTabs />
      <IonContent fullscreen>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <YouTube videoId={selectedChannel?.url} />
        </div>
        <IonGrid>
          <IonRow>
            {channels.map((data, index) => (
              <IonCol
                key={index}
                sizeXs="12"
                sizeSm="6"
                sizeMd="6"
                sizeLg="6"
                sizeXl="6"
              >
                <IonCard onClick={() => startPlayingVedio(data)}>
                  <IonRow class="ion-align-items-center">
                    <IonImg
                      style={{ height: 100, width: 100 }}
                      src={data?.logo}
                      alt="newspapers logo"
                    />
                    <IonTitle>{data?.name}</IonTitle>
                  </IonRow>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LiveTv;
