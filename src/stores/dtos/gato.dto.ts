export default class GatoDto {
    constructor(
        public Id_Gato: number,
        public Id_Protectora: number,
        public Nombre_Gato: string,
        public Raza: string,
        public Edad: number,
        public Esterilizado: string,
        public Sexo: string,
        public Descripcion_Gato: string,
        public Imagen_Gato: string,
    ) { }
}