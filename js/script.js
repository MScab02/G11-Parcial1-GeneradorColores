const lista = document.querySelector("#lista");
const btnPicker = document.querySelector("#btnPicker");
const box = document.querySelector("#box");
const btnRGB = document.querySelector("#btnRGB");
const r = document.querySelector("#r");
const g = document.querySelector("#g");
const b = document.querySelector("#b");
const rValue = document.querySelector("#rValue");
const gValue = document.querySelector("#gValue");
const bValue = document.querySelector("#bValue");

btnRGB.addEventListener("click", () => {
  const color = `rgb(${r.value}, ${g.value}, ${b.value})`;
  document.body.style.backgroundColor = color;

  const li = document.createElement("li");
  li.textContent = color;
  li.style.backgroundColor = color;

  lista.appendChild(li);
});

btnPicker.addEventListener("click", () => {
  const color = colorPicker.value;
  document.body.style.backgroundColor = color;

  const li = document.createElement("li");
  li.textContent = color;
  li.style.backgroundColor = color;

  lista.appendChild(li);
});

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

  document.body.style.background = `rgb(${rVal}, ${gVal}, ${bVal})`;
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
