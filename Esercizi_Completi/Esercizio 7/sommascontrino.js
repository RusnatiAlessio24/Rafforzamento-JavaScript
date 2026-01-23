const inputPrezzi = document.getElementById("prezzi");
const bottone = document.getElementById("calcolaBtn");
const totaleEl = document.getElementById("totale");
const messaggioEl = document.getElementById("messaggio");

bottone.addEventListener("click", function () {
    
    const valori = inputPrezzi.value;

    const arrayPrezzi = valori.split(",");

    let somma = 0;

    for (let prezzo of arrayPrezzi) {
        somma += Number(prezzo);
    }

    totaleEl.textContent = `Totale: €${somma}`;

    if (somma > 100) {
        totaleEl.style.color = "red";
        messaggioEl.textContent = "Budget Superato!";
    } else {
        totaleEl.style.color = "black";
        messaggioEl.textContent = "";
    }
});
