import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type UserDto from './dtos/user.dto'

export const useusuariosStore = defineStore('usuarios', () => {
    const usuarios = ref(new Array<UserDto>())

    function findAll() {
        //fetch('https://jsonplaceholder.typicode.com/user')
        //resizeBy.json()
        //data
        let data = [
            { Id_Usuario: 0, Nombre_Usuario: 'test', Apellido: 'test', Contraseña: 'test', Email_Usuario: 'test', Fecha_Registro: new Date() },
            { Id_Usuario: 1, Nombre_Usuario: 'test', Apellido: 'test', Contraseña: 'test', Email_Usuario: 'test', Fecha_Registro: new Date() },

        ]
        usuarios.value.splice(0, usuarios.value.length, ...data)
    }
    function createUsuario(usuario: UserDto) {
        //fetch(POST)
        //body: JSON.stringify()

        usuarios.value.push(usuario)
    }
    function deleteUsuario() {

    }
    function updateUsuario() {

    }


    async function fetchUsuario() {
        fetch('https://jsonplaceholder.typicode.com/user')
            .then((res) => res.json())
            .then((data) => {
                usuarios.value = []
                usuarios.value = data
            })
    }

    // REST
    // create, delete, updated....

    return {
        usuarios,
        findAll,
        createUsuario,
        deleteUsuario,
        updateUsuario,
        fetchUsuario
    }
})