<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title class="text-h4 text-center">Preguntas Frecuentes (FAQ)</v-card-title>
            <v-divider></v-divider>
            <v-expansion-panels multiple>
              <v-expansion-panel v-for="(categoria, index) in faq" :key="index">
                <v-expansion-panel-title>{{ categoria.titulo }}</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-list density="compact">
                    <v-list-item v-for="(pregunta, idx) in categoria.preguntas" :key="idx" class="faq-item">
                      <v-list-item-title class="faq-title">{{ pregunta.pregunta }}</v-list-item-title>
                      <v-list-item-subtitle class="faq-text">{{ pregunta.respuesta }}</v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 500; 
}

.faq {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.faq-question {
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.faq-answer {
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
  position: relative;
  z-index: 1;
}

/* Asegurar que el contenido respete la cabecera */
body {
  padding-top: 80px; 
}

  </style>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const faq = ref([
    {
      titulo: "Sobre la plataforma",
      preguntas: [
        { pregunta: "¿Qué es esta página?", respuesta: "Es una plataforma que reúne a todas las protectoras de Zaragoza para facilitar la adopción responsable de gatos." },
        { pregunta: "¿Cómo funciona la web?", respuesta: "Puedes ver los gatos en adopción, conocer más sobre ellos y contactar con la protectora responsable para iniciar el proceso de adopción." },
        { pregunta: "¿La web pertenece a una protectora específica?", respuesta: "No, la plataforma centraliza información de varias protectoras de Zaragoza para que sea más fácil encontrar gatos en adopción." },
      ],
    },
    {
      titulo: "Sobre el proceso de adopción",
      preguntas: [
        { pregunta: "¿Cómo puedo adoptar un gato?", respuesta: "Selecciona el gato que te interesa, contacta con la protectora correspondiente y sigue los pasos que ellos te indiquen." },
        { pregunta: "¿Cuánto cuesta adoptar un gato?", respuesta: "Depende de cada protectora. Algunas piden una donación para cubrir gastos veterinarios como vacunas, desparasitación y esterilización." },
        { pregunta: "¿Cuáles son los requisitos para adoptar?", respuesta: "Cada protectora tiene sus requisitos, pero generalmente incluyen ser mayor de edad, tener un entorno adecuado para el gato y comprometerse a su bienestar." },
        { pregunta: "¿Puedo adoptar si vivo fuera de Zaragoza?", respuesta: "Algunas protectoras permiten adopciones fuera de la ciudad, pero puede haber requisitos adicionales como una visita previa al hogar." },
        { pregunta: "¿Puedo adoptar si ya tengo otros animales?", respuesta: "Sí, pero la protectora evaluará si el gato es compatible con otros animales en el hogar." },
      ],
    },
    {
      titulo: "Sobre los gatos",
      preguntas: [
        { pregunta: "¿Los gatos están vacunados y esterilizados?", respuesta: "La mayoría de las protectoras entregan a los gatos vacunados, desparasitados y esterilizados (o con compromiso de esterilización si son muy jóvenes)." },
        { pregunta: "¿Puedo conocer al gato antes de adoptarlo?", respuesta: "Sí, la protectora te indicará cómo y dónde conocer al gato en persona." },
        { pregunta: "¿Qué pasa si el gato no se adapta a mi hogar?", respuesta: "Las protectoras suelen ofrecer asesoramiento y un periodo de adaptación. En caso extremo, podrían aceptar la devolución del gato para buscarle otra familia." },
        { pregunta: "¿Hay gatos sociables y otros más independientes?", respuesta: "Sí, cada gato tiene una personalidad única. Puedes preguntar a la protectora por el temperamento del gato antes de adoptarlo." },
      ],
    },
    {
      titulo: "Sobre la web y su uso",
      preguntas: [
        { pregunta: "¿Cómo puedo contactar con una protectora?", respuesta: "En la ficha de cada gato encontrarás un botón para contactar con la protectora correspondiente." },
        { pregunta: "¿Por qué algunos gatos desaparecen de la lista?", respuesta: "Porque han sido adoptados o ya no están disponibles." },
        { pregunta: "¿Puedo hacerme voluntario en una protectora?", respuesta: "Sí, muchas protectoras buscan voluntarios. Contacta directamente con ellas para más información." },
        { pregunta: "¿Puedo hacer una donación a la web o a las protectoras?", respuesta: "La web no gestiona donaciones, pero cada protectora puede aceptar ayuda económica o en especie (alimento, arena, etc.)." },
        { pregunta: "¿Cómo puedo reportar un problema en la web?", respuesta: "Si encuentras un error o tienes sugerencias, puedes enviarnos un email a info@adopcioneszaragoza.com." },
      ],
    },
  ]);
  </script>
  