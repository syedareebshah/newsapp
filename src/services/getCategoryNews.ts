import Api from "../services/client";
import ApiConstants from "../config/api-config";

export default function getCategoryNews(
  data: any,
  page: number = 0,
  limit: number = 20
) {
  return Api(
    data.source
      ? ApiConstants.GET_CATEGORY_NEWS +
          data.category +
          "&source=" +
          data.source +
          "&page=" +
          page +
          "&limit=" +
          limit
      : ApiConstants.GET_CATEGORY_NEWS +
          data.category +
          "&page=" +
          page +
          "&limit=" +
          limit,
    null,
    "get"
  );
}
