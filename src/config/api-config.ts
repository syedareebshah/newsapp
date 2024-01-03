/* App config for apis
 */

const ApiConfig = {
  BASE_URL: 'http://167.172.82.64/api/v1/',
  REGISTER: 'Account/RegisterUser',
  LOGIN: 'Account/login',
  LOGIN_ADMIN: 'admin/auth/login',
  SEND_NOTIFICATION: 'admin/notification',
  SEND_OCCASIONAL_NOTI: 'admin/notification/send-occasional-notification',
  ALL_NEWS:
    'everything?q=apple&from=2021-03-01&to=2021-03-01&sortBy=popularity&apiKey=c746d356f2e14fb5abb898aabb5812fe',
  GET_ALL_CATEGORY: 'source/get-all-categories',
  GET_CATEGORY_NEWS: 'news?sort=-updatedAt&categories=',
  GET_CONFIG: 'config',
  GET_CONFIGS: 'configs',
  GET_NEWS_DETAIL: 'news/',
  GET_ALL_LIVE_STREAMS: 'channels/all-live-channel',
  REPORT: 'channels/report',
  KEY: 'key',
  PASSWORD: '22334411',
  UPDATE_CHANNEL: 'channels/fix-live',
};

export default ApiConfig;
