'use strict';

var config = require('../../server/config.local.js');
var path = require('path');

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

};