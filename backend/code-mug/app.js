var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//   Firebase
const admin = require("firebase-admin");
const serviceAccount = require("./config/firebase/code-mug-9e7de-firebase-adminsdk-4xmef-d80e6a4f16.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// Express
var app = express();

// Obteniendo controllers de module
var MongoDBUtil = require("./modules/mongodb/mongodb.module").MongoDBUtil;
var ProductoController = require("./modules/producto/producto.module")()
  .ProductoController;
var UsuarioController = require("./modules/usuario/usuario.module")()
  .UsuarioController;
var VentaController = require("./modules/venta/venta.module")()
.VentaController;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// MongoBD
MongoDBUtil.init();
app.use(cors());

// verificar que las credenciales de la peticion son validas antes de entrar al cualquier controler
function checkAuth(req, res, next) {

  if (req.headers?.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    admin.auth().verifyIdToken(idToken)
      .then(() => {
        next()
      }).catch((error) => {
        res.status(403).send('Unauthorized.');
      });

  } else {
    res.status(401).send('Unauthorized');
  }
}
app.use('*', checkAuth);


// Redireccionamiento a controladores
app.use("/productos", ProductoController);
app.use("/usuarios", UsuarioController);
app.use("/ventas", VentaController);

app.get("/", function (req, res) {
  var pkg = require(path.join(__dirname, "package.json"));
  res.json({
    name: pkg.name,
    version: pkg.version,
    status: "up",
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: res.locals.message,
    error: res.locals.error,
  });
});

module.exports = app;
