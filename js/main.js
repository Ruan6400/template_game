let obj

let walk = [
    {img:'img/Mario.png'},
    {x:-350,y:-100,w:100,h:50},
    {x:-550,y:-100,w:100,h:50},
    {x:-450,y:-100,w:100,h:50},
    {x:-550,y:-100,w:100,h:50},
]


function Start(){
    obj=document.getElementById('Player')
    Update()
}

function Update(){
    
    requestAnimationFrame(Update)
}

document.addEventListener('DOMContentLoaded',Start)
