/** @class
  @extends SC.Record
  @version 0.1
*/
Workr.User = SC.Record.extend({

  email:     SC.Record.attr(String),
  password:  SC.Record.attr(String),
  authToken: SC.Record.attr(String),
  firstName: SC.Record.attr(String),
  lastName:  SC.Record.attr(String)

}) ;


Workr.User.mixin({
  callbacks: SC.Object.create(),
  resourcePath: 'login.json',

  /**
   * Authenticates a user given a password hash.
   */
  authenticate: function(email, passwordHash, params) {
    if (!params) throw 'Error authenticating user: Missing success/failure callbacks.';

    params.queryParams = {
      email: "%@".fmt(email),
      password: "%@".fmt(passwordHash)
    };

    // Send the request off to the server.
    CoreWorkr.executeTransientGet(Workr.User.resourcePath, undefined, params);
  }

});