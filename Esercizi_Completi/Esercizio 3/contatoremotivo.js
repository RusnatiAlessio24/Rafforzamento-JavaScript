
let contatore = 0;

const counterEl = document.getElementById("counter");

function aggiornaStile() {
  counterEl.textContent = contatore;

  
  if (contatore > 0) {
    counterEl.style.color = "green";
  } else if (contatore < 0) {
    counterEl.style.color = "red";
  } else {
    counterEl.style.color = "black";
  }

  
  if (contatore > 10) {
    counterEl.style.fontWeight = "bold";
  } else {
    counterEl.style.fontWeight = "normal";
  }
}

function incrementa() {
  contatore++;
  aggiornaStile();
}

function decrementa() {
  contatore--;
  aggiornaStile();
}
