module.exports = function(app) {
  app.dataSources.db.automigrate('User', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('AccessToken', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('ACL', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('RoleMapping', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Role', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Anyoescolar', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Centro', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Grupo', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Materia', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Materiaimpartida', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Materiamatriculada', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Matricula', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Nivel', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Usuario', function(err) {if (err) throw err;});
  app.dataSources.db.automigrate('Tutorizado', function(err) {if (err) throw err;});
};

