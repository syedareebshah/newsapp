import apiIndex from "./indexAdmin";
import ApiConstants from "../config/api-config";

export default function onUpdateChannel(data: any) {
  return apiIndex(
    ApiConstants.UPDATE_CHANNEL,
    data.body,
    "PATCH",
    data.credentials
  );
}
