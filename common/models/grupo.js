'use strict';

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


};
