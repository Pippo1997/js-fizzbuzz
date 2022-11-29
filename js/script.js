// PROBLEMA: Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”:

// 1-Stampo in console dei numeri che vanno da 1 a 100
//     1-1 Per i multipli di 3 stampo in console “Fizz”
//     1.2 Per i multipli di 5 stampo in console “Buzz”
//     1.3 Per i multipli sia di 3 che 5 stampo in console “FizzBuzz”
// 2-Collego al DOM attraveso append()
// 3-Stilizzo il DOm e mostro a video la soluzione “Fizz” “Buzz” “FizzBuzz”

const container = document.querySelector(`.container`);

for  (let i = 1 ; i<=100 ; i++){

    let box;

    if (i % 15 == 0){
        console.log(`FizzBuzz`);
        box = `<div class="box box-pink">FizzBuzz</div>`;
    }

    else if (i % 5 == 0){
        console.log(`Buzz`);
        box = `<div class="box box-yellow">Buzz</div>`;
    }
    
    else if (i % 3 == 0){
        console.log(`Fizz`);
        box = `<div class="box box-green">Fizz</div>`;
    }

    else{
        console.log(i);
        box = `<div class="box box-blue">${i}</div>`;
    }

    container.innerHTML += box;
}