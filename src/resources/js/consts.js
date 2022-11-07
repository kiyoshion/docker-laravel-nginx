const HOST = 'https://localhost/'
console.log(HOST)

export const CONSTS = {
  APP_NAME: 'docker-laravel-nginx',
  BACKEND_HOST: HOST,
  BACKEND_HOST_STORAGE: HOST + 'storage/',
  IMAGE_BASE64: 'data:image/jpeg;base64,',
  TOKEN_URL: 'sanctum/csrf-cookie',
  POST_LOGIN_URL: HOST + 'api/login',
  POST_LOGOUT_URL: HOST + 'api/logout',
  POST_REGISTER_URL: HOST + 'api/register',
}
