<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <div id="cards-container">
      <div class="card" v-for="(asignatura, index) in asignaturas" :key="index">
        <img :src="asignatura.imagen_url" class="card-img" />
        <h2 class="nombre">{{ asignatura.nombre }}</h2>
        <h2 class="profesor">{{ asignatura.profesor }}</h2>
        <h2 class="descripcion">{{ asignatura.descripcion }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      msg: "Asignaturas 1º DAM",
      asignaturas: []
    };
  },
  mounted() {
    this.get_asignaturas();
  },
  methods: {
    get_asignaturas() {
      axios.get("http://192.168.1.50/mi-proyecto/api/get_asignaturas.php")
    .then(response => {
    this.asignaturas = response.data.data;
    })
    .catch(error => {
      console.error("Error al obtener los datos:", error);
    });

    }
  }
};
</script>
