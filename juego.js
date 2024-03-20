let palabrita;
let fallos = 0; //cuantas veces he fallado
let cant_aciertos = 0; //cuantas letras he acertado


const palabras = [
    'Acecinar',     /* 0 */
    'Agigolado',     /* 1 */
    'Arrebol',    /* 2 */
    'Bahorrina',       /* 3 */
    'Bonhomia',     /* 4 */
    'Depauperar',       /* 5 */
    'Falcado',   /* 6 */
    'Farmacopea',    /* 7 */
    'Ful',       /* 8 */
    'Garambaina',     /* 9 */
    'Haiga',       /* 10 */
    'Idiotismo',     /* 11 */
    'Inmarcesible'     /* 12 */
];
const boton = id('jugar');
const imagen = id( 'imagen' );
const boton_letras = document.querySelectorAll( "#letras button" );

/* Para iniciar juego */
boton.addEventListener('click', iniciar );

function iniciar(event){
    imagen.src = 'img/img0.png';
    boton.disabled = true;
    fallos = 0;
    cant_aciertos = 0; 

    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras );

    palabrita = palabras[ valor_al_azar ];
    console.log( palabrita );
    const cant_letras = palabrita.length;

    for( let i = 0; i < boton_letras.length ; i++ ){
        boton_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

/* Adivinar letra */
for( let i = 0; i < boton_letras.length ; i++ ){
    boton_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; 
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabrita.toLowerCase( ); // .toUpperCase( )

    let acierto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //let i=  es posición de la letra en la palabra.
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acierto = true;
        }
    }

    if( acierto == false ){
        fallos++;
        const source = `img/img${fallos}.png` ;
        imagen.src = source;
    }

    if( fallos == 7 ){
        id('resultado').innerHTML ="Perdiste, la palabra era " + palabrita;
        game_over( );
    }else if( cant_aciertos == palabrita.length ){
        id('resultado').innerHTML = "GANASTE!! WIIIIII";
        game_over( );
    }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acierto );
}


/* Final del juego */
function game_over( ){
    for( let i = 0; i < boton_letras.length ; i++ ){
        boton_letras[ i ].disabled = true;
    }

    boton.disabled = false;
}


game_over( );