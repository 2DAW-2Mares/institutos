'use strict';

var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');

module.exports = function(Centro) {
	Centro.observe('before save', function (ctx, next) {
		if (ctx.isNewInstance) {
			if (ctx.instance) {
				ctx.instance.unsetAttribute('verificado');
				ctx.instance.coordinador = ctx.options && ctx.options.accessToken && ctx.options.accessToken.userId;
			} else {
				delete ctx.data.verificado;
			}
		}
		next();
	});

	//enviar correo electrónico al administrador cuando se cree un nuevo centro
	Centro.afterRemote('create', function(context, centro, next) {
		console.log('> centro.afterRemote triggered');
		var html = '<h1>El centro ' + centro.nombre + ' se ha registrado en la web</h1>' +
			'<ul>	<li>codigo: ' + centro.codigo +
			'</li>	<li>nombre: ' + centro.nombre +
			'</li>	<li>web: ' + centro.web + '</li></ul>';

		Centro.app.models.Email.send({
			to: config.admin.email,
			from: config.emailDs.transports[0].auth.user,
			subject: 'Nuevo centro registrado',
			text: 'El centro ' + centro.nombre + ' se ha registrado en la web',
			html: html
		}, function(err, mail) {
			if (err) throw err;
			console.log('email sent!');
			next();
		});
	});

	Centro.validar_centro = function(idCentro, cb) {
		Centro.findById(idCentro, function(err, centro) {
			if (err) {
				var err = new Error('No existe ningún centro con ese id');
				err.statusCode = 404;
				return cb(err);
			}
			centro.updateAttribute('verificado', true, function(err, centro) {
				if (err) {
					var err = new Error('Error al verificar el centro');
					err.statusCode = 404;
					return cb(err);
				}
				console.log('> Centro verificado correctamente');
				return cb(null, 'Centro verificado correctamente')
			});
		});

	};
	//Enviar correo al coordinador para asignar sitio despues de validar
	Centro.afterRemote('validar_centro', function correoCoordinador(context,centro ,next) {
				
		console.log('centro envio de email al coordinador');
		console.log(centro);
    Centro.findById(context.args.idCentro , function(err, centro) {
				centro.userId(function(err, coordinador) {
					console.log(coordinador);
					if (err) next(err);


					//El coordinador es:
							console.log("Usuario Coordinador: " +coordinador.nombre + " Email: " + coordinador.email);
							

					var html = 'Nuevo centro <strong>"'+centro.nombre+'"</strong>, asignada al coordinador <strong>"'+coordinador.nombre+'"</strong>';
                    Centro.app.models.Email.send({
                        to: coordinador.email,
                        from: config.admin.email,
                        subject: 'Nuevo centro asignado al Coordinador '+coordinador.nombre,
                        html: html
                    }, function(err) {
                        if (err) return console.log('> error al enviar el email');
                        console.log('> se ha enviado correctamente');
                        next(); // evita enviar correos multiples
                    });
					
				})
})

			});

	//Obtener los alumnos matriculados en un centro en la fecha actual
	Centro.alumnosMatriculados = function(id,cb){
		var Anyoescolar = app.models.Anyoescolar;
		var Grupo =  app.models.Grupo;
		var Matricula = app.models.Matricula;
		//Cogemos el año actual
		var fecha = new Date();
		var anoactual = fecha.getYear() + 1900;
		Anyoescolar.findOne({	where: { and:[{ 
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
			Grupo.find({ where:{ anyoescolar: ano.id}
						},function(err, grupo){
				if (err) {
					var err = new Error('No existen grupos ese dicho año escolar en el centro especificado');
					err.statusCode = 404;
					return cb(err);
				}
				
				Matricula.count( {grupo: id}, function(err, count) {
		      		if (err) return cb(err);
		      		return cb(null,("El número de alumnos matriculados es de " + count));
		      	});

			});
		});
	}

	Centro.remoteMethod(
		'alumnosMatriculados', {
			description: 'Devuelve el número de alumnos matriculados, en un centro, en el año actual',
			accepts: [{
					arg: 'id',
				type: 'integer',
				required: true
			}],
			returns: {
				arg: 'msg',
				type: 'string'
			},
			http: {
				path: '/:id/alumnosMatriculados',
				verb: 'get'
			},
		}
	);

	Centro.remoteMethod(
		'validar_centro', {
			description: 'Valida un centro. Lo debe hacer un administrador',
			accepts: [{
				arg: 'idCentro',
				type: 'integer',
				required: true
			}],
			returns: {
				arg: 'msg',
				type: 'string'
			},
			http: {
				path: '/validar-centro',
				verb: 'put'
			},
		}
	);

};