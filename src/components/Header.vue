<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useAutenticacion } from '@/stores/Autentificacion';

const Autenticacion = useAutenticacion();
const { usuario } = storeToRefs(Autenticacion);
const mostrarMenu = ref(false);
const isHovering = ref(false);
const offsets = ref([0, 0, 0]);

onMounted(() => {
  Autenticacion.cargarUsuarioDesdeLocalStorage();
  console.log("Usuario cargado en el Header:", usuario.value);

  const canvas = document.getElementById('pawCanvas') as HTMLCanvasElement;
  if (canvas) {
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      drawPaw(ctx);
      canvas.addEventListener('mouseenter', () => {
        isHovering.value = true;
        animateRaise(ctx);
      });
      canvas.addEventListener('mouseleave', () => {
        isHovering.value = false;
        resetPaw(ctx);
      });
    }
  }
});

const toggleMenu = () => {
  mostrarMenu.value = !mostrarMenu.value;
};

function drawPaw(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, 200, 200);

  // Huella grande (Palma)
  ctx.beginPath();
  ctx.arc(100, 120, 40, 0, Math.PI * 2);
  ctx.fillStyle = "#FF5500";
  ctx.strokeStyle = "#3B2F2F";
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.stroke();

  // Círculo interior en la palma
  ctx.beginPath();
  ctx.arc(100, 132, 27, 0, Math.PI * 2);
  ctx.fillStyle = "whitesmoke";
  ctx.fill();

  // Dedos
  drawCircle(ctx, 60, 70 + offsets.value[0], 20);
  drawCircle(ctx, 100, 60 + offsets.value[1], 22);
  drawCircle(ctx, 140, 70 + offsets.value[2], 20);
}

function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = "#FF5500";
  ctx.strokeStyle = "#3B2F2F";
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.stroke();
}

function animateRaise(ctx: CanvasRenderingContext2D) {
  const maxOffset = -30;
  let index = 0;

  function raiseStep() {
    if (!isHovering.value) return;

    if (index < 3) {
      offsets.value[index] = maxOffset;
      index++;
      drawPaw(ctx);
      setTimeout(raiseStep, 200); // Aumentar el tiempo para hacerlo más lento
    } else {
      setTimeout(() => resetPaw(ctx), 600); // También hacer más lento el regreso
    }
  }

  raiseStep();
}

function resetPaw(ctx: CanvasRenderingContext2D) {
  offsets.value = [0, 0, 0];
  drawPaw(ctx);
}
</script>

<template>
  <main>
    <header>
      <RouterLink to="/">
        <canvas id="pawCanvas"></canvas>
      </RouterLink>
      <div class="text">
        <nav>
          <RouterLink to="/gato">Gatos</RouterLink>
          <RouterLink to="/protectoras">Protectoras</RouterLink>
        </nav>
        <div class="usuario">
          <template v-if="!usuario">
            <RouterLink to="/iniciar-sesion">Iniciar Sesion‎ ‎ ‎</RouterLink>
            <RouterLink to="/registrarse">Registrarse</RouterLink>
          </template>
          <template v-else>
            <div class="usuario-menu">
              <svg @click="toggleMenu" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" fill="#FF5500" stroke="#3B2F2F" stroke-width="2" />
                <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="#3B2F2F" stroke-width="2" />
              </svg>
              <div v-if="mostrarMenu" class="datos-usuario">
                <RouterLink to="/perfil"><span>Mi Perfil</span></RouterLink>
                <RouterLink to="/perfil"><span>Deseados</span></RouterLink>
                <button class="logout-btn" @click="Autenticacion.cerrarSesion">Cerrar sesión</button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </header>
  </main>
</template>


<style scoped lang="scss">
/* 🔹 Mobile-First */
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  width: 100%;
}

.text {
  width: 200px;
}

nav {
  display: flex;
  width: 170px;
  gap: 5px;
  justify-content: center;
}

canvas {
  display: block;
  width: 80px;
  height: 80px;
}

.usuario-menu {
  position: relative;
  display: inline-block;
}

.datos-usuario {
  position: absolute;
  left: -60px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 10px;
  
  & a {
    background-color: #FF5500;
    color: white;
    margin-bottom: 15px;
    padding: 10px 15px;
    border-radius: 10px;
  }
}

.logout-btn {
  margin-top: 5px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

@media (min-width: 788px) {
  header {
    justify-content: flex-start;
    padding: 15px 30px;
  }

  .text {
    display: flex;
    width: 610px;
  }

  nav {
    flex-grow: 1;
    display: flex;
    justify-content: start;
  }

  .usuario {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
  }
}

@media (min-width: 1010px) {
  header {
    padding: 15px 150px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .text {
    width: 1310px;
  }

  svg {
    width: 80px;
    height: 80px;
  }

  nav {
    gap: 20px;
    align-items: center;
  }

  .usuario {
    gap: 20px;
  }
}
</style>
