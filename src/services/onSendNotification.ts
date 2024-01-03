import apiIndex from "./indexAdmin";
import ApiConstants from "../config/api-config";

export default function onSendNotification(data: any) {
  return apiIndex(
    ApiConstants.SEND_OCCASIONAL_NOTI,
    data.body,
    "POST",
    data.credentials
  );
}
