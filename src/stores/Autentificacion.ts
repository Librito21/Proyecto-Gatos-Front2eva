import { defineStore } from 'pinia';

export const useAutenticacion = defineStore('Autenticacion', {
    state: () => ({
        usuario: null as any | null
    }),
    actions: {
        iniciarSesion(datosUsuario: any) {
            this.usuario = datosUsuario;
            localStorage.setItem('user', JSON.stringify(datosUsuario));
        },
        cerrarSesion() {
            this.usuario = null;
            localStorage.removeItem('user');
        },
        cargarUsuarioDesdeLocalStorage() {
            const datos = localStorage.getItem('user');
            if (datos) {
                this.usuario = JSON.parse(datos);
                //console.log("Usuario cargado en el estado:", this.usuario);
            }
        }
    }
});
