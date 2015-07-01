myApp.onPageInit("patient", function(page) {
    $$(page.container).find(".submit").on("click", function() {
        var name = $$(page.container).find("input[name=name]").val();
        var surname = $$(page.container).find("input[name=surname]").val();
        //var username = $$("#register-username").val();
        //var email = $$("#register-email").val();
        //var password = $$("#register-password").val();

        //console.log("Submit clicked");
        //console.log("username: " + username + "and password: " + password + "and email: " + email);

        //if (!username || !password || !email) {
        if (!name) {
            myApp.alert("Por favor, rellene el campo \"Nombre\"");
            return;
        }
        if (!surname) {
            myApp.alert("Por favor, rellene el campo \"Apellido\"");
            return;
        }
        var postdata = {};
        //postdata.username = username;
        //postdata.password = password;
        //postdata.email = email;
        postdata.name = name;
        postdata.surname = surname;

        var parse = myApp.parse();
        myApp.showPreloader("Creando Paciente...");
        parse.persistPatient({
            data: postdata,
            success: function (data, textStatus) {
                myApp.hidePreloader();
                console.log(data, textStatus);
            }
        });
    });
});