const express = require("express");
const axios = require("axios");
const path = require("path");
const router = express.Router();
const app = express();
const port = 3001;

const url = "http://tradev.cryptosenal.xyz:8080"
const url2 =
  "http://tradev.cryptosenal.xyz:8080/?symbol=BTCUSDT&screener=CRYPTO&exchange=BINANCE&interval=5m&fbclid=IwAR2DmEdkTUEXOQjzPiaaGFFnxX-JeE44TaF4nWNYqICD81XHc2Jl8bQY8aY";

//app.use(express.static(path.join(__dirname, "public")));

// 3.6.9 es un script, de hay lo quiero ordenar estoy aprendiendo a utilizar ruteo con Express ahorita estaba checando .findIndex pero no lo logro me interesa sacar datos especificos por ejemplo
// Este informacion especifica { "Pivot.M.Fibonacci.R3" : "12345678" } deseo extraer solo esa parte que contenga deseo sacar eso he imprimirlo actualmente estaba estudiando las platillas de Mustache para tener los views luego las planeo diseñar con bootstrap 4

app.get("/1inchusdt/:time", async (req, res, next) => {
	  if ( req.params.time === '5m') {
		  try {
    //para manejar parametros los puedes obtener en req.params
    //hasta mientras puse la ruta completa

    const { symbol, screener, exchange, interval, fbclid } = req.query;
    const { data } = await axios.get(url, {
      params: {
        symbol: '1INCHUUSDT',
        screener: 'CRYPTO',
        exchange: 'BINANCE',
        interval: + req.params.time,
        fbclid: 'IwAR2DmEdkTUEXOQjzPiaaGFFnxX-JeE44TaF4nWNYqICD81XHc2Jl8bQY8aY',
      },
    });
    const { result } = data;
    let osciladores;
    for (let key of Object.keys(result.oscillators)) {
      if (key === "RECOMMENDATION") {
        osciladores = {
          key,
          value: result.oscillators[key],
        };
        console.log(osciladores);
      }
    }
    if (!osciladores) {
      throw new Error("Error de los Osciladores");
    }
    res.json(osciladores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
		  
   res.send('Temporalidad es a 1 Minuto:' + );
  } else if ( req.params.time === '5m') {
    res.send('Hello World:' + req.params.time);
  } else if ( req.params.time === '15m') {
   res.send('Hello World:' + req.params.time);
  } else if ( req.params.time === '30m') {
   res.send('Hello World:' + req.params.time);
  } else {
   res.send('Error 404');
  }
	
}//1INCHUUSDT
	   
	   );

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
