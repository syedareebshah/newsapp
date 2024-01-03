import apiClient from "../services/client";
import ApiConfig from "../config/api-config";

export default function loginUser(username: any, password: any) {
  return apiClient(ApiConfig.LOGIN, "post", { username, password });
}
