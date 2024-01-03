import Api from "../services/client";
import ApiConstants from "../config/api-config";

export default function getConfig() {
  return Api(ApiConstants.GET_CONFIG, null, "get");
}
