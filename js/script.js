function tabuada(){

  var fnum= document.getElementById("fnum").value;
  var saida= document.getElementById("saida");
  var titulo =document.getElementById("titulo");
var tabuada = '';
  for (var count=1; count<=10 ; count++)
  tabuada += fnum+ " x " +count+ " = " + 
  fnum*count+ "<br/>";

 if( count = 8 ){
 document.getElementById("titulo").textContent="Tabuada de 8";
  saida.innerHTML= tabuada;
}
}


document.title= "ola"