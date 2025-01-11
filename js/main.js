let obj

let walk = [
    {img:'Mario.png'},
    {x:-350,y:-100,w:100,h:50},
    {x:-550,y:-100,w:100,h:50},
    {x:-450,y:-100,w:100,h:50},
    {x:-550,y:-100,w:100,h:50},
]


function Start(){
    obj=document.getElementById('Player')
    let a = 'texto'
    let b = JSON.stringify(a)
    console.log(b)
    Update()
}

function Update(){
    Animar(obj,25,walk,[2008,7236])
    requestAnimationFrame(Update)
}

document.addEventListener('DOMContentLoaded',Start)