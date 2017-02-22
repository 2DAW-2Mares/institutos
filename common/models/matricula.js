'use strict';
// Importar la app
var app = require('../../server/server.js');

module.exports = function(Matricula) {
	// Disparador que se ejecuta antes de guardar el registro
	Matricula.observe('before save', function removeUnwantedField(ctx, next) {
		var Grupo = app.models.Grupo; // Importar el modelo Grupo

		if (ctx.instance && ctx.instance.grupo) { // Contiene los datos de la petición POST
			Grupo.findById(ctx.instance.grupo, function(err, grupo) {
				if (err) {
					var err = new Error('No existe ningún grupo con ese id');
					err.statusCode = 404;
					console.log(err);
					next(err); // Pasa al siguiente middleware de error
				} else {
					if (grupo && grupo.verificado) {
						console.log('El centro está verificado correctamente');
						next(); // Pasa al siguiente middleware
					} else {
						var err = new Error('El centro no está verificado o no existe');
						err.statusCode = 404;
						console.log(err);
						next(err);
					}
				}
			});
		}
	});
};