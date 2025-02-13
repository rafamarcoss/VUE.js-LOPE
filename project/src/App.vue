<template>
  <div id="app">
    <div id="header">
      <div id="img">
        <img src="./assets/logo.png">
      </div>
      <div id="texto">
        <h1>{{ msg }}</h1>
        <p>Usando HTML, CSS y JavaScript</p>
        <p>Usando el framework de Vue</p>
      </div>
    </div>
    <div id="nav">
      <ul>
        <li><router-link to='/'>HOME</router-link></li>
        <li><router-link to='/lunes'>LUNES</router-link></li>
        <li><router-link to='/martes'>MARTES</router-link></li>
        <li><router-link to='/miercoles'>MIERCOLES</router-link></li>
        <li><router-link to='/jueves'>JUEVES</router-link></li>
        <li><router-link to='/viernes'>VIERNES</router-link></li>
      </ul>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'APP Lope VUE.js'
    }
  }
}
</script>

