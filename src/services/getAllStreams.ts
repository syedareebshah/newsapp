import Api from "../services/client";
import ApiConstants from "../config/api-config";

export default function AllStreams() {
  return Api(ApiConstants.GET_ALL_LIVE_STREAMS, null, "get");
}
