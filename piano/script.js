
let configTeclat = {prevent_repat : true}
let eventTeclat = new window.keypress.Listener(this,configTeclat)
eventTeclat.simple_combo('q',sonidoQ);
eventTeclat.simple_combo('w',sonidoW);
eventTeclat.simple_combo('e',sonidoE);
eventTeclat.simple_combo('r',sonidoR);
eventTeclat.simple_combo('a',sonidoA);
eventTeclat.simple_combo('s',sonidoS);
eventTeclat.simple_combo('d',sonidoD);
eventTeclat.simple_combo('z',sonidoZ);
eventTeclat.simple_combo('x',sonidoX);



eventTeclat.sequence_combo('1 2 3 4',sonidoFondo1);
eventTeclat.sequence_combo('5 6 7 8',sonidoFondo2);
eventTeclat.sequence_combo('0 9 8 7',sonidoFondo3);
eventTeclat.sequence_combo('n m n m',sonidoFondo4);


function sonidoQ(){
    var snd = new Audio("alarm-clock.mp3")
    snd.play();
}

function sonidoW(){
    var snd = new Audio("alerta-nextel-ringtones.mp3")
    snd.play();
}

function sonidoE(){
    var snd = new Audio("ringtones-grillos.mp3")
    snd.play();
}

function sonidoR(){
    var snd = new Audio("scifi002.mp3")
    snd.play();
}

function sonidoFondo1(){
    var snd = new Audio("madagascar-like-to-move-it.mp3")
    snd.play();
}

function sonidoA(){
    var snd = new Audio("kazoo_1.mp3")
    snd.play();
}

function sonidoS(){
    var snd = new Audio("jab-jab.mp3")
    snd.play();
}

function sonidoD(){
    var snd = new Audio("musica-espera-separador-musical-.mp3")
    snd.play();
}

function sonidoFondo2(){
    var snd = new Audio("picapiedras-cancion-series-tvintro- (1).mp3")
    snd.play();
}

function sonidoZ(){
    var snd = new Audio("cartoon181.mp3")
    snd.play();
}

function sonidoX(){
    var snd = new Audio("kirby-super-star-1up.mp3")
    snd.play();
}

function sonidoFondo3(){
    var snd = new Audio("ringtones-stayin-alive.mp3")
    snd.play();
}

function sonidoFondo4(){
    var snd = new Audio("cancion-italiana-.mp3")
    snd.play();
}