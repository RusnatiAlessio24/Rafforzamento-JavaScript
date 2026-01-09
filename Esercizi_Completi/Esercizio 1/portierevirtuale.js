function saluta() {
  const inputNome = document.getElementById("nome");
  const genere = document.getElementById("genere").value;
  const messaggio = document.getElementById("messaggio");

  const nome = inputNome.value;

  inputNome.className = "";

  if (nome === "") {
    messaggio.textContent = "Per favore inserisci il nome.";
    inputNome.classList.add("rosso");
  } else if (genere === "uomo") {
    messaggio.textContent = "Benvenuto, " + nome + "!";
    inputNome.classList.add("blu");
  } else if (genere === "donna") {
    messaggio.textContent = "Benvenuta, " + nome + "!";
    inputNome.classList.add("rosa");
  } else {
    messaggio.textContent = "Seleziona un genere.";
  }
}
