import { defineStore } from 'pinia';

export const useAutenticacion = defineStore('Autenticacion', {
    state: () => ({
        usuario: null,
    }),
    getters: {
        esAutenticado: (state) => !!state.usuario,
    },
    actions: {
        iniciarSesion(datosUsuario: any) {
            this.usuario = datosUsuario;
        },
        cerrarSesion() {
            this.usuario = null;
        },
        cargarUsuarioDesdeLocalStorage() {
            const usuario = localStorage.getItem('user');
            if (usuario) {
                this.usuario = JSON.parse(usuario);
            }
        },
    },
});
