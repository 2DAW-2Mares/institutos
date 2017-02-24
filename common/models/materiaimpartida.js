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

    

    Materiaimpartida.materiasImpartidas_Centro_get = function(idCentro,res, cb) {
            
        var Anyoescolar = app.models.Anyoescolar;
        var Grupo = app.models.grupo;
        var materiasimpartidas = app.models.materiasimpartidas;
        var materia = app.models.materia;
    
        Anyoescolar.findOne({where: {centro: idCentro}}, function(err, anio) { 
            if(err){
                var err = new Error('No existe el anyoescolar');
                err.statusCode = 404;
                return cb(err);
            }
            Grupo.find({where: {Anyoescolar: anio.anyoescolar}}, function(err, grup) { 
                if(err){
                    var err = new Error('No existe el grupo');
                    err.statusCode = 404;
                    return cb(err);
                }
                Materiaimpartida.find({where: {grupo: grup.grupo}}, function(err, grup) { 
                    if(err){
                        var err = new Error('No existe la materiaImpartida');
                        err.statusCode = 404;
                        return cb(err);
                    }
              
                });
            });
        });

    return res.render();


    };
    Materiaimpartida.remoteMethod(
        'materiasImpartidas_Centro_get', {
            description: 'Listar Materias Impartidas por un grupo',
            accepts: [{
                arg: 'idCentro',
                type: 'integer',
                required: true
            } ],
            returns: {
                arg: 'materiaId',
                type: 'integer'
            },
            http: {
                path: '/list_materiasImpartidas',
                verb: 'get'
            },
        }
    );
};
