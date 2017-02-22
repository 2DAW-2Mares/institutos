module.exports = function(app) {
    var Role = app.models.Role;

    Role.registerResolver('grupoVerificado', function(role, context, cb) {
        // usuario autenticado
        var idUsuario = context.getUserId();
          
        if(!idUsuario) {
            // el usuario tiene que estar autenticado
            return process.nextTick(() => cb(null, false));
        }
        return cb(null, true);
    });
};
