import ApiConfig from "../config/api-config";
import { encode } from "base-64";

export default async function api(path: string, body: any, method: string) {
  //token = await getAuthToken();
  let urlPath = ApiConfig.BASE_URL + path;

  console.log("==>", urlPath);

  let options = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + encode(ApiConfig.KEY + ":" + ApiConfig.PASSWORD),
    },
    method: method,
    ...(body && { body: JSON.stringify(body) }),
  };
  return fetch(urlPath, options)
    .then((resp) => resp.json())
    .then((json) => json)
    .catch((error) => {
      return error;
    });
}
