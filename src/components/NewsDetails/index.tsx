import React, { useEffect, useRef, useState } from "react";
import {
  createAnimation,
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
} from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { onExpandNews } from "../../store/slice/appSlice";
import noImage from "../../images/no-image.png";

function NewsDetailsModal() {
  const modal = useRef<HTMLIonModalElement>(null);
  const data = useSelector((state: any) => state.app.newsDetails);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  const dispatch = useDispatch();
  console.log({ data });
  function dismiss() {
    modal.current?.dismiss();
    dispatch(onExpandNews([]));
  }
  function showModal() {
    modal.current?.present();
  }
  useEffect(() => {
    if (data.length > 0) {
      showModal();
    }
  }, [data]);

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector("ion-backdrop")!)
      .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector(".modal-wrapper")!)
      .keyframes([
        { offset: 0, opacity: "0", transform: "scale(0)" },
        { offset: 1, opacity: "0.99", transform: "scale(1)" },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing("ease-out")
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction("reverse");
  };

  return (
    <IonPage>
      <IonModal
        id="example-modal"
        ref={modal}
        trigger="open-modal"
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
      >
        <IonContent>
          <IonToolbar>
            <IonTitle>News Details</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
          <div style={{ padding: 20 }}>
            <IonImg
              style={{ height: 300 }}
              onError={handleImageError}
              src={!imageError ? data[0]?.image : noImage}
            />
            <IonTitle
              style={{
                textAlign: "center",
                fontFamily: "urduFont",
              }}
            >
              {data[0].title}
            </IonTitle>
            <p
              style={{
                textAlign: "end",
                fontFamily: "urduFont",
              }}
            >
              {data[0].summary}
            </p>
          </div>
        </IonContent>
      </IonModal>
    </IonPage>
  );
}

export default NewsDetailsModal;
