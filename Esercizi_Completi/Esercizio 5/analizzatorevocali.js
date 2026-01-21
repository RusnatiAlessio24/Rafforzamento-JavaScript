const bottone = document.getElementById("btnAnalizza");
const textarea = document.getElementById("testo");
const risultato = document.getElementById("risultato");

bottone.addEventListener("click", () => {
    const testo = textarea.value.toLowerCase();
    const vocali = "aeiou";
    let conteggio = 0;

    
    for (let char of testo) {
        if (vocali.includes(char)) {
            conteggio++;
        }
    }

    
    risultato.style.display = "block";
    risultato.textContent = `Numero di vocali: ${conteggio}`;

    
    if (conteggio > 10) {
        risultato.style.fontSize = "24px";
    } else {
        risultato.style.fontSize = "16px";
    }
});
