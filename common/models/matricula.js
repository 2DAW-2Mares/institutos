'use strict';
// Importar la app
var app = require('../../server/server.js');

module.exports = function(Matricula) {
	// Disparador que se ejecuta antes de guardar el registro
	Matricula.observe('before save', function removeUnwantedField(ctx, next) {
		// Importar el modelo Grupo
		var Grupo = app.models.Grupo;

		if (ctx.instance && ctx.instance.grupo) { // Contiene los datos de la petición POST
			Grupo.findById(ctx.instance.grupo, function(err, grupo) {
				if (err) {
					var err = new Error('No existe ningún grupo con ese id');
					err.statusCode = 404;
					throw err;
				} else {
					if (grupo.verificado) {
						console.log('Centro verificado correctamente');
					} else {
						var err = new Error('El centro no está verificado');
						err.statusCode = 404;
						throw err;
					}
				}
			});
		}
		next();
	});
};