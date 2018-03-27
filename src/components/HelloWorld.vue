<template>
<div id="timesheet">
  <div class="wrapper">
        <div class="row">
           <div v-for="t in timesheet" :key="t.track_time_id">
              <div class="col-md-4 cards">
            <div>
              <h3>{{ t.date }}</h3>
              <p>{{ t.hours_clocked }}</p>
            </div>
           </div>
        </div>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import {HTTP} from './http-common';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'timesheet',
  data () {
    return {
      timesheet: [],
      errors:[]
    }
  },
  async created(){
    try{
      const response =   await HTTP.get(`timesheet/04ed9b2f-a227-418b-9b8c-47d3a883edd`)
       this.timesheet = response.data
    } catch (e){
 this.errors.push(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
