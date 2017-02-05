'use strict';

var config = require('../../server/config.json');
var path = require('path');

module.exports = function(Usuario) {

	//send verification email after registration
	Usuario.afterRemote('create', function(context, usuario, next) {
		console.log('> user.afterRemote triggered');

		var options = {
			type: 'email',
			to: usuario.email,
			from: 'noreply@loopback.com',
			subject: 'Thanks for registering.',
			template: path.resolve(__dirname, '../../server/views/verify.ejs'),
			redirect: '/verified',
			user: usuario
		};

		usuario.verify(options, function(err, response) {
			if (err) {
				Usuario.deleteById(usuario.id);
				return next(err);
			}

			console.log('> verification email sent:', response);

			context.res.render('response', {
				title: 'Signed up successfully',
				content: 'Please check your email and click on the verification link ' +
					'before logging in.',
				redirectTo: '/',
				redirectToLinkText: 'Log in'
			});
		});
	});

	//send password reset link when requested
	Usuario.on('resetPasswordRequest', function(info) {
		var url = 'http://' + config.host + ':' + config.port + '/reset-password';
		var html = 'Click <a href="' + url + '?access_token=' +
			info.accessToken.id + '">here</a> to reset your password';

		Usuario.app.models.Email.send({
			to: info.email,
			from: info.email,
			subject: 'Password reset',
			html: html
		}, function(err) {
			if (err) return console.log('> error sending password reset email');
			console.log('> sending password reset email to:', info.email);
		});
	});

};
