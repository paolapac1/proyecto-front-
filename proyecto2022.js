
var foto = 0;
var micarrusel={  };
var total = 0; 

micarrusel= [{ imageurl1: "foto h1", titulo:"foto #1"} ,{ imageurl1:" foto h2" , titulo  : "foto #2" } ,
{ imageurl1:" foto h3" , titulo  : "foto #3" }, { imageurl1:" foto h4" , titulo  : "foto #4" }   ] ;

var cambiar =function ( mas) { total= micarrusel. length ; foto=  foto + 
     mas ;

if( foto > total ) { foto=1}
if( foto< 1) { foto = total ;}

document.thumb.src = micarrusel[ foto-1].imageurl1;
titulo = document.getElementById( titulo );
titulo.innerText= micarrusel[ foto-1]. titulo;   }



