const input = document.getElementById("parola");
const bottone = document.getElementById("verifica");
const risultato = document.getElementById("risultato");

bottone.addEventListener("click", () => {
    let testo = input.value.toLowerCase();

    testo = testo.replace(/\s+/g, "");

    const invertita = testo.split("").reverse().join("");

    if (testo && testo === invertita) {
        risultato.style.backgroundColor = "green";
        risultato.textContent = "✅ Palindroma";
    } else {
        risultato.style.backgroundColor = "red";
        risultato.textContent = "❌ Non palindroma";
    }
});
