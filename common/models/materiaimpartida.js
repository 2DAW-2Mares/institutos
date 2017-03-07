'use strict';

var app = require('../../server/server.js');

module.exports = function(Materiaimpartida) {
    Materiaimpartida.afterRemote('create', function(context, materiaimpartida, next) {
		console.log('> materiaimpartida.afterRemote triggered');
            
        // modelos relacionados
        materiaimpartida.materiaId(function(err, materia) {
            if (err) throw err;
            materiaimpartida.grupoId(function(err, grupo) {
                if (err) throw err;
                grupo.userId(function(err, creador) {
                    if (err) throw err;

                    // envio de correo al creador del grupo
                    var html = 'Nueva materia <strong>"'+materia.nombre+'"</strong>, asignada al grupo <strong>"'+grupo.nombre+'"</strong>';
                    Materiaimpartida.app.models.Email.send({
                        to: creador.email,
                        from: config.emailDs.transports[0].auth.user,
                        subject: 'Nueva materia asignada',
                        html: html
                    }, function(err) {
                        if (err) return console.log('> error al enviar el email');
                        console.log('> se ha enviado correctamente');
                        next(); // evita enviar correos multiples
                    });
                })
            })
        })
    });

    Materiaimpartida.materiasImpartidas_Centro_get = function(id,cb){

      var Anyoescolar = app.models.Anyoescolar;
       var Grupo =  app.models.Grupo;
       var Matricula = app.models.Matricula;
       var MateriaImpartida = app.models.Materiaimpartida;
       //Cogemos el año actual
       var fecha = new Date();
       var anoactual = fecha.getYear() + 1900;
       Anyoescolar.findOne({   where: { and:[{ 
                                   fechafinal:{ gt: fecha}},{ 
                                   fechainicio:{ lt:fecha}}]}
                                   },{
                               centro: id
                           },function(err, ano){
           if (err) {
               var err = new Error('No existe ese dicho curso actual para el centro especificado');
               err.statusCode = 404;
               return cb(err);
           }
           console.log(ano);
        Grupo.find({ where:{ anyoescolar: ano.id}},function(err, grupos){
               if (err) {
                   var err = new Error('No existen grupos ese dicho año escolar en el centro especificado');
                  err.statusCode = 404;
                   return cb(err);
               }
               var gruposId = []
               for(var key in grupos) {
                console.log(grupos[key]);
                gruposId.push(grupos[key].id)
            }

            console.log(gruposId);
                MateriaImpartida.find({ where:{ grupo: {inq: gruposId}}},function(err, materiaimpartida){
                    
                    var cadena ="";
                    for (var i = 0; i < materiaimpartida.length; i++) {
                        cadena = cadena +"Materia Impartida id: "+materiaimpartida[i].materia+"\n";
                    }

                    return cb(null,cadena);

                });
            });
        });
   }

    Materiaimpartida.remoteMethod(
        'materiasImpartidas_Centro_get', {
            description: 'Lista de materias impartidas por un centro',
            accepts: [{
                arg: 'id',
                type: 'integer',
                required: true
            } ],
            returns: {
                arg: 'msg',
                type: 'string'
            },
            http: {
               path: '/:id/materiaimpartida_en_Centro',
               verb: 'get'
           }
        }
    );

};