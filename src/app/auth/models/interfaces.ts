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