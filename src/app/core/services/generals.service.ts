import { Injectable } from "@angular/core";
import { RequestsService } from "./requests.service";
import { getConnection, getFromLocal, hideSpinner, setOnLocal, showSpinner } from "./functions.service";
import { HelpersService } from "./helpers.service";
import { arrayNotEmpty, isEmpty, isNotEmpty, isNotEmptyObject } from "class-validator";
import { environment } from "src/environments/environment";
import { QueriesService } from "./queries.service";
import { BasicResponse } from "../models/basic-response.model";
import { SerEndpoint } from "../models/endpoint.model";
import { SerProperty } from "../models/property.model";

@Injectable({
    providedIn: 'root',
})
export class GeneralsService {

    constructor(private helpers: HelpersService, private requestsService: RequestsService, private queriesService: QueriesService) { }

    /**
     * Gets the endpoints from localStorage (secureStorage)
     * @returns array or object
     */
    async getEndpoints(reload: boolean = false): Promise<any> {
        let endpoints = getFromLocal(environment.LOCAL_ENDPOINTS);
        if (isEmpty(endpoints) || !isNotEmptyObject(endpoints) || reload) {
            console.log("endpoints", endpoints)
            showSpinner()
            const result = await this.findAllEndpoints({ estado: "A" })
            hideSpinner()
            if (result.success) {
                setOnLocal(environment.LOCAL_ENDPOINTS, result.data)
                return result.data
            } else {
                return {}
            }
        } else {
            return endpoints
        }
    }

    private async findAllEndpoints(where: SerEndpoint = {}, asArray: boolean = false): Promise<BasicResponse> {
        const result = await this.queriesService.table("SER_ENDPOINTS")
            .select("TO_CHAR(id) id", "clave", "valor", "estado")
            .where({ ...where, c_emp: getConnection() })
            .orderBy("clave asc")
            .execute()
        result.data = result.data ? result.data : undefined
        if (result.success && result.data && arrayNotEmpty(result.data) && !asArray) {
            const endpoints = {}
            result.data.forEach(endpoint => {
                endpoints[endpoint.clave] = endpoint.valor
            });
            setOnLocal(environment.LOCAL_ENDPOINTS, endpoints)
            result.data = endpoints
        }
        return result
    }

    private async findOneEndpoint(clave: string, where: SerEndpoint = {}): Promise<BasicResponse> {
        const result = await this.queriesService.table("SER_ENDPOINTS").where({ clave, ...where }).execute()
        result.data = arrayNotEmpty(result.data) ? result.data[0] : null
        result.data.id = Number(result.data.id)
        return result
    }

    async getEndpoint(clave: string): Promise<string> {
        if (isNotEmpty(clave)) {
            const endpoints = await this.getEndpoints()
            if (isNotEmpty(endpoints) && isNotEmptyObject(endpoints)) {
                const endpoint = endpoints[clave]
                if (endpoint) {
                    return endpoint
                } else {
                    showSpinner()
                    const result = await this.findOneEndpoint(clave, { estado: "A" })
                    hideSpinner()
                    if (result.success && result.data) {
                        endpoints[result.data.clave] = result.data.valor
                        setOnLocal(environment.LOCAL_ENDPOINTS, endpoints)
                        return result.data.valor
                    } else {
                        throw new Error("No se encuentra el endpoint con esta clave: " + clave);
                    }
                }
            } else {
                throw new Error("No se pudieron cargar los endpoints");
            }
        } else {
            throw new Error("Especifique una clave/nombre de endpoint");
        }
    }

    async getGeneralsByFile(archivo: string = "generales.json") {
        const generals = await this.requestsService.makeRequest(environment.domain, environment.urls.generals, { archivo })
        if (generals.success) {
            return generals.data
        }
        throw new Error("No se pudieron obtener los datos de generals");
    }

    async getGeneralsJSON(reload: boolean = false) {
        try {
            let generals = getFromLocal(environment.LOCAL_GENERALS);
            if (isEmpty(generals) && !isNotEmptyObject(generals) || reload) {
                generals = await this.getGeneralsByFile()
                if (isNotEmptyObject(generals)) {
                    setOnLocal(environment.LOCAL_GENERALS, generals)
                }
            }
            return generals
        } catch (error) {
            return null
        }
    }

    async getCausalDet(cod_causal: string) {
        const result = await this.queriesService.query(`Select E.Cod_Tipo, D.* 
        From Causal_Enc E, Causal_Det D 
        Where E.C_EMP = D.C_EMP 
        And E.COD_TIPO = D.COD_TIPO 
        And E.C_Emp = '${getConnection()}' 
        And E.Cod_Tipo = '${cod_causal}'
        And E.Estado = 'A' 
        And D.EST = 'A' 
        Order By D.Tipo, D.DES`)
            .execute()
        return result
    }

    async getProperty(name: string): Promise<SerProperty | undefined> {
        let properties = this.getProperties();
        if (properties && Array.isArray(properties)) {
            const find = properties.find((prop) => { return prop.key == name })
            if (find) {
                return find
            }
        }
        const result = await this.queriesService.table("SER_PROPERTIES").select("key", "valor").where({ key: name }).execute()
        if (result.success && result.data && Array.isArray(result.data) && result.data[0]) {
            this.addProperty(result.data[0])
            return result.data[0]
        }
        throw new Error(`No se encontró el endpoint '${name}'`);
    }
    async getMunicipios(c_dpto: string) {
        const result = await this.queriesService.query(`SELECT * FROM municipio WHERE c_emp = '${getConnection()}' AND estado = 'A' AND c_dpto = '${c_dpto}' order by nombre`).execute()
        return result
    }

    async getDepartamentos() {
        const result = await this.queriesService.query(`SELECT * FROM departamento WHERE c_emp = '${getConnection()}' AND estado = 'A' order by nombre`).execute()
        return result
    }

    private getProperties(): SerProperty[] | undefined {
        return getFromLocal(environment.LOCAL_PROPERTIES)
    }

    private addProperty(property: any) {
        let result = this.getProperties();
        if (result && Array.isArray(result)) {
            const find = result.find((prop) => { return property.key == prop.key })
            if (!find) {
                result.push(property)
            }

        } else {
            result = [property]
        }
        setOnLocal(environment.LOCAL_PROPERTIES, result)
    }
}
