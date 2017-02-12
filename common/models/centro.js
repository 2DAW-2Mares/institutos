'use strict';

module.exports = function(Centro) {
	Centro.observe('before save', function removeUnwantedField(ctx, next) {
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


};