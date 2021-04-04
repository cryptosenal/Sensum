# Sensum Crypto Senal XYZ
Development of Sensum Crypto Senal 
+NodeJs 
+Express
+Axios
+Mustache Template 
+Api in Python 



- Estructura de un Proyecto Sensum.cryptosenal.xyz
  ```

  ├─ app.js (Inicio de la aplicación NodeJs) https://app.com/
  │   └─ Router [Urls de dependencias]
  │       └─ prep (Carpeta Futuros Binance) https://app.com/prep/
  │           ├─ 1inchusdt.js(Pronostico General Grafica) https://app.com/prep/1inchusdt
  │                ├─ 1inchusdt.js(Pronostico separado /5m/15m/30m/1h/2h/4h) https://app.com/prep/1inchusdt/5m
  
  │             ├── usdt
  ├── package.json (Información y dependencias)
  ├── public (Nuestros estáticos app.js Index Lista)
  │   ├── images
  │   ├── javascripts
  │   └── stylesheets
  │       └── style.css
  ├── routes (Nuestros controladores)
  │   ├── index.js
  │   └── users.js
  └── views real_time Pronosticos (Nuestras vistas/plantillas)
      ├── error.jade
      ├── index.jade
      └── layout.jade
  ```
