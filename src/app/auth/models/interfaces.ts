import { AreaTrabajo } from "../../models/interfaces"

export interface LoginRequest {
    email: string,
    password: string
}

export interface Payload {
    id: number,
    email: string,
    tipoUsuario: number,
    iat: number
}

export interface LoginResponse {
    estado: boolean,
    areasTrabajo: AreaTrabajo[]
}