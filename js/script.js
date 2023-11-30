// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// definizione numeri casuali
const numCasuali = [];

const randomNums = document.getElementById("numbers");

// Settiamo variabili elementi in pagina una volta terminato conto alla rovescia
const nextButton = document.getElementById("next");

const nextTitle = document.getElementById("title");

// conto alla rovescia di 30 sec
const timer = document.getElementById("orologio");

// Ciclo for per creazione numeri casuali
for (i = 0; i <= 5; i++) {
    numCasuali.push(getRandomNum(1, 200));
    randomNums.innerHTML = numCasuali;
}

console.log(numCasuali);


// Settiamo una variabile di inizio conteggio
let seconds = 31;

// Variabile per checkare se abbiamo trovato un numero dell'array
let findNum = 0;

// Richiamo un blocco di istruzioni ogni tot tempo
const clock = setInterval(
    function() {
        if(seconds === 1) {
            console.log("Fine Tempo!!!");
            timer.innerHTML = "Tempo Terminato!";

            randomNums.innerHTML = "";

            nextTitle.innerHTML = "Inserisci i numeri visti precedentemente:"

            nextTitle.classList.add("d-block");
            nextButton.classList.add("d-block");

            clearInterval(clock);

                nextButton.addEventListener("click", 

                    function() {
                        // Creazione ciclo 
                        for (i = 1; i <= 5; i++) {

                            let numero = parseInt(prompt(`Inserisci il ${i}° numero`));
                            
                            // Inserimento condizione
                            if (numCasuali.includes(numero)) {
                                console.log(`Hai indovinato il numero ${numero}`);
                                findNum++;
                            } else {
                                console.log(`Il numero ${numero} non è presente tra quelli mostrati`);
                            }

                        }
                        
                        if(findNum >= 1) {
                            console.log("Complimenti!!! Hai indovinato ${findNum} numeri!");
                            alert(`Complimenti!!! Hai indovinato ${findNum} numeri!`);
                        } else {
                            console.log("Che peccato! Non sei riuscito ad indovinare nessun numero! :C");
                            alert(`Che peccato! Non sei riuscito ad indovinare nessun numero! :C`);
                        }
                    }
                )

        } else {
            seconds--;
            timer.innerHTML = seconds;
            console.log(seconds);
        }
    },
    1000
)





// FUNZIONE NUMERI RANDOMICI
function getRandomNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(200);

    return Math.floor(Math.random() * (max - min + 1) + min);
}