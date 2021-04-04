//ARCHIVO module-router.js
var routeo = function(req, res){

   switch(req.url){
    case '/':  //Aqui va los archivos de Inicio Promedio de la App
     res.send("Index Inicio");
   break;
    case '/1inchusdt/:time':  //Aqui va 1inchusdt generalizada y dividida x :time 5m/15m/30m/1h/2h/4h
      res.send("Nada 2");
   break;
    case '/aaveusdt/:time': //Aqui va 1inchusdt generalizada y dividida x :time 5m/15m/30m/1h/2h/4h
      res.send("Nada 2"); 
   break;
    case '/adausdt/:time': //Aqui va 1inchusdt generalizada y dividida x :time 5m/15m/30m/1h/2h/4h
      res.send("Nada 2"); 
   break;
   default:
      res.send("Error 404"); //aqui entrará todo lo que no cumpla con los cases ejemplo un 404
   
   }
  
}

//con module.exports es un objeto al que le dirás qué dunciones quieres que sean exportadas
module.exports = {
  routeo
}
// -- FIN ARCHIVO module-router.js

