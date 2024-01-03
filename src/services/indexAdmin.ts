import ApiConfig from "../config/api-config";
import { encode } from "base-64";

export default async function apiIndex(
  path: string,
  body: any,
  method: string,
  token: any
) {
  //token = await getAuthToken();
  let urlPath = ApiConfig.BASE_URL + path;

  let options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + encode(`${token.userName}` + ":" + `${token.password}`),
    },
    method: method,
    ...(body && { body: JSON.stringify(body) }),
  };

  return fetch(urlPath, options)
    .then((json) => json)
    .catch((error) => {
      return error;
    });
}
