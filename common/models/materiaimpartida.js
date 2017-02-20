'use strict';

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
};
