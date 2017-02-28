'use strict';

var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');
module.exports = function(Grupo) {


	Grupo.observe('before save', function removeUnwantedField(ctx, next) {
		if (ctx.isNewInstance) {
			if (ctx.instance) {
				ctx.instance.creador = ctx.options && ctx.options.accessToken && ctx.options.accessToken.userId;
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
    
    // el centro tiene que estar verificado
    Grupo.observe('before save', function(ctx, next) {
        var grupo = ctx.instance;
        grupo.anyoescolarId(function(err, anyoescolar) {
            if (err) throw err;
	        if(anyoescolar){
	            anyoescolar.centroId(function(err, centro) {
	                if(centro.verificado == true) {
	                    console.log("se ha creado un nuevo grupo correctamente");
	                    next();
	                } else {
	                    next(new Error("No se puede crear el grupo, el centro no está verificado"));
	                }
	            });
	        }else{
	        	next(new Error("El valor es null"));
	        }
        });
    });
    Grupo.afterRemote('validar_grupo', function(context, grupo, next) {

	   // for(var prop in context.args) console.log(context.args);
	    //console.log(context.args.idgrupo+" - "+context.args.access_Token.userId)

	    var Usuario = app.models.Usuario;
	    Grupo.findById(context.args.idgrupo , function(err, grupo) {

	        var html = '<h1>El grupo ' + grupo.nombre + ' se ha validado</h1>';

	        Usuario.findById(grupo.creador , function(err, user) {

	            Grupo.app.models.Email.send({
	                to: user.email,
	                from: config.emailDs.transports[0].auth.user,
	                subject: 'Nuevo grupo registrado',
	                text: 'El grupo ' + grupo.nombre + ' se ha validado',
	                html: html
	            }, function(err, mail) {
	                if (err) throw err;
	                console.log('email sent!');
	                next();

	            });
	        });      
	    });
	     
	});

    //El coordinador del centro puede validar los grupos creados en su centro.
	Grupo.validar_grupo = function(idgrupo, accessToken, cb) {

	    if (!accessToken) {             
	        var err = new Error('No existe el usuario');
	        err.statusCode = 404;
	        return cb(err);

	    }
	   
	    var Anyoescolar = app.models.Anyoescolar;
	    var Centro = app.models.Centro;

	    Grupo.findById(idgrupo , function(err, grupo) {
	        Anyoescolar.findById(grupo.id , function(err, anyoescolar) {
	            Centro.findById(anyoescolar.centro, function(err, centro){
	                //console.log("------------> "+centro.coordinador+" ------->"+accessToken.userId);
	                if (accessToken.userId === centro.coordinador){
	                
	                    if (err) {
	                        var err = new Error('No existe ningún grupo con ese id');
	                        err.statusCode = 404;
	                        return cb(err);
	                    }
	                    grupo.updateAttribute('verificado', true, function(err, grupo) {
	                        if (err) {
	                            var err = new Error('Error al verificar el grupo');
	                            err.statusCode = 404;
	                            return cb(err);
	                        }
	                        console.log('> grupo verificado correctamente');
	                        return cb(null, 'grupo verificado correctamente')
	                    });
	                    
	                }
	            })
	        })
	    })
	   
	};

	Grupo.remoteMethod(
	    'validar_grupo', {
	        description: 'Valida un grupo. Lo debe hacer un coordinador',
	        accepts: [{
	            arg: 'idgrupo',
	            type: 'integer',
	            required: true
	        },{
	            arg: 'access_token',
	            type: 'object',
	            required: true,
	            http: function(ctx) {
	                var req = ctx && ctx.req;
	                var accessToken = req && req.accessToken;

	                return accessToken;
	            }
	        },],
	        returns: {
	            arg: 'msg',
	            type: 'string'
	        },
	        http: {
	            path: '/validar-grupo',
	            verb: 'put'
	        },
	    }
	);

};

	