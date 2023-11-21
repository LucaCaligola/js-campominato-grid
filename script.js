// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed 
// emetto un messaggio in console con il numero della cella cliccata.


// prendiamo dove inserire i quadrati
const mainContainer = document.getElementById("#content")

// creaiamo una funzione per creare i quadrati

function getSquare() {
    const newSquareElement = document.createElement('div')
    newSquareElement.classList.add('square');
    return newSquareElement;
}

// crediamo un ciclo per inserire i quadrati e i numeri
for (let i = 1; i <= 100; i++) {

    
    mainContainer.appendChild(getSquare())
}




