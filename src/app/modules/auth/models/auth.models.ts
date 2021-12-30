export interface AuthToken {
    readonly user_login: any;
    readonly sub: any;
}

export interface AuthByUsernameDto {
    readonly username: string;
    readonly password: string;
    readonly c_emp: string;
}

export class UsuarioAuth {
    c_age_trabajo?: string
    estado?: string
    id?: string
    nombre_usuario?: string
    usuario_aplicativo?: string
    c_emp?: string
    celular?: string
    correo?: string
    clave_encriptada?: string
    usuario_creacion?: string
    usuario_modificacion?: string

    constructor(usuario: any) {
        this.c_age_trabajo = usuario.c_age_trabajo;
        this.estado = usuario.estado;
        this.id = usuario.id;
        this.nombre_usuario = usuario.nombre_usuario;
        this.usuario_aplicativo = usuario.usuario_aplicativo;
        this.c_emp = usuario.c_emp
        this.celular = usuario.celular
        this.correo = usuario.correo
    }
}

export interface RolesMenu {
    codigo_usuario: string
    codigo_rol: string
    descripcion_rol: string
}