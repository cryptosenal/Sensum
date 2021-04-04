//ARCHIVO module-router.js
var routeo = function(req, res){

   switch(req.url){
    case '/':
     res.send("Index Inicio"); //Aqui va los archivos de Inicio Promedio de la App
   break;
    case '/1inchusdt/:time':
      res.send("Nada 2"); //Aqui va 1inchusdt generalizada y dividida x :time 5m/15m/30m/1h/2h/4h
   break;
    case '/aaveusdt/:time':
      res.send("Nada 2"); //Aqui va 1inchusdt generalizada y dividida x :time 5m/15m/30m/1h/2h/4h
   break;
    case '/adausdt/:time':
      res.send("Nada 2"); //Aqui va 1inchusdt generalizada y dividida x :time 5m/15m/30m/1h/2h/4h
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

