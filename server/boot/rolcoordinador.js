module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('coordinador', function(role, context, cb) {
    //El usuario debe estar logueado
    var userId = context.accessToken.userId;
    if (!userId) {
      //Si no es user devuelve un false
      return process.nextTick(() => cb(null, false));
    }
  
    
  });
}