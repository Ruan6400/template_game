
/**
 * Colisão de objetos retangulares (usem divs)
 * @param {Object} Objeto1 
 * @param {Object} Objeto2 
 * @returns um valor booleano (encostou? não encostou?)
 */
function Colisao_Quadrada(Objeto1,Objeto2){
    let Xobj1 = Objeto1.offsetLeft+(Objeto1.offsetWidth/2)
    let Xobj2 = Objeto2.offsetLeft+(Objeto2.offsetWidth/2)
    let Yobj1 = Objeto1.offsetTop+(Objeto1.offsetHeight/2)
    let Yobj2 = Objeto2.offsetTop+(Objeto1.offsetHeight/2)

    let Dist_X = Math.abs(Xobj1-Xobj2);let Dist_Y = Math.abs(Yobj1-Yobj2)
    let Media_X = (Objeto1.offsetWidth+Objeto2.offsetWidth)/2
    let Media_Y = (Objeto1.offsetHeight+Objeto2.offsetHeight)/2

    return (Dist_X<=Media_X)&&(Dist_Y<=Media_Y);
}


/**
 * Não, não é uma função pra animar, é pra fazer café. Usada em loops de requestAnimationFrame
 * @param {object} Objeto Div que vai receber a animacação
 * @param {number} frames_p_sprite a cada quantos frames o sprite tem que mudar?
 * @param {JSON[]|String[]} spritesheet Array de texto com as urls de cada frame. Ou um array de JSONs, com o primeiro item sendo um JSON com um único atributo img(String com url) e os seguintes no seguinte formato = {x,y,w,h} (todos os att são números)
 * @param {number[]} tam_spsheet Tamanho da Spriteshet. Informe um array com a largura e altura (int) da imagem da spritesheet. Se o parâmetro anterior foi um array de texto, não coloque esse parâmetro
 * 
 */
function Animar(Objeto,frames_p_sprite,spritesheet,tam_spsheet=[]){
    if(Objeto.timer == null){
        Objeto.timer=0
        if(tam_spsheet.length>0){
            Objeto.frame=1
            Objeto.style.backgroundImage = spritesheet[0].img
            Objeto.style.backgroundSize = tam_spsheet[0]+"px "+tam_spsheet[1]+"px"
        }else{Objeto.frame=0}
        console.log(spritesheet.length)
    }
    Objeto.timer++
    if(Objeto.timer>=frames_p_sprite){
        Objeto.timer=0;
        console.log(Objeto.frame)
        if(tam_spsheet.length === 0){
            Objeto.style.backgroundImage = spritesheet[Objeto.frame]
            Objeto.frame = Objeto.frame==(spritesheet.length-1)? 0: Objeto.frame+1;
        }else{
            if(Objeto.frame==(spritesheet.length-1)){Objeto.frame=1}else{Objeto.frame++}
            Objeto.style.width = spritesheet[Objeto.frame].w+"px"
            Objeto.style.height = spritesheet[Objeto.frame].h+"px"
            Objeto.style.backgroundPosition = 
            spritesheet[Objeto.frame].x+'px '+spritesheet[Objeto.frame].y+'px'
        }
    }
}

