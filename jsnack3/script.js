//debug
console.log('JS OK!')

/*
   Crea due array che hanno un numero di elementi diversi. 
   Aggiungi elementi casuali all’array che ha meno elementi,
    fino a quando ne avrà tanti quanti l’altro.
*/

const arrayLungo = [12, 34, 6, 7, 54, 324, 67, 342, 1, 23, 69];
console.log(arrayLungo);
const arrayCorto = [134, 467, 345];
console.log(arrayCorto);
let check = false;

for (i = 0; i <= arrayLungo.length; i++) {
    if (arrayLungo.length > arrayCorto.length) {
        let numeriCasuali = Math.floor(Math.random() * 500);
        arrayCorto.push(numeriCasuali);
        check = false;
    }
}
if (arrayLungo.length = arrayCorto.length) {
    check = true;
    console.log(arrayCorto);
}

