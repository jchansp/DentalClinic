﻿myApp.onPageInit("patient", function(page) {
    $$(page.container).find(".submit").on("click", function() {
        var firstName = $$(page.container).find("input[name=firstName]").val();
        //var username = $$("#register-username").val();
        //var email = $$("#register-email").val();
        //var password = $$("#register-password").val();

        //console.log("Submit clicked");
        //console.log("username: " + username + "and password: " + password + "and email: " + email);

        //if (!username || !password || !email) {
        if (!firstName) {
            myApp.alert("Por favor, rellene el campo \"Nombre\"");
            return;
        }

        // Methods to handle speciffic HTTP response codes
        var success201 = function(data, textStatus, jqXHR) {
            myApp.hidePreloader();

            console.log("Response body: " + data);

            // Will pass context with retrieved user name 
            // to welcome page. Redirect to welcome page
            mainView.router.load({
                template: Template7.templates.welcomeTemplate,
                context: {
                    //name: username
                    name: firstName
                }
            });
        };

        var notsuccess = function(data, textStatus, jqXHR) {
            myApp.hidePreloader();
            myApp.alert("Login was unsuccessful, please try again");
        };

        var query = "https://api.parse.com/1/classes/Patient";
        var postdata = {};
        //postdata.username = username;
        //postdata.password = password;
        //postdata.email = email;
        postdata.firstName = firstName;

        var parse = myApp.parse();
        myApp.showPreloader("Cargando Pacientes...");
        parse.persistPatient({
            data: postdata,
            success: function (data, textStatus) {
                myApp.hidePreloader();
                console.log(data, textStatus);
            }
        });


    });
    //$$("form.ajax-submit").on("submitted", function(e) {
    //    var xhr = e.detail.xhr; // actual XHR object

    //    var data = e.detail.data; // Ajax repsonse from action file
    //    // do something with response data

    //    console.log(data);
    //});
    //$$("form.ajax-submit").on("beforeSubmit", function(e) {
    //    var xhr = e.detail.xhr; // actual XHR object

    //    var data = e.detail.data; // Ajax repsonse from action file
    //    // do something with response data

    //    console.log(e);
    //});
    //$$("form.ajax-submit").on("submitError", function(e) {
    //    var xhr = e.detail.xhr; // actual XHR object

    //    var data = e.detail.data; // Ajax repsonse from action file
    //    // do something with response data

    //    console.log(data);
    //});
});