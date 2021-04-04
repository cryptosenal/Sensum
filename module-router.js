//ARCHIVO module-router.js
var routeo = function(req, res){

   switch(req.url){
   case '/':
     res.send("Index Inicio"); //aqui lo que quieras que haga al llegar a /home
   break;
   case '/1inchusdt':
      res.send("Nada 2"); //aqui lo que quieras que haga al llegar a /contact
   break;
       case '/aaveusdt':
      res.send("Nada 2"); //aqui lo que quieras que haga al llegar a /contact
   break;
   default:
      res.send("Nada 3"); //aqui entrará todo lo que no cumpla con los cases ejemplo un 404
   
   }
  
}

//con module.exports es un objeto al que le dirás qué dunciones quieres que sean exportadas
module.exports = {
  routeo
}
// -- FIN ARCHIVO module-router.js

