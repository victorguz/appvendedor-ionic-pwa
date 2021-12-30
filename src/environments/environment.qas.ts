// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: true,
  version: "2021.0",//No cambiar a menos que se cree un nuevo proyecto
  secret_key: "dff5091000396f57ed039129a4e5472b",
  iv: "JSyC2d1SfTArQL9fbTA25A==",
  jamaradmin_key: "G0DFOPNx5yIVCXHFbcTA14c6uWmusi",
  api_key: 'd47c29cfdf8e2456ac678c51f9e4ddfa8ec577f64e98aa9e863399f6a10210d4',
  environment: "qas",
  adminRoute: "admin",
  authRoute: "auth",
  domain: "https://appsqas.mueblesjamar.com.co",
  domainBasics: "https://hxylqwms9f.execute-api.us-east-1.amazonaws.com/dev/v1/{{c_emp}}/jamaradmin/basics/",
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
  LOCAL_CONNECTION: "ghjghj", //conexión del app
  LOCAL_ENDPOINTS: "asdvbb", //nombre de la cookie donde se almacenan los endpoints
  LOCAL_MODULES: "rtryyrt", //modulos donde tiene acceso el usuario
  LOCAL_MODULE_OPTIONS: "xcvzx", //Opciones del menu del modulo activo
  LOCAL_CURRENT_MODULE: "sad5", //modulo activo (donde el usuario hizo click)
  LOCAL_ROLES: "asdssvxcv", //roles --> DEPRECATED
  LOCAL_RECENT_MODULES: "cvbcvbn", //Lista de modulos recientes
  LOCAL_LAST_URL: "aweeads", //Ultima url visitada antes de expirar sesión
  LOCAL_GENERALS: "adzxcxzv", //generals.json
  LOCAL_PROPERTIES: "awdasddf", //ser properties
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
