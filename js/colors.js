const expandButton = document.getElementById('expand');
const div = document.getElementById('red');
const diva = document.getElementById('blue');
const green = document.getElementById('green');

expandButton.addEventListener('click', () => 
{
  div.classList.toggle('red-expansion');
  diva.classList.toggle('blue-expansion');
  green.classList.toggle('green-expansion');

  expandButton.remove();
});
