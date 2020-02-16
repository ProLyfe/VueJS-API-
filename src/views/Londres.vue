<template>
  <div>
    <h1 id="titre">Météo de Londres</h1>
    <h2 id="temp"></h2>
    <h2 id="temp2">°C</h2>
  </div>
</template>

<script>
export default {
  name: 'Londres',
  components: {
  },
  props: {
    msg: String
  },
  data(){
    return{
      
      info: null
    };
  },
  mounted(){
    window.fetch('http://api.openweathermap.org/data/2.5/weather?q=London&lang=fr&units=metric&appid=30993fcfddf5e5dc0d751ef71eb430e4')
    .then(res => res.json())

    .then(resJson => document.getElementById("temp"). innerHTML =(resJson.main.temp));
  }
  }
</script>

<style>


</style>