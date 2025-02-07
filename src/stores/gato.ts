import { defineStore } from "pinia";
import { ref } from "vue";
import GatoDto from "./dtos/gato.dto";

export const useGatoStore = defineStore('gatos', () => {
    const gatos = ref(new Array<GatoDto>())

    function findAll() {
        // fetch()
        // res.json()
        // data
        let data = [
            { id: 0, Nombre: 'Naranjito', Raza: 'Naranja', Edad: 3, Sexo: 'Macho', Imagen: './Images/naranjito.png' },
            { id: 1, Nombre: 'Martita', Raza: 'Tricolor', Edad: 7, Sexo: 'Hembra', Imagen: './Images/martita.png' },
        ]
        gatos.value.splice(0, gatos.value.length, ...data)
    }        
    function createGato(gato: GatoDto) {
        // fetch(POST)
        // body: JSON.stringify()

        gatos.value.push(gato)
    }
    function deleteGato() {}
    function updateGato() {}

    return {    
        gatos,
        findAll, 
        createGato, 
        deleteGato, 
        updateGato 
    }
}) 