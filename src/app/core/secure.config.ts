// Encriptacion de localStorage
import { arrayNotEmpty, isArray, isEmpty, isNotEmptyObject, isObject, isString } from 'class-validator';
import { environment } from 'src/environments/environment';
import { decrypt, encrypt, hash256 } from './services/functions.service';
const SecureStorageImport = require('secure-web-storage');

const secureStorageVar = new SecureStorageImport(localStorage, {
  hash: hash256,
  encrypt: encrypt,
  decrypt: decrypt
});

export class secureStorage {
  public static getItem(name: string): any {
    if (isEmpty(name)) {
      throw new Error("El nombre de la variable local no puede estar vacío");
    }
    if (environment.encryptLocalStorage) {
      return secureStorageVar.getItem(name)
    } else {
      const result = localStorage.getItem(name)
      return result ? JSON.parse(result) : null
    }
  }

  public static setItem(name: string, data: any): void {
    if (isEmpty(name)) {
      throw new Error("El nombre de la variable local no puede estar vacío");
    }
    if (isEmpty(data)) {
      throw new Error("El valor de la variable local no puede ser una cadena vacía, null o undefined");
    }
    if ((isObject(data) && !isNotEmptyObject(data)) || (isArray(data) && !arrayNotEmpty(data))) {
      throw new Error("El valor de la variable local no puede ser un objeto o arreglo vacío");
    }
    if (environment.encryptLocalStorage) {
      secureStorageVar.setItem(name, data)
    } else {
      localStorage.setItem(name, JSON.stringify(data))
    }
  }
  public static removeItem(name: string) {
    if (isEmpty(name)) {
      throw new Error("El nombre de la variable local no puede estar vacío");
    }
    if (environment.encryptLocalStorage) {
      secureStorageVar.removeItem(name)
    } else {
      localStorage.removeItem(name)
    }
  }
}
