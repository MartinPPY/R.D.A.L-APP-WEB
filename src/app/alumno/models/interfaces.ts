export interface ActividadAMandar {
    fecha: Date,
    horaInicio: Date,
    horaTermino: Date,
    areaTrabajo: number
}

export interface Actividad {
    fecha: string,
    inicio: string,
    termino: string,
    area: string
}

export interface ResumenMensual {
    horasAprobadas: {
        horas_trabajadas: number
    },
    montoAcumulado: number | null,
    ordenCompra: string | number
}