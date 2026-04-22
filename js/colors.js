const expandButton = document.getElementById('expand');
const div = document.getElementById('red');
const diva = document.getElementById('blue');
const circle1 = document.getElementById('green');

expandButton.addEventListener('click', () => 
{
  div.classList.toggle('red-expansion');
  diva.classList.toggle('blue-expansion');
  circle1.classList.toggle('color-expansion');

  expandButton.remove();
});
