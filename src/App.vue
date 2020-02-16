<template>
  <div id="app">
    
  <b-nav id="nav">
    <router-link to="/" id="link">Home</router-link>
    <router-link to="/Paris" id="link">Météo de Paris</router-link>
    <router-link to="/Londres" id="link">Météo de Londres</router-link>
  </b-nav>

  <router-view/>

  </div>
</template>

<script>

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  data() {
    return {
     
      }  
          },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #01A7C2;
  height: 100vh

}

body {
  background-color: rgb(179, 158, 114);
}

#titre {
  color: white;
  margin-left: 0%;
}

#titre2 {
  color: white;
  margin-left: 0%;
  margin-top: 300px
}
#temp {
    color: white;
    text-align: center;
    font-size: 110;
    /* border-style: solid; */
    margin-top: 20px;
    
}



#link {
  color: white;
  padding-left: 30px;
}

#temp2 {
    color: white;
    text-align: center;
    font-size: 180;
    /* border-style: solid; */
    margin-top: 10px;
    
}
</style>