// eliminar varios documentos
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(
  url,
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("claseinformatica");
    var myquery = { Empresa: /Cr*e/ };
    dbo.collection("zips_dos").findOne({ city: /MA/ }, function(err, obj) {
      /* console.log(obj);
      console.log(obj.loc);

      console.log(obj.loc[0]);
      console.log(obj.loc[0]);
      console.log(obj.loc[1]);
      console.log(obj.loc[1]); */

      dbo.collection("zips_dos")
        .find({ "loc.0": { $gt: obj.loc[0]-0.07, $lt: obj.loc[0]+0.07},
                "loc.1": { $gt: obj.loc[1]-0.07,  $lt: obj.loc[1]+0.07}})
        .toArray(function(err_two, obj_two) {
          if (err) throw err;
          console.log(obj_two);
          db.close();
        });


    });
  }
);
