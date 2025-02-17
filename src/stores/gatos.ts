import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type GatoDto from './dtos/gato.dto'

export const usegatosStore = defineStore('gatos', () => {
    let gatos = ref<GatoDto[]>([])

    function findAll() {
        //fetch('https://jsonplaceholder.typicode.com/user')
        //resizeBy.json()
        //data
        /*let data = [
            { Id_Gato: 0, Id_Protectora: 0, Nombre_Gato: 'test', Raza: 'test', Edad: 5, Esterilizado: 'test', Sexo: 'test', Descripcion_Gato: 'test', Imagen_Gato: 'test', },
            { Id_Gato: 1, Id_Protectora: 1, Nombre_Gato: 'test', Raza: 'test', Edad: 5, Esterilizado: 'test', Sexo: 'test', Descripcion_Gato: 'test', Imagen_Gato: 'test', },

        ]
        gatos.value.splice(0, gatos.value.length, ...data)*/
    }
    function createGato(gato: GatoDto) {
        //fetch(POST)
        //body: JSON.stringify()

        gatos.value.push(gato)
    }
    function deleteGato() { }
    function updateGato() { }


    async function fetchGato() {
        try {
            const response = await fetch("https://localhost:7278/api/Gato");

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data: GatoDto[] = await response.json();
            gatos.value = data;
            console.log('Gatos obtenidos:', data);
        } catch (error) {
            console.error('Error al obtener los gatos:', error);
        }
    }

    // REST
    // create, delete, updated....

    return {
        gatos,
        findAll,
        createGato,
        deleteGato,
        updateGato,
        fetchGato
    }
})