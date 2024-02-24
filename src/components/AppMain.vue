<script>
import { state } from '../state.js';
import AppFooter from './AppFooter.vue';
import FilterData from './FilterData.vue';
import MoviesAndTVList from './MoviesAndTVList.vue';

export default {
    name: 'AppMain',
    components: { FilterData, AppFooter, MoviesAndTVList },
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

        <AppFooter v-if="state.stringSearch != '' && (state.out_movie.length != 0 || state.out_tv.length != 0)"></AppFooter>
    </main>
</template>
 
<style scoped>
main {
    background-color: var(--bflix-gray);
}
</style>