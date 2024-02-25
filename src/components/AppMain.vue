<script>
import { state } from '../state.js';
import FilterData from './FilterData.vue';
import MoviesAndTVList from './MoviesAndTVList.vue';

export default {
    name: 'AppMain',
    components: { FilterData, MoviesAndTVList },
    data() {
        return {
            state
        }
    }
}
</script>
 
<template>
    <main>
        <FilterData></FilterData>
        <MoviesAndTVList></MoviesAndTVList>
    </main>
</template>
 
<style scoped>
main {
    background-color: var(--bflix-gray);
}
</style>