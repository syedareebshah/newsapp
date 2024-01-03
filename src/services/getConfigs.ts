import Api from "../services/client";
import ApiConstants from "../config/api-config";

export default async function getConfigs() {
  return await Api(ApiConstants.GET_CONFIGS, null, "get");
}
