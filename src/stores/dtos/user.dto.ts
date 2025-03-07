export default class UserDto {
    constructor(
        public Id_Usuario: number,
        public Nombre_Usuario: string,
        public Apellido: string,
        public Contraseña: string,
        public Email_Usuario: string,
        public Fecha_Registro: Date
    ) { }
}