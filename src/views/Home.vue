<template>
  <div>
    <h1 id="titre">Site Météo</h1>
    <div id="temp"></div>
    <h3 id="titre2">Notre site fournis la météo des capitales suivantes : Paris, Londres</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  props: {
    msg: String
  },
  data(){
    return{

    };
  },
  mounted(){
  console.log('cc')
{
window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=30993fcfddf5e5dc0d751ef71eb430e4%27%27')
.then(res => res.json())
.then(resJson => document.getElementById("temp").innerHTML = (resJson.main.temp));
  }
  }
  }

  
</script>

<style>
</style>