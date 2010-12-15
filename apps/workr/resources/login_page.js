Workr.loginPage = SC.Page.design({

  loginPane: SC.SheetPane.design({
     layout: { width: 400, height: 150, centerX: 0 },
     contentView: SC.View.extend({
       layout: { top: 0, left: 0, bottom: 0, right: 0 },
       childViews: 'userTextField passwordTextField buttonView cancelButtonView'.w(),

       userTextField: SC.TextFieldView.extend({
         layout: { centerY: -40, height: 24, centerX: 0, width: 300 },
         textAlign: SC.ALIGN_CENTER,
         controlSize: SC.LARGE_CONTROL_SIZE,
         hint: "Your email address",
         valueBinding: 'Workr.loginController.email'
       }),

       passwordTextField: SC.TextFieldView.extend({
          layout: { centerY: 0, height: 24, centerX: 0, width: 300 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          isPassword: YES,
          hint: "PASSWORD",
          valueBinding: 'Workr.loginController.password'
        }),

       buttonView: SC.ButtonView.extend({
         layout: { width: 80, bottom: 20, height: 24, centerX: 50 },
         title: "Login",
         action: "login",
         target: "Workr.loginController",
         isDefault: YES
       }),

       cancelButtonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 20, height: 24, centerX: -50 },
          title: "Cancel",
          action: "cancel",
          target: "Workr.loginController"
        })
     })
   })

});
