const circleElement = document.querySelector('#green');

const mouse = {x:0, y:0};
const circle = {x:0, y:0};
const speed = 0.2;

window.addEventListener('mousemove', position => {mouse.x = position.x; mouse.y = position.y;});

function tick() 
{
    circle.x += (mouse.x - circle.x) * speed ;
    circle.y += (mouse.y - circle.y) * speed ;

    const isExpanded = circleElement.classList.contains('green-expansion');

    if (!isExpanded) 
    {
        circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`
    }

    window.requestAnimationFrame(tick);
}

tick()
