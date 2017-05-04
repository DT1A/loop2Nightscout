function insertar(ultimoId_reg, callback){
  // Retrieve

  var MongoClient = require('mongodb').MongoClient;
  var uri = process.env.MONGODB_URI;

  // Connect to the db
  MongoClient.connect(uri, function(err, db) {
    if(err) { return console.dir(err); }

  var collection = db.collection('loop');
  var collection2 = db.collection('entries');
  var nomProgram = "loop2Nightscout_v0.0";

  //Último registro en la tabla (collection) loop
  collection.find().limit(1).sort({$natural:-1}).toArray(function(err, items) {
    ultimoId = items[items.length-1]._id;
    console.log("Nuevo: " + ultimoId);

    collection.findOne({_id:ultimoId}, function(err, item) {
      console.log("Glucemia: " + item.glucose.value);

      if (ultimoId.toString() !== ultimoId_reg.toString()){
        console.log("Hay dato nuevo");
        console.log("ultimoId: " + ultimoId);
        console.log("ultimoId_reg; " + ultimoId_reg);
        t = new Date();
        td = t.getTime();
        var dato=[{sgv:item.glucose.value, direction:"", device:nomProgram, type:"svg", date:td, dateString:item.glucose.startDate}];

        collection2.insert(dato, {w:1}, function(err, result) {
          console.log(result);
        });

        ultimoId_reg = ultimoId;

      }else{
        t = new Date();
        console.log("No hay dato nuevo a las " + t);
      }

      console.log("Último: " + ultimoId_reg);

      //Devuelve el último registro pasado de loop collection a entries collection
      callback(ultimoId_reg);

    });

  });

});

}

exports.insertar = insertar ;
