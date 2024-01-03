import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonImg,
  IonMenuToggle,
  IonSegmentButton,
  IonLabel,
  IonSegment,
  isPlatform,
} from "@ionic/react";
import styles from "./header.module.css";
import { refreshSharp } from "ionicons/icons";
import logo from "../../images/HeaderIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { onSelectTab } from "../../store/slice/appSlice";
import { useCallback } from "react";
import { enableRefreshing } from "../../store/slice/loadingSlice";

interface ContainerProps {}

const Header: React.FC<ContainerProps> = () => {
  const _tabs = useSelector((state: any) => state.app?.tabs);
  let tabs =
    _tabs?.filter((item) => item.index != "LiveTV" && item.index != "Akhbar") ||
    [];
  const dispatch = useDispatch();
  const selectedTab = useSelector((state: any) => state.app?.selectedTab);
  console.log("selectedTab==>", selectedTab, tabs[0]?.key);
  const refreshing = useCallback(() => {
    dispatch(enableRefreshing());
  }, []);
  return (
    <IonHeader>
      <IonToolbar
        class={styles.toolbar}
        style={{
          marginTop: isPlatform("ios") ? 20 : 0,
        }}
        mode="md"
      >
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonImg className={styles.headerlogo} src={logo} />
        <IonButtons onClick={refreshing} slot="end">
          <IonIcon icon={refreshSharp}></IonIcon>
        </IonButtons>
      </IonToolbar>
      {/* /categories */}
      <IonToolbar>
        <IonSegment scrollable value={selectedTab}>
          {tabs.map((data: any, index: any) => (
            <IonSegmentButton
              onClick={(e: any) => dispatch(onSelectTab(data.index))}
              key={index}
              value={data.index}
            >
              <IonLabel style={{ padding: "6px" }}>{data?.title}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
