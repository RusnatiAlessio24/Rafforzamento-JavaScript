function confrontaNumeri() {
  
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);

  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");

 
  box1.textContent = n1;
  box2.textContent = n2;

  
  box1.style.backgroundColor = "lightgray";
  box2.style.backgroundColor = "lightgray";

  
  if (n1 > n2) {
    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "gray";
  } else if (n1 < n2) {
    box1.style.backgroundColor = "gray";
    box2.style.backgroundColor = "green";
  } else {
    box1.style.backgroundColor = "yellow";
    box2.style.backgroundColor = "yellow";
  }
}
