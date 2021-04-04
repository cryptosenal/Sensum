# Sensum Crypto Senal XYZ
Development of Sensum Crypto Senal 
+NodeJs 
+Express
+Axios
+Mustache Template 
+Api in Python 



- Estructura de un Proyecto (MVC)
  ```

  ├──app.js (Inicio de la aplicación NodeJs) https://app.com/
  │   └── Router [Urls de dependencias]
  │       └──prep (Carpeta Futuros Binance) https://app.com/prep/
  │           ├── 1inchusdt.js(Pronostico General) https://app.com/prep/1inchusdt
  │                ├── 1inchusdt.js(Pronostico separado /5m/15m/30m/1h/2h/4h) https://app.com/prep/1inchusdt/5m
  
  │             ├── usdt
  ├── package.json (Información y dependencias)
  ├── public (Nuestros estáticos)
  │   ├── images
  │   ├── javascripts
  │   └── stylesheets
  │       └── style.css
  ├── routes (Nuestros controladores)
  │   ├── index.js
  │   └── users.js
  └── views real_time (Nuestras vistas/plantillas)
      ├── error.jade
      ├── index.jade
      └── layout.jade
  ```
