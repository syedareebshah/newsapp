import Api from "../services/client";
import ApiConstants from "../config/api-config";

export default function ReportStream(data: any) {
  return Api(ApiConstants.REPORT, data, "post");
}
