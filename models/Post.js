const mongoose=require('mongoose');
const EmpleadoShecma=mongoose.Schema({
    cedula: {
        type:String,
        require:true
    },
    nombre: {
        type:String,
        require:true
    },
    apellido: {
        type:String,
        require:true
    },
    telefono: {
        type:String,
        require:true
    }
    });

module.exports=mongoose.model('Posts',EmpleadoShecma);