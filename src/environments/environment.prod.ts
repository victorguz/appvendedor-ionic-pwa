
export const environment = {
  production: true,
  version: "2021.0",//No cambiar a menos que se cree un nuevo proyecto
  secret_key: "dff5091000396f57ed039129a4e5472b",
  iv: "JSyC2d1SfTArQL9fbTA25A==",
  jamaradmin_key: "G0DFOPNx5yIVCXHFbcTA14c6uWmusi",
  api_key: 'd47c29cfdf8e2456ac678c51f9e4ddfa8ec577f64e98aa9e863399f6a10210d4',
  environment: "production",
  adminRoute: "admin",
  authRoute: "auth",
  domain: "https://appsprd.mueblesjamar.com.co",
  domainBasics: "https://ot92hx6vv3.execute-api.us-east-1.amazonaws.com/prd/v1/{{c_emp}}/jamaradmin/basics/",
  encryptLocalStorage: true,
  //urls basicas necesarias para el buen funcionamiento del framework
  urls: {
    auth: {
      login: { value: "auth/login/post", method: "POST", contentType: "application/json" },
      register: { value: "auth/register/post", method: "POST", contentType: "application/json" },
      modify: { value: "auth/modify/post", method: "POST", contentType: "application/json" },
      modules: { value: "auth/modulos/get", method: "GET", contentType: "application/json" },
      moduleOptions: { value: "auth/modulos/opciones/get", method: "GET", contentType: "application/json" },
    },
    generals: { value: "/UtilitiesService/api/utilities/getProperties", method: "GET", contentType: "application/x-www-form-urlencoded" },
    query: {
      SQL: { value: "query/sql/post", method: "POST", contentType: "application/json" },
      Select: { value: "query/select/post", method: "POST", contentType: "application/json" },
      SelectQuery: { value: "query/select/sql/post", method: "POST", contentType: "application/json" },
      Insert: { value: "query/insert/post", method: "POST", contentType: "application/json" },
      Update: { value: "query/update/post", method: "POST", contentType: "application/json" },
      Delete: { value: "query/delete/post", method: "POST", contentType: "application/json" },
    }
  },
  /**
   * Dominios (dominio.com) a los que se enviará el token en el header de la petición.
   * Utilizar solo en caso que el dominio sea distinto del actual, ya que es allowed por defecto.
   */
  allowedDomains: [
    "https://hxylqwms9f.execute-api.us-east-1.amazonaws.com/dev/",
    "https://ot92hx6vv3.execute-api.us-east-1.amazonaws.com/prd/"
  ],
  /**
   * Rutas en las que no se tendrá en cuenta el envío del token.
   * Pueden ser del mismo dominio.
   */
  disallowedRoutes: [],
  //Constants
  COOKIE_USER: "asdsdd", //nombre de la cookie donde se almacena la informacion del usuario
  COOKIE_USERK: "jsfb_assff", //nombre de la cookie donde se almacena la informacion del usuario
  COOKIE_USER_SESSIONS: "jsfb_NMassff", //nombre de la cookie donde se almacena la informacion del usuario
  MAX_USER_SESSIONS: "max_jsfb_NMassff", //nombre de la cookie donde se almacena la informacion del usuario
  COOKIE_TOKEN: "rtytry", //nombre de la cookie donde se almacena el token de la sesión
  LOCAL_CONNECTION: "ghjghj",
  LOCAL_ENDPOINTS: "asdvbb", //nombre de la cookie donde se almacenan los endpoints
  LOCAL_MODULES: "rtryyrt",
  LOCAL_MODULE_OPTIONS: "xcvzx",
  LOCAL_CURRENT_MODULE: "sad5",
  LOCAL_ROLES: "asdssvxcv",
  LOCAL_RECENT_MODULES: "cvbcvbn",
  LOCAL_LAST_URL: "aweeads",
  LOCAL_GENERALS: "adzxcxzv",
  LOCAL_PROPERTIES: "awdasddf",
  MESSAGES_DURATION: 5000, //Duracion de los mensajes de snackbar
};