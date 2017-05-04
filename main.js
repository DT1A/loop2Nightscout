//require('load-env')(); // var load = require('load-env'); load();

var insertarBD = require("./insertarBD");

var ultimoId_reg = "0";

setInterval(ejecutar,60000);

function ejecutar(){
  insertarBD.insertar(ultimoId_reg, function(id){
    console.log("callback: " + id);
    ultimoId_reg = id;
  });
}
