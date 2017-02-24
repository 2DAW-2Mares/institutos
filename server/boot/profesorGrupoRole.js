module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('profesorGrupo', function(role, context, cb) {
    // Q: Is the current request accessing a Project?
    if (context.modelName !== 'Materiamatriculada') {
      // A: No. This role is only for projects: callback with FALSE
      return process.nextTick(() => cb(null, false));
    }

    //Q: Is the user logged in? (there will be an accessToken with an ID if so)
    var userId = context.accessToken.userId;
    if (!userId) {
      //A: No, user is NOT logged in: callback with FALSE
      return process.nextTick(() => cb(null, false));
    }

    // Q: Is the current logged-in user associated with this Project?
    // Step 1: lookup the requested project
    context.model.findById(context.modelId, function(err, materiamatriculada) {
      
      // A: The datastore produced an error! Pass error to callback
      if (err) return cb(err);
      // A: There's no project by this ID! Pass error to callback
      if (!materiamatriculada) return cb(new Error("materiamatriculada not found"));

      // Step 2: check if User is part of the Team associated with this Project
      // (using count() because we only want to know if such a record exists)
      var Materiaimpartida = app.models.Materiaimpartida;

      Materiaimpartida.count({
        'grupo': materiamatriculada.grupo,
        'docente': userId
      }, function(err, count) {
        // A: The datastore produced an error! Pass error to callback
        if (err) return cb(err);

        if (count > 0) {
          // A: YES. At least one Team associated with this User AND Project
          // callback with TRUE, user is role:`teamMember`
          return cb(null, true);
        } else {
          // A: NO, User is not in this Project's Team
          // callback with FALSE, user is NOT role:`teamMember`
          return cb(null, false);
        }
      });
    });
  })
};