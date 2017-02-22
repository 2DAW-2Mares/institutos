'use strict';

var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');
module.exports = function(Grupo) {


	Grupo.observe('before save', function removeUnwantedField(ctx, next) {
		if (ctx.isNewInstance) {
			if (ctx.instance) {
				ctx.instance.creador = ctx.options.accessToken.userId;
			} else {
				console.log("No se ha podido asignar el creador de grupo.")
			}
		}
		next();
	});

	Grupo.afterRemote('create', function correoCoordinador(context,grupo,next) {
		console.log('> materiaimpartida.afterRemote triggered');
		console.log(grupo);
		grupo.anyoescolarId(function(err, anyoescolar) {
			if (err) next(err);
			anyoescolar.centroId(function(err, centro) {
				console.log(centro);
				if (err) next(err);
				centro.userId(function(err, coordinador) {
					console.log(coordinador);
					if (err) next(err);


					
							console.log("Usuario Coordinador: " +coordinador.nombre + " Email: " + coordinador.email);
							

					var html = 'Nuevo grupo <strong>"'+grupo.nombre+'"</strong>, asignada al centro <strong>"'+centro.nombre+'"</strong>';
                    Grupo.app.models.Email.send({
                        to: coordinador.email,
                        from: config.admin.email,
                        subject: 'Nuevo grupo asignado al centro',
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

