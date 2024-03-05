/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

    //INPUT DATI

        //inserire i km da percorrere
    const userDist = parseInt(prompt('Inserire numero di km da percorrere.'));
    console.log(userDist);
        //inserire l'età del passeggero
    const userAge = parseInt(prompt('Inserire età del passeggero.'));
    console.log(userAge);

    //ELABORAZIONE DATI

        // Calcola il prezzo del biglietto per i chilometri inseriti
    let ticketPrice = userDist * 0.21;
    
        // Applica lo sconto in base all'età del passeggero
    if (userAge < 18) {
        // sconto del 20% per i minorenni
        ticketPrice = ticketPrice * 20 / 100; 
        
    } else if (userAge > 65) {
        // sconto del 40% per gli over 65
        ticketPrice = ticketPrice * 40 / 100;
    }
    
        // Arrotonda a due decimali
    ticketPrice = ticketPrice.toFixed(2);
    
    //OUTPUT DATI
    
    console.log(ticketPrice);
    const userMessage = 'Il costo del biglietto è ' + ticketPrice + '€';
    document.getElementById("user-message").innerHTML = userMessage;