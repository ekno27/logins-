// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    if(req.session.user){
      var userObject = {        
          username: req.session.user.username
      };
      console.log(userObject);
      res.render("welcome", userObject);
    }
    else if (req.cookie){
      for (var i = 0; i < users.length; i++) {
        if (users[i].token === req.cookie.token){
          req.session.user = users[i];
          return res.redirect("/");
        }
      }
    }
    else{
      res.render("index");
    }
  });
  


};
