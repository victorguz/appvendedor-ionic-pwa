import { HttpErrorResponse } from "@angular/common/http";
import { UsuarioAuth } from "src/app/modules/auth/models/auth.models";
import { environment } from "src/environments/environment";
import { config } from "../default.config"
import { secureStorage } from "../secure.config";
import * as CryptoJS from 'crypto-js';
import { isEmpty, isNotEmpty, isNotEmptyObject, isString } from "class-validator";

///////////////Funciones globales

/**{
 * }
 * Pone en mayusculas la inicial de cada palabra y en minusculas el resto de las letras en una cadena.
 * @param cad
 * @param split
 */
export function toTitleCase(cad: string, split: string = " ") {
    cad = cad.trim().toLocaleLowerCase()
    if (isNotEmpty(cad)) {
        let arr = cad.split(split);
        cad = "";
        arr.forEach(e => {
            if (e) {
                cad += e[0].toUpperCase() + e.substring(1) + " ";
            }
        });
    }
    return cad;
}

/**
* Pone en mayusculas la inicial de cada frase separandola por puntos (.)
* @param cad
*/
export function toPhraseCase(cad: string) {
    return toTitleCase(cad, ".");
}

/**
   * Obtiene la configuración con la clave 'name'
   * @param name Nombre de la configuración
   * @returns {any}
   */
export function getConfig(name: string) {

    //find config on database ad return it if it's found.
    //return ConfigService.getConfig(name)
    //else

    return config[name]
}

/**
 * Set the data on localStorage (secureStorage)
 * @param name item name
 * @param data item data
 */
export function setOnLocal(name: string, data: any) {
    if (!isNotEmpty(name)) {
        throw new Error("El nombre de la variable local no puede estar vacío");
    }
    secureStorage.setItem(name, data)
}
/**
 * Deletes item from localStorage (secureStorage)
 * @param name 
 */
export function removeFromLocal(name: string) {
    if (!isNotEmpty(name)) {
        throw new Error("El nombre de la variable local no puede estar vacío");
    }
    secureStorage.removeItem(name)
}

/**
 * Gets the localStorage (secureStorage) string by name and parse it like JSON.
 * If it isn't an object, array or string, returns null.
 * @param name 
 * @returns the object or array
 */
export function getFromLocal(name: string): any {
    if (!isNotEmpty(name)) {
        throw new Error("El nombre de la variable local no puede estar vacío");
    }
    const result = secureStorage.getItem(name)
    return result;
}

/**
 * Gets the company/c_emp
 * @returns 
 */
export function getConnection(): string {
    const result = getFromLocal(environment.LOCAL_CONNECTION)
    return isEmpty(result) ? null : result
}

export function getCurrentUser(): UsuarioAuth {
    const result = getFromLocal(environment.COOKIE_USER)
    if (!result || !isNotEmpty(result) || !isNotEmptyObject(result)) {
        throw new Error("Asegurese de que el usuario haya iniciado sesión primero.");
    }
    return result;
}

export function getErrorMessage(error: any, print: boolean = false): string {
    let result: string = ""
    if (error instanceof Error) {
        result = error.message
    }
    if (error instanceof HttpErrorResponse) {
        //Algunos endpoints vandan parámetros de error en el response
        if (error.error) {
            //En específico la lambda basics retorna un response {success,message,error}, lo que haría que error.error tenga esa forma.
            if (error.error.error && isNotEmptyObject(error.error.error)) {
                const err = error.error.error
                //Para validar si el error generado es del tipo de oracle.
                if (isString(err)) {
                    result = err
                    if (err.match(/[(ORA)(OCIError)]/gi)) {
                        result = getORAException(err)
                    }
                }
            } else if (error.error.message) {
                result = error.error.message
            }
        } else {
            result = error.message ? error.message : "Error en la petición"
        }
    }
    print ? console.error(error) : ""
    return result
}
export function getBasicError(error: any, print: boolean = false): any {
    if (error instanceof Error) {
        return error
    }
    if (error instanceof HttpErrorResponse) {
        return error.error
    }
    print ? console.error(error) : ""
    return error
}

export function getORAException(error: string): string {
    if (error.match(/(unique)|(constraint)/gi)) {
        return "Ya existe un registro con datos similares a este"
    }
    if (error.match(/(too)|(large)/gi)) {
        return "Uno de los campos es demasiado largo"
    }
    return error
}
export function hash256(key) {
    key = CryptoJS.SHA256(key);
    return key.toString();
}
export function hash512(key) {
    key = CryptoJS.SHA512(key);
    return key.toString();
}
export function encrypt(data) {
    data = CryptoJS.AES.encrypt(data, environment.secret_key);
    data = data.toString();
    return data;
}
export function decrypt(data) {
    data = CryptoJS.AES.decrypt(data, environment.secret_key);
    data = data.toString(CryptoJS.enc.Utf8);
    return data;
}

