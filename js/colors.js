

const expandButton = document.getElementById('expand');
const div = document.getElementById('red');
const diva = document.getElementById('blue');
const divasa = document.getElementById('green');




expandButton.addEventListener('click', () => 
{

  div.classList.toggle('red-expansion');
  diva.classList.toggle('blue-expansion');
  divasa.classList.toggle('green-expansion');

  circleElement.style.transform = '';

  expandButton.remove();

  setTimeout(() => 
  {
    div.remove();
    diva.remove();
    divasa.remove();
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
  }, 1500);
  
});