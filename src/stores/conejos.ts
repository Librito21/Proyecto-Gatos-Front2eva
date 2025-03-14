import { ref } from 'vue'
import { defineStore } from 'pinia'
import type ConejoDto from './dtos/conejo.dto'

export const useConejosStore = defineStore('conejos', () => {
    let conejos = ref<ConejoDto[]>([])
    let conejosFiltrados = ref<ConejoDto[]>([])

    // Estados para los filtros
    const filtros = ref({
        edadMin: 1,
        edadMax: 15,
    })

    async function fetchConejo() {
        try {
            const response = await fetch("https://localhost:7278/api/Conejo");

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data: ConejoDto[] = await response.json();
            conejos.value = data;
            aplicarFiltros() // Aplicar filtros después de cargar los datos
            console.log('Conejos obtenidos:', data);
        } catch (error) {
            console.error('Error al obtener los conejos:', error);
        }
    }

    // Función para actualizar los filtros
    async function actualizarFiltros(nuevosFiltros) {
        filtros.value = { ...filtros.value, ...nuevosFiltros }
        aplicarFiltros()
    }

    async function aplicarFiltros() {
        conejosFiltrados.value = conejos.value.filter(conejo => {
            return conejo.edad >= filtros.value.edadMin &&
                conejo.edad <= filtros.value.edadMax
        })
    }

    async function createConejo(nuevoConejo: ConejoDto) {
        try {
            const response = await fetch("https://localhost:7278/api/Conejo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoConejo)
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data: ConejoDto = await response.json();
            conejos.value.push(data)
            console.log('Conejo creado:', data);
        } catch (error) {
            console.error('Error al crear el conejo:', error);
        }
    }
    return {
        conejos,
        conejosFiltrados,
        filtros,
        fetchConejo,
        createConejo,
        actualizarFiltros
    }
})