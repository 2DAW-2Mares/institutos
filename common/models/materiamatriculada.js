'use strict';

module.exports = function(Materiamatriculada) {

	Materiamatriculada.observe('before save', function (ctx, next) {console.log(ctx);
		if (ctx.data && ctx.data.calificacion) {
			if (ctx.data.calificacion >= 5) {
				ctx.data.aprobado = true;
			} else {
				ctx.data.aprobado = false;
			}
		}
		next();
	});



	Materiamatriculada.califica = function(id, calificacion, cb) {
		Materiamatriculada.findById(1, function(err, materiamatriculada) {
			if (err) {
				var err = new Error('No existe ninguna materia matriculada con ese id');
				err.statusCode = 404;
				return cb(err);
			}

			materiamatriculada.updateAttribute('calificacion', calificacion, function(err, materiamatriculada) {
				if (err) {
					var err = new Error('Error al calificación del alumno');
					err.statusCode = 404;
					return cb(err);
				}
				console.log('> Alumno calificado correctamente');
				return cb(null, 'Alumno calificado correctamente')
			});
		});

	};

	Materiamatriculada.remoteMethod(
		'califica', {
			description: 'Califica a un alumno en una materia',
			accepts: [{
				arg: 'id',
				type: 'integer',
				required: true
			}, {
				arg: 'calificacion',
				type: 'integer',
				required: true,
				http: {
					source: 'body'
				}
			}],
			returns: {
				arg: 'msg',
				type: 'string'
			},
			http: {
				path: '/:id/califica',
				verb: 'put'
			},
		}
	);

};