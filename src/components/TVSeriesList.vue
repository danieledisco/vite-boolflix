<script>
import { state } from '../state.js';
export default {
    name: 'TVSeriesList',

    data() {
        return {
            state
        }
    }
}
</script>
 
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="tv in state.out_tv">
                <div class="card">
                    <!-- A volte l'informazione del Data Base non presenta immagine .... -->
                    <img v-if="tv.poster_path != null" v-bind:src=state.compose_image_url(tv.poster_path) alt="">
                    <!-- ... senza immagine si mostra un rettamgolo cho la scritta che l'immagine non è presente nel db -->
                    <img v-else src="/noPoster.jpg" alt="">
                    <div class="info">
                        <ul>
                            <li class="caption">Title:</li>
                            <li>{{ tv.name }}</li>
                            <li class="caption">Original title:</li>
                            <li>{{ tv.original_name }}</li>
                            <li class="caption">Overview:</li>
                            <li>{{ tv.overview }}</li>
                            <li v-if="tv.origin_country.length > 0" class="caption">Country: <span
                                    v-bind:class="state.makeFlags(tv.origin_country[0])"></span> </li>
                            <li v-else class="caption">Country: <span
                                    v-bind:class="state.makeFlags(tv.original_language)"></span></li>
                            <!-- Dopo aver riportato il voto medio da 10 a 5 si effettua un loop per inserire le stelle piene 
                                         e poi un loop per inseire le stelle vuote per un totale di 5 -->
                            <li class="caption">Rate:
                                <span v-for="i in state.evalStars(tv.vote_average)"> <i class="fa-solid fa-star"></i></span>
                                <span v-for="i in 5 - state.evalStars(tv.vote_average)"><i
                                        class="fa-regular fa-star"></i></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    padding: 0.2rem 0;
}
</style>