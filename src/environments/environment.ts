// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  version: "2021.0",//No cambiar a menos que se cree un nuevo proyecto
  secret_key: "123456",
  iv: "123456",
  jamaradmin_key: "123456",
  api_key: '123456',

  environment: "development",
  adminRoute: "admin",
  authRoute: "auth",
  domain: "",
  domainBasics: "",
  // domains: {
  //   STEP_IMAGE_APP_ID: 'https://6kwvv4d820.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   SELLER_APP_ID: 'https://sbeuw1vi17.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   TARJETIZACION_ID: 'https://uoc9e528ik.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   WEB_LOGIC_APP_ID: 'https://ihoffgzow6.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   MEC_EXTENSION_APP_ID: 'https://3xassuir58.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   ORDER_APP_ID: 'https://gm36tm91y3.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   ORDER_REQUEST_ID: 'https://xvjhk5jhn4.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   DIGITURNO_MIDDLEWARE: 'https://ffmph7erj5.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   AGENCIA_TURNO: 'https://1ovflrau72.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   CITA_FUTURA: 'https://uljva3ijt7.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   MEC_EXTENSION_COMVE: 'https://rtsycwvb4g.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  //   MALLAGRAMA_TEMPORAL: 'https://rtsycwvb4g.execute-api.us-east-1.amazonaws.com/api/v1/{{c_emp}}/',
  // },

  encryptLocalStorage: false,
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
    "",
  ],
  /**
   * Rutas en las que no se tendrá en cuenta el envío del token.
   * Pueden ser del mismo dominio.
   */
  disallowedRoutes: [],
  //Constants
  COOKIE_USER: "user_info", //nombre de la cookie donde se almacena la informacion del usuario
  COOKIE_USERK: "jsfb_assff", //nombre de la cookie donde se almacena la informacion del usuario
  COOKIE_USER_SESSIONS: "jsfb_NMassff", //nombre de la cookie donde se almacena la informacion del usuario
  MAX_USER_SESSIONS: "max_jsfb_NMassff", //nombre de la cookie donde se almacena la informacion del usuario
  COOKIE_TOKEN: "token", //nombre de la cookie donde se almacena el token de la sesión
  LOCAL_CONNECTION: "con",
  LOCAL_ENDPOINTS: "endpoints", //nombre de la cookie donde se almacenan los endpoints
  LOCAL_MODULES: "modulos",
  LOCAL_MODULE_OPTIONS: "module_options",
  LOCAL_CURRENT_MODULE: "current_options",
  LOCAL_ROLES: "roles",
  LOCAL_RECENT_MODULES: "recent_modules",
  LOCAL_LAST_URL: "last_url",
  LOCAL_GENERALS: "generals",
  LOCAL_PROPERTIES: "properties",
  MESSAGES_DURATION: 5000, //Duracion de los mensajes de snackbar
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
