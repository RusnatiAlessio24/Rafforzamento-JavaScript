function generaTabellina() {
  const numero = Number(document.getElementById("numero").value);
  const lista = document.getElementById("lista");

  
  lista.innerHTML = "";

  
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = `${numero} x ${i} = ${numero * i}`;

    
    if (i % 2 === 0) {
      li.style.backgroundColor = "#f0f0f0";
    } else {
      li.style.backgroundColor = "white";
    }

    lista.appendChild(li);
  }
}
