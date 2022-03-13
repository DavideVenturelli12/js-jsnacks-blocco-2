//debug
console.log('JS OK!')

/*
   Il software deve chiedere per 5 volte all’utente di inserire un numero. 
   Il programma stampa la somma di tutti i numeri inseriti. 
   Esegui questo programma in due versioni, con il for e con il while.
*/

//versione 1 con il for
/*
//creo un array vuoto
let arrayNumeri = [];

//creo un ciclo in cui vengono inseriti dei valori dall'utente 
for (i = 0; i < 5; i++) {
   //variabile dei numeri inseriti dall'utente
   let numeriInseriti;
   numeriInseriti = parseInt(prompt(`${i + 1} - inserisci un numero`));
   arrayNumeri.push(numeriInseriti);
}
//stampa dei valori inseriti nell'array
console.log(arrayNumeri);

//sommo i valori nell'array
let total = arrayNumeri.reduce((previous, next) => {
   return previous + next;
});
//stampa della somma dei valori dell'array
console.log(total);
*/

//versione 2 con il while

//creo un array vuoto
let arrayNumeri = [];

//creo un ciclo in cui vengono inseriti dei valori dall'utente 
//all'interno dell'array, verificando che valori siano numeri 
for (i = 0; i < 5; i++) {
   //variabile dei numeri inseriti dall'utente
   let numeriInseriti;

   while (isNaN(numeriInseriti)) {
      numeriInseriti = parseInt(prompt(`${i + 1} - inserisci un numero`));
   }
   arrayNumeri.push(numeriInseriti);
}
//stampa dei valori inseriti nell'array
console.log(arrayNumeri);

//sommo i valori nell'array
let total = arrayNumeri.reduce((previous, next) => {
   return previous + next;
});
//stampa della somma dei valori dell'array
console.log(total);
