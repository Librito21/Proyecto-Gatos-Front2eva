import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type ProtectoraDto from './dtos/protectoras.dto'

export const useprotectorasStore = defineStore('protectoras', () => {
    const protectoras = ref(new Array<ProtectoraDto>())

    function findAll() {
        //fetch('https://jsonplaceholder.typicode.com/user')
        //resizeBy.json()
        //data
        /*let data = [
            { Id_Protectora: 0, Nombre_Protectora: 'test', Direccion: 'test', Correo_Protectora: 'test', Telefono_Protectora: 758149491, Horario_Atención: 'test', Imagen_Protectora: 'test' },
            { Id_Protectora: 1, Nombre_Protectora: 'test', Direccion: 'test', Correo_Protectora: 'test', Telefono_Protectora: 752963188, Horario_Atención: 'test', Imagen_Protectora: 'test' },
        ]
        protectoras.value.splice(0, protectoras.value.length, ...data)*/
    }
    function createProtectora(protectora: ProtectoraDto) {
        //fetch(POST)
        //body: JSON.stringify()

        protectoras.value.push(protectora)
    }
    function deleteProtectora() {

    }
    function updateProtectora() {

    }


 async function fetchProtectora() {
        try {
            const response = await fetch("https://localhost:7278/api/Protectora");

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data: ProtectoraDto[] = await response.json();
            protectoras.value = data;
            console.log('Gatos obtenidos:', data);
        } catch (error) {
            console.error('Error al obtener los gatos:', error);
        }
    }

    // REST
    // create, delete, updated....

    return {
        protectoras,
        findAll,
        createProtectora,
        deleteProtectora,
        updateProtectora,
        fetchProtectora
    }
})