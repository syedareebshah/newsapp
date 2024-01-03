import apiIndex from "./indexAdmin";
import ApiConstants from "../config/api-config";

export default function sendNotification(data: any) {
  return apiIndex(
    ApiConstants.SEND_NOTIFICATION,
    data.body,
    "POST",
    data.credentials
  );
}
