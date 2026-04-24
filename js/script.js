<<<<<<< Updated upstream
=======
// Circulo dentro de panel que cambia de color
const createColor = document.querySelector("#create-color");
const header = document.querySelector("#header");
// ---------------------------------------------
// Boton que acepta colores
const btnRGB = document.querySelector("#btnRGB");
// Lista donde van colores elegidos
const lista = document.querySelector("#lista");
// ---------------------------------------------

// ---------------------------------------------
// Probablemente deprecado
// const btnPicker = document.querySelector("#btnPicker");

//
const r = document.querySelector("#r");
const g = document.querySelector("#g");
const b = document.querySelector("#b");

//
const rValue = document.querySelector("#rValue");
const gValue = document.querySelector("#gValue");
const bValue = document.querySelector("#bValue");

btnRGB.addEventListener("click", () => {
  const color = `rgb(${r.value}, ${g.value}, ${b.value})`;
  const invertedColor = `rgb(${255 - r.value}, ${255 - g.value}, ${255 - b.value})`;

  header.style.backgroundColor = color;
  header.style.color = invertedColor;
  //document.body.style.backgroundColor = color;

  const li = document.createElement("li");
  li.textContent = color;
  li.style.backgroundColor = color;
  li.style.color = invertedColor;

  /*borrar colores*/

  li.addEventListener("click", () => {
  li.remove();
  });

  lista.appendChild(li);
  
});

// SINGLE LETTERS STUFF (CREAR BARRA Y ACTUALIZAR VALOR DENTRO DEL INPUT)

r.addEventListener("input", () => {
  rValue.value = r.value;
});

r.addEventListener("input", () => {
  const valor = r.value;
  r.style.background = `
    linear-gradient(
      to right,
      rgb(0,0,0),
      rgb(255,0,0)
    )
  `;
});

g.addEventListener("input", () => {
  gValue.value = g.value;
});
g.addEventListener("input", () => {
  const valor = g.value;
  g.style.background = `
    linear-gradient(
      to right,
      rgb(0,0,0),
      rgb(0,255,0)
    )
   `;
});

b.addEventListener("input", () => {
  bValue.value = b.value;
});
b.addEventListener("input", () => {
  const valor = b.value;
  b.style.background = `
    linear-gradient(
      to right,
      rgb(0,0,0),
      rgb(0,0,255)
    )
   `;
});

// Pinta los Sliders

function pintarSliders() {
  r.style.background = `linear-gradient(to right, rgb(0,0,0), rgb(255,0,0))`;
  g.style.background = `linear-gradient(to right, rgb(0,0,0), rgb(0,255,0))`;
  b.style.background = `linear-gradient(to right, rgb(0,0,0), rgb(0,0,255))`;
}

pintarSliders();

function actualizarColor() {
  const rVal = r.value;
  const gVal = g.value;
  const bVal = b.value;

  createColor.style.backgroundColor = `rgb(${rVal}, ${gVal}, ${bVal})`;
  createColor.style.borderColor = `rgb(${rVal - 20}, ${gVal - 20}, ${bVal - 20})`;
  //document.body.style.background = `rgb(${rVal}, ${gVal}, ${bVal})`;
}

r.addEventListener("input", actualizarColor);
g.addEventListener("input", actualizarColor);
b.addEventListener("input", actualizarColor);

rValue.addEventListener("input", () => {
  if (rValue.value < 0) rValue.value = 0;
  if (rValue.value > 255) rValue.value = 255;
  if (rValue.value === "") rValue.value = 0;
  r.value = rValue.value;
  actualizarColor();
});

gValue.addEventListener("input", () => {
  if (gValue.value < 0) gValue.value = 0;
  if (gValue.value > 255) gValue.value = 255;
  if (gValue.value === "") gValue.value = 0;
  g.value = gValue.value;
  actualizarColor();
});

bValue.addEventListener("input", () => {
  if (bValue.value < 0) bValue.value = 0;
  if (bValue.value > 255) bValue.value = 255;
  if (bValue.value === "") bValue.value = 0;
  b.value = bValue.value;
  actualizarColor();
});

const btnCopyColor = document.querySelector("#btnCopyColor");
btnCopyColor.addEventListener("click", async () => {
  const color = `rgb(${r.value}, ${g.value}, ${b.value})`;
  try {
    await navigator.clipboard.writeText(color);
    alert(`Color copiado al portapapeles.`);
  } catch (err) {
    console.error("Error al copiar el color al portapapeles", err);
    alert("Error al copiar el color al portapapeles");
  }
});
>>>>>>> Stashed changes
