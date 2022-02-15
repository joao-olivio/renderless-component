<template>
  <div id="app">

    <div ref="intersection" style="margin-top: 120vh; height: 10px; width: 10px; border: 1px solid red;">

    </div>
    <data-fetcher :lazyLoading="true" :serverPath="api">
      <template v-slot:default="slotScope">
        <div>
          <p v-if="slotScope.loading">Loading...</p>
          <ul>
            <li :key="$index" v-for="(item, $index) in slotScope.data" @click="slotScope.onItemClick(item.name)">
              {{item.name}}
            </li>
          </ul>  
        </div>
      </template>
    </data-fetcher>
  </div>
</template>

<script>
import dataFetcher from './components/dataFetcher.vue';

//eslint-disable-next-line no-unused-vars
const API_URL = 'https://jsonplaceholder.typicode.com/users'

export default {
  name: 'App',
  components: {
    dataFetcher
  },
  data() {
    return {
      api: API_URL
    }
  },
  mounted() {
    
  }
}
</script>

<style>
 #app {
   padding-bottom: 1000px;
 }
</style>
