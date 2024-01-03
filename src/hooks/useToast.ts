import React, { useEffect } from "react";
import { useIonToast } from "@ionic/react";

export const useToast = () => {
  const [present] = useIonToast();

  const presentToast = (msg: any) => {
    present({
      message: msg,
      duration: 50,
      position: "bottom",
    });
  };
  return { presentToast };
};
