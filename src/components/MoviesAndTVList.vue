<script>
import MoviesList from './MoviesList.vue';
import TVSeriesList from './TVSeriesList.vue';
import { state } from '../state.js';

export default {
    name: 'MoviesAndTVList',
    components: { MoviesList, TVSeriesList },
    data() {
        return {
            state
        }
    }
}
</script>
 
<template>
    <MoviesList></MoviesList>
    <TVSeriesList></TVSeriesList>
</template>
 
<style scoped>
.card {
    position: relative;
    background-color: black;

    & img {
        width: 100%;
    }

    & .info {
        display: none;
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: black;
        color: var(--bflix-gray);
        font-size: 0.7rem;
        padding: 1rem;
    }

    & img:hover {
        display: none;
    }

    & img:hover+.info {
        display: block;
    }
}

.caption {
    margin-right: 0.5rem;
    color: var(--bflix-logo);
}

i {
    color: yellow;
}

.noOut {
    width: 70%;
    margin-top: 15rem;
    margin-bottom: 18rem;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
    text-align: center;
    font-size: 2rem;
    color: var(--bflix-logo);
    border: 2px solid var(--bflix-logo);
    background-color: var(--bflix-dark);
    border-radius: 10px;
}

.separator {
    background-color: var(--bflix-dark);
    color: var(--bflix-logo);
    width: 30%;
    font-size: 1rem;
    text-align: center;
    margin: 2.5rem 0;
    padding: 1rem;
    border: 2px solid var(--bflix-logo);
    border-radius: 5px;
}

li {
    padding: 0.3rem 0;
}
</style>