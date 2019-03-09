export interface Libro {
	id: string,
    title: string,
    autor: string,
    editorial: string,
    portada: string,
    valoracion: Voto[]
}

export interface Voto {
	dni : string,
    voto : number
}