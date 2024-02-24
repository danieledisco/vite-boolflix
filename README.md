# Nota bene
Originariamente avevo impostato la App con 2 pulsanti di ricerca.
Tutte le fasi le avevo fatte e si trovano nel repo vite-boolflix_old
presente su github.
Avendo successivamente letto che era "mandatorio" avere un solo pulsante di ricerca,
ho iniziato a modificare il codice ma a causa di un componente il cui nome era stato
scritto male, VSCode mi riproponeva sempre il nome vecchio.
Non sapendo come eliminare questo problema, ho deciso di inizializzare 
una App nuova.

# Step  0 - Progettazione
Progettare la struttura del global state sulla linea degli esercizi svolti 
nei giorni precedenti.

# Step 1 - Layout base
Creare un layout base con una searchbar (una input e un button) in cui possiamo 
scrivere completamente o parzialmente il nome di un film.
Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono 
ciò che ha scritto l’utente. Vogliamo dopo la risposta dell’API visualizzare 
a schermo i seguenti valori per ogni film trovato: 
 * Titolo
 * Titolo Originale
 * Lingua
 * Voto (medio)

# Step 2 - Film e serie tv
## Primo task
Ottenuti i risultati, trasformiamo la stringa statica della lingua in una vera e 
propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo 
la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

## Secondo task
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere 
sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere 
alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, 
simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

# Step 3 - Copertina e valutazione
## Primo task
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie 
al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché 
poi potremo generare da quella porzione di URL tante dimensioni diverse. 
Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi 
aggiungere la dimensione che vogliamo generare 
(troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) 
per poi aggiungere la parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

## Secondo task
Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci
di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti 
vuote (troviamo le icone sempre su FontAwesome). Arrotondiamo sempre per eccesso all’unità successiva,
non gestiamo icone mezze piene (o mezze vuote :P)

## Step 4 - Interfaccia completa
Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un 
layout completo simil-Netflix: un header che contiene logo e search bar.
Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui 
lo sfondo è rappresentato dall’immagine di copertina (consiglio la poster_path con w342)
Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti 
più la overview