import { reactive } from 'vue';
import axios from 'axios';
export const state = reactive({
    /* La key per accedere al data base è congelata in una variabile */
    api_key: '016f962ecb95c317b3e0029c7c77989e',
    /* La parte di url comune alle richieste per il film e per le serie */
    base_api_url: 'https://api.themoviedb.org/3/search/',
    /* La parte di url comune alle richieste dei poster */
    base_image_url: 'https://image.tmdb.org/t/p/w342',
    /* Questa è la lista delle bandiere presenti lips/flag icons installato nell'applicazione tramite npm */
    available_flags: ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'arab', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf',
        'bg', 'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cefta', 'cf', 'cg',
        'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cp', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dg', 'dj', 'dk', 'dm', 'do', 'dz',
        'eac', 'ec', 'ee', 'eg', 'eh', 'er', 'es', 'es-ct', 'es-ga', 'es-pv', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb',
        'gb-eng', 'gb-nir', 'gb-sct', 'gb-wls', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu',
        'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'ic', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp',
        'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly',
        'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my',
        'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pc', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl',
        'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'sh-ac',
        'sh-hl', 'sh-ta', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th',
        'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um', 'un', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi',
        'vn', 'vu', 'wf', 'ws', 'xk', 'xx', 'ye', 'yt', 'za', 'zm', 'zw'],
    /* Stringa di ricerca inserita in pagina */
    stringSearch: '',
    /* Array contenente tutti i film trovati */
    out_movie: [],
    /* Array contenente tutte le serie tv trovate */
    out_tv: [],
    /* Variabile che serve ad evitare l'apparsa di no items found all'inizio dell'applicazione quando le lunghezze dei due array
        contenenti i risultati sono vuoti */
    initial: false,
    doResults: false,

    getMovieTV(url_movie, url_tv) {
        /* Cambio variabile per far, eventualmente apparire No items found */
        this.initial = true;
        /* Inizializzazione dei due vettori dei risultati per evitare il caso che in una ricerca che non produce dati
            siano presenti i risultati della ricerca precedente */
        this.out_movie = [];
        this.out_tv = [];

        axios.get(url_movie)
            .then(response => {
                this.out_movie = response.data.results;
            })
            .catch(error => {
                console.error(error);
            });
        axios.get(url_tv)
            .then(response => {
                this.out_tv = response.data.results;
            })
            .catch(error => {
                console.error(error);
            });
        if (this.stringSearch === '') {
            this.doResults = false
        }
        else {
            this.doResults = true
        }
    },
    compose_image_url(image) {
        let url;
        url = this.base_image_url + image;
        return url;
    },
    makeFlags(input) {
        /* Le iniziali standardizzate che individuano la lingua parlata, spesso non coincidono con le iniziali standardizzate
            che individuano il paese. Nel caso delle serie tv c'è il paese di origine nel caso dei film solo la lingua.
            Alcuni casi particolari sono stati risolti tramite un if ossia
            - inglese 
            - japponese
            - indiano
            - cinese
            - coreano
            - ceco  
            Poi si verifica se la sigla è presente nella lista delle bardiere riportate sopra e se c'è si associa altrimenti 
            si indica xx che corrisponde ad un rettangolo bianco*/
        console.log('input ' + input);
        let lc = input.toLowerCase();
        let out;
        if (lc === 'en')
            out = 'fi fi-gb';
        else if (lc === 'ja')
            out = 'fi fi-jp';
        else if (lc === 'hi')
            out = 'fi fi-in';
        else if (lc === 'zh')
            out = 'fi fi-cn';
        else if (lc === 'ko')
            out = 'fi fi-kr';
        else if (lc === 'cs')
            out = 'fi fi-cz';
        else if (lc === 'te')
            out = 'fi fi-in';
        else {
            if (this.available_flags.includes(lc))
                out = 'fi fi-' + lc;
            else
                out = 'fi fi-xx';
        }
        return out;

    },
    evalStars(num) {
        return Math.ceil(5. * num / 10.);
    }
})
