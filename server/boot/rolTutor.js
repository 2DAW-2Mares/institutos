module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('tutor', function(role, context, cb) {

    //Q: Is the user logged in? (there will be an accessToken with an ID if so)
    var userId = context.accessToken.userId;
    if (!userId) {
      //A: No, user is NOT logged in: callback with FALSE
      return process.nextTick(() => cb(null, false));
    }

    // Step 2: check if User is part of the tutorizado associated with this Project
    // (using count() because we only want to know if such a record exists)
    var tutorizado = app.models.Tutorizado;
    tutorizado.count({
      verificado: true,
      userId: userId
    }, function(err, count) {
      
      if (err) return cb(err);

      if(count > 0){
        return cb(null, true);
      }
		else{
          return cb(null, false);
        }
      });
  });
};

