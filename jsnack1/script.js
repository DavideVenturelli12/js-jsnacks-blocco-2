//debug
console.log('JS OK!')

/*
   Crea un array di numeri interi e fai la somma di tutti gli elementi 
   che sono in posizione dispari.
*/

//creo un array vuoto
let arrayNumeri = [];

let somma = 0;

//creo un ciclo in cui vengono inseriti dei valori dall'utente 
//all'interno dell'array, verificando che valori siano numeri 
for (i = 0; i < 10; i++) {

    let numeriInseriti;

    while (isNaN(numeriInseriti)) {
        numeriInseriti = parseInt(prompt(`${i + 1} - inserisci un numero`));
    }
    arrayNumeri.push(numeriInseriti);
}
//stampa dei valori inseriti nell'array
console.log(arrayNumeri);

//creo un ciclo di verifica nel quale vengono individuate le posizioni
//dispari all'inteno dell'array e i numeri in quelle posizioni vengono
//sommati tra loro
for (let i = 0; i < arrayNumeri.length; i++) {
    if (i % 2 !== 0) {
        somma = somma + arrayNumeri[i];
        //stampa delle posizioni dispari dcell'array
        console.log('posizioni dispari: ', i);
    }
}

//stampa della somma dei numeri nelle posizioni dispari
console.log('la somma dei numeri nelle posizioni dispari è ', somma);
