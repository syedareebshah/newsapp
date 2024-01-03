import Api from "../services/client";
import ApiConstants from "../config/api-config";

export default function Login(data: any) {
  return Api(ApiConstants.LOGIN, data, "POST");
}
