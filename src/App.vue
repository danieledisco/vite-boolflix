<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { state } from './state.js';
export default {
  name: 'App',
  data() {
    return {
      state
    };
  },
  components: { AppHeader, AppMain }
}
</script>
  
<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>
 
<style scoped></style>


