<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useConejosStore } from "@/stores/conejos.ts";

const conejosStore = useConejosStore();
const mostrarModal = ref(false);
const nuevoConejo = ref({
    id_Conejo: 0,  // Se genera en la API, pero en el frontend puede ser un valor temporal
    nombre_Conejo: "",
    raza: "",
    edad: 0,
    sexo: "",
    esterilizado: false,
    descripcion_Conejo: "",
    imagen_Conejo: "",
    id_Protectora: 1
});

onMounted(() => {
    conejosStore.fetchConejo();
});

const crearConejo = async () => {
    try {
        await conejosStore.createConejo(nuevoConejo.value);
        alert("Conejo agregado exitosamente");
        // Limpiar formulario
        nuevoConejo.value = { id_Conejo: 0, nombre_Conejo: "", raza: "", edad: 0, sexo: "", esterilizado: false, descripcion_Conejo: "", imagen_Conejo: "", id_Protectora: 1 };
    } catch (error) {
        console.error("Error al agregar el conejo:", error);
    }
};
</script>

<template>
    <div class="admin-conejos">
        <h2 class="admin-conejos__titulo">Gestión de Conejos</h2>

        <div class="admin-conejos__formulario">
            <h3 class="admin-conejos__subtitulo">Agregar Nuevo Conejo</h3>
            <form @submit.prevent="crearConejo" class="admin-conejos__form">
                <input v-model="nuevoConejo.nombre_Conejo" placeholder="Nombre del conejo" required>
                <input v-model="nuevoConejo.raza" placeholder="Raza" required>
                <input v-model.number="nuevoConejo.edad" type="number" placeholder="Edad" required>
                <input v-model="nuevoConejo.sexo" placeholder="Sexo" required>
                <input v-model="nuevoConejo.imagen_Conejo" placeholder="URL de imagen" required>
                <button type="submit" class="admin-conejos__boton">Agregar Conejo</button>
            </form>
            <div class="admin-conejos__lista">
                <h3 class="admin-conejos__subtitulo">Conejos Registrados</h3>
                <div class="admin-conejos__conejos">
                    <div v-for="conejo in conejosStore.conejos" :key="conejo.id_Conejo" class="admin-conejos__conejo">
                        <div class="admin-conejos__datos">
                            <div><strong>Nombre:</strong> {{ conejo.nombre_Conejo }}</div>
                            <div><strong>Raza:</strong> {{ conejo.raza }}</div>
                            <div><strong>Edad:</strong> {{ conejo.edad }} años</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.admin-conejos {
    padding: $espacio-grande;
    max-width: 800px;
    margin: auto;
    text-align: center;

    &__titulo {
        font-size: 2rem;
        margin-bottom: $espacio-mediano;
    }

    &__subtitulo {
        font-size: 1.5rem;
        margin-bottom: $espacio-pequeno;
    }

    &__formulario {
        margin-bottom: $espacio-grande;
    }

    &__form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;

        input {
            padding: $espacio-mediano;
            border: 1px solid $border-gris2;
            border-radius: $espacio-pequeno;
        }

        label {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        button {
            background: $color-principal;
            color: $color-blanco;
            padding: $espacio-pequeno $espacio-mediano;
            border: none;
            border-radius: $espacio-pequeno;
            cursor: pointer;
            transition: background 0.3s;

            &:hover {
                background: $color-principal-oscuro;
            }
        }   
    }

    &__lista {
        display: flex;
        flex-direction: column;
        gap: $espacio-mediano;
    }

    &__conejo {
        display: flex;
        gap: 10px;
        padding: $espacio-pequeno;
        border: $border-gris1;
        border-radius: $espacio-pequeno;
        box-shadow: $sombra-contenedor;
        background: $color-blanco;
    }

    &__datos {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
}

.v-card-text {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}



</style>