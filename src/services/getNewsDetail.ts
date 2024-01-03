import Api from "../services/client";
import ApiConstants from "../config/api-config";

export default function getNewsDetail(id: string) {
  return Api(ApiConstants.GET_NEWS_DETAIL + id, null, "get");
}
