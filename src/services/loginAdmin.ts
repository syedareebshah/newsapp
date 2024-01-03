import apiIndex from "../services/indexAdmin";
import ApiConstants from "../config/api-config";

export default function loginAdmin(data: any) {
  return apiIndex(ApiConstants.LOGIN_ADMIN, null, "POST", data);
}
