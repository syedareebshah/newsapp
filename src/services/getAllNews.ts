import Api from "../services/client";
import ApiConstants from "../config/api-config";

export default function AllNews() {
  return Api(ApiConstants.ALL_NEWS, null, "get");
}
