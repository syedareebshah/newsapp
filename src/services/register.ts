import Api from "../services/client";
import ApiConstants from "../config/api-config";

export default function register(data: object) {
  return Api(ApiConstants.REGISTER, data, "post");
}
