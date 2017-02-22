module.exports = function(app) {
    var Role = app.models.Role;

    Role.registerResolver('grupoVerificado', function(role, context, cb) {
        // usuario autenticado
        var idUsuario = context.getUserId();
          
        if(!idUsuario) {
            // el usuario tiene que estar autenticado
            return process.nextTick(() => cb(null, false));
        }
        
        // el centro tiene que estar verificado
        var centro = app.models.Centro;
        centro.count ({
            verificado: true
        }, function(err, count) {
            if (err) return cb(err);
            if(count > 0) {
                // centro verificado
                return cb(null, true);
            } else {
                return cb(null, false);
            }
        });
    });
};
