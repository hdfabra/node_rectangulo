var mongoose= require('mongoose');
var Esquema = mongoose.Schema;

var colegioSchema = new Esquema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    }
});

module.exports=mongoose.model('Colegio',colegioSchema);