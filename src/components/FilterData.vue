<script>
import { state } from '../state.js';

export default {
    name: 'FilterData',
    data() {
        return {
            state
        }
    },
    methods: {
        searchMovieTv() {
            let url_movie;
            let url_tv
            url_movie = `${state.base_api_url}movie?api_key=${state.api_key}&query=${state.stringSearch}`
            url_tv = `${state.base_api_url}tv?api_key=${state.api_key}&query=${state.stringSearch}`
            state.getMovieTV(url_movie, url_tv)
        }
    }
}
</script>
 
<template>
    <div class="container">
        <input name="searchText" type="text" placeholder="Type movie or series here" v-model="state.stringSearch">

        <div class="buttonContainer">
            <button @click="searchMovieTv()">Search</button>
        </div>
    </div>
</template>
 
<style scoped>
.container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;

    &>input {
        font-size: 0.95rem;
        padding: 0.2rem 0;
        text-align: center;
        background-color: var(--bflix-ligth);
    }

    &>.buttonContainer {
        display: flex;
        text-align: center;

        & button {
            font-size: 1rem;
            padding: 0.2rem 0.2rem;
            margin: 0 0.2rem;
            border-radius: 0.3rem;
            color: var(--bflix-dark);
            border: 1px solid transparent;
        }

        & button:hover {
            color: var(--bflix-logo);
            border: 1px solid var(--bflix-logo);
            cursor: pointer;
        }


    }
}
</style>