const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors')
const app         = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


/*app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});*/

app.use(cors())
app.use(function(req, res, next) { 
  console.log(/.*\.js/.test(req.path))
    if (/.*\.js/.test(req.path)) { 
      res.charset = "utf-8";
     } 
    next(); 
}); 
app.get("/", (req, res) => res.status(200).json({msg: 'Sou a SUPPORT API'}));
app.use(express.static('public'));
app.listen(9000, () => console.log('Server ativo na porta 9000'));