/**
 * Retorna una cadena solamente con numeros y letras
 * @param cad 
 * @returns 
 */
export function ignoreSpecialCharacters(cad: string, ignoreSpaces: boolean = true): string {
    cad = ignoreSpaces ? cad.replaceAll(" ", "") : cad.trim()
    cad = cad.replaceAll("|", "")
        .replaceAll("°", "")
        .replaceAll("¬", "")
        .replaceAll("!", "")
        .replaceAll("\"", "")
        .replaceAll("#", "")
        .replaceAll("$", "")
        .replaceAll("%", "")
        .replaceAll("&", "")
        .replaceAll("/", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("=", "")
        .replaceAll("?", "")
        .replaceAll("'", "")
        .replaceAll("¡", "")
        .replaceAll("¿", "")
        .replaceAll("¨", "")
        .replaceAll("*", "")
        .replaceAll("]", "")
        .replaceAll("[", "")
        .replaceAll("{", "")
        .replaceAll("}", "")
        .replaceAll("^", "")
        .replaceAll("`", "")
        .replaceAll("+", "")
        .replaceAll("~", "")
        .replaceAll("]", "")
        .replaceAll("´", "")
        .replaceAll("-", "")
        .replaceAll(":", "")
        .replaceAll(";", "")
    return cad
}
/**
 * Obtiene si se está ejecutando en un entorno local
 * @returns si se está ejecutando en un entorno local
 */
export function isLocal(): boolean {
    return location.host.includes("localhost")
}

/**
 * Retorna la cadena solamente con numeros
 * @param cad 
 * @returns 
 */
export function ignoreLetters(cad: string): string {
    return cad.trim().replaceAll(/[\D]/ig, "")
}
/**
 * Muestra un Spinner (loading) y muestra el mensaje especificado
 * @param message 
 */
export function showSpinner(message: string = "Cargando...") {
    document.getElementById("coky-spinner-container")?.removeAttribute("hidden")
    const spinnerMessage = document.getElementById("coky-spinner-message")
    spinnerMessage ? spinnerMessage.innerHTML = message : ""
}

/**
 * Oculta el spinner si está visible
 */
export function hideSpinner() {
    document.getElementById("coky-spinner-container")?.setAttribute("hidden", "true")
}

/**
* Gets the endpoints from localStorage (secureStorage)
* @returns array or object
*/
export function getEndpoints() {
    const endpoints = getFromLocal(environment.LOCAL_ENDPOINTS)
    if (!isNotEmpty(endpoints) || !isNotEmptyObject(endpoints)) {
        throw new Error("No se pudieron cargar los endpoints");
    }
    return endpoints;
}

/**
 * Obtiene el endpoint que solicites
 * @param clave nombre del endpoint
 * @returns 
 */
export function getEndpoint(clave: string): string {
    if (isNotEmpty(clave)) {
        const endpoints = getEndpoints()
        const endpoint = endpoints[clave]
        if (endpoint) {
            return endpoint
        } else {
            throw new Error("No se encuentra el endpoint con esta clave: " + clave);
        }
    } else {
        throw new Error("No se pudieron cargar los endpoints");
    }
}

/**
 * Obtiene todos los generals de generals.json
 * @returns 
 */
export function getGenerals(): string {
    const generals = getFromLocal(environment.LOCAL_GENERALS)
    if (generals) {
        return generals
    } else {
        throw new Error("No se cargaron debidamente los generals.");
    }
}

/**
 * Obtiene el dominio de mueblesjamar para el entorno activo
 * @returns dominio de mueblesjamar para el entorno activo
 */
export function getDomain(): string {
    return environment.domain
}

/**
 * Convierte una fecha en el formato 'dd/mm/yyyy', ideal para oracle
 * @param fecha 
 * @param sep separador de las variables de la fecha
 * @returns 
 */
export function dateToStringDayMonthYear(fecha: Date, sep: string = "/") {
    return `${fecha.getDate()}${sep}${fecha.getMonth() + 1}${sep}${fecha.getFullYear()}`;
}

/**
 * Obtiene el api_key del entorno
 * @returns api_key del entorno
 */
export function getApiKey() {
    return environment.api_key
}

/**
 * Obtiene el dominio del cliente (básicamente el dominio de la url)
 * @returns el dominio del cliente
 */
export function getClientDomain() {
    return `${location.protocol}`
}

