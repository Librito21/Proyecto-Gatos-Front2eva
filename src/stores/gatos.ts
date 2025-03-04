import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type GatoDto from './dtos/gato.dto'

export const usegatosStore = defineStore('gatos', () => {
    let gatos = ref<GatoDto[]>([])
    let gatosFiltrados = ref<GatoDto[]>([])
    let gatosDeseados = ref<GatoDto[]>([]);

    // Estados para los filtros
    const filtros = ref({
        edadMin: 1,
        edadMax: 15,
        raza: ''
    })

    function cargarGatosDeseadosDesdeStorage() {
        const gatosDeseadosGuardados = JSON.parse(localStorage.getItem('gatosDeseados') || '[]');
        gatosDeseados.value = gatosDeseadosGuardados;
    }

    // Almacenar gatosDeseados en LocalStorage
    function guardarGatosDeseadosEnStorage() {
        localStorage.setItem('gatosDeseados', JSON.stringify(gatosDeseados.value));
    }


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
        aplicarFiltros() // Volver a aplicar los filtros cuando se agregue un gato
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
            aplicarFiltros() // Aplicar filtros después de cargar los datos
            console.log('Gatos obtenidos:', data);
        } catch (error) {
            console.error('Error al obtener los gatos:', error);
        }
    }

    // Función para actualizar los filtros
    function actualizarFiltros(nuevosFiltros) {
        filtros.value = { ...filtros.value, ...nuevosFiltros }
        aplicarFiltros()
    }

    // Función para aplicar los filtros actuales a la lista de gatos
    function aplicarFiltros() {
        gatosFiltrados.value = gatos.value.filter(gato => {
            // Filtrar por edad
            const edadEnRango = gato.edad >= filtros.value.edadMin &&
                gato.edad <= filtros.value.edadMax

            // Filtrar por raza (si hay una seleccionada)
            const razaCoincide = filtros.value.raza === '' ||
                gato.raza === filtros.value.raza

            return edadEnRango && razaCoincide
        })
    }

    async function obtenerGatosDeseados() {
        try {
            const response = await fetch('https://localhost:7278/api/Deseado');
            if (!response.ok) {
                throw new Error('Error al obtener los gatos deseados');
            }
            const data = await response.json();
            console.log('Datos obtenidos de la API (deseados):', data);

            // Ahora necesitamos obtener la información completa de cada gato
            const gatosCompletos = await Promise.all(
                data.map(async (deseado: any) => {
                    const gatoResponse = await fetch(`https://localhost:7278/api/Gato/${deseado.id_Gato}`);
                    if (!gatoResponse.ok) {
                        throw new Error(`Error al obtener el gato con id ${deseado.id_Gato}`);
                    }
                    return await gatoResponse.json();
                })
            );

            gatosDeseados.value = gatosCompletos;
        } catch (error) {
            console.error('Error al obtener los gatos deseados:', error);
        }
    }

    async function agregarGatoADeseados(idUsuario: number, id_Gato: number) {
        try {
            const response = await fetch('https://localhost:7278/api/Deseado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id_Usuario: idUsuario,
                    id_Gato: id_Gato,
                    fecha_Deseado: new Date().toISOString()
                })
            });

            if (!response.ok) {
                throw new Error('Error al agregar el gato a deseados');
            }

            // Actualizamos el estado de gatosDeseados y lo guardamos en LocalStorage
            gatosDeseados.value.push(id_Gato);
            guardarGatosDeseadosEnStorage(); // Guardamos en LocalStorage
            console.log(`Gato con ID ${id_Gato} agregado a deseados.`);
        } catch (error) {
            console.error('Error en agregarGatoADeseados:', error);
        }
    }

    // Eliminar un gato de los deseados usando el idDeseado
    async function eliminarGatoDeDeseados(idDeseado: number) {
        try {
            const response = await fetch(`https://localhost:7278/api/Deseado/${idDeseado}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el gato de deseados');
            }

            // Eliminamos el gato de la lista y actualizamos LocalStorage
            gatosDeseados.value = gatosDeseados.value.filter(gato => gato.id_Gato !== idDeseado);
            guardarGatosDeseadosEnStorage(); // Guardamos en LocalStorage
            console.log(`Gato con ID deseado ${idDeseado} eliminado de deseados.`);
        } catch (error) {
            console.error('Error en eliminarGatoDeDeseados:', error);
        }
    }

    return {
        gatos,
        gatosFiltrados,
        filtros,
        gatosDeseados,
        findAll,
        createGato,
        deleteGato,
        updateGato,
        fetchGato,
        actualizarFiltros,
        aplicarFiltros,
        obtenerGatosDeseados,
        agregarGatoADeseados,
        eliminarGatoDeDeseados,
        cargarGatosDeseadosDesdeStorage
    }
})