// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var dsConfig = require('../datasources.' + process.env.NODE_ENV + '.js');

module.exports = function(app) {
  var User = app.models.Usuario;

  //login page
  app.get('/', function(req, res) {
    var credentials = dsConfig.emailDs.transports[0].auth;
    res.render('login', {
      email: credentials.user,
      password: credentials.pass
    });
  });

  //verified
  app.get('/verified', function(req, res) {
    res.render('verified');
  });

/*  app.get('/admin', function(req, res, next) {
    res.sendFile(req.app.get("admin_path")+"index.html");
    console.log(req.path);
  });*/

};
