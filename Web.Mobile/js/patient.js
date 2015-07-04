myApp.onPageInit("patient", function(page) {
    $$(page.container).find(".submit").on("click", function() {
        var name = $$(page.container).find("input[name=name]").val();
        var surname = $$(page.container).find("input[name=surname]").val();
        var phone = $$(page.container).find("input[name=phone]").val();
        var photo = $$(page.container).find("input[name=photo]")[0].files;
        if (!name) {
            myApp.alert("Por favor, rellene el campo \"Nombre\"");
            return;
        }
        if (!surname) {
            myApp.alert("Por favor, rellene el campo \"Apellido\"");
            return;
        }
        if (!phone) {
            myApp.alert("Por favor, rellene el campo \"Teléfono\"");
            return;
        }
        if (photo.length > 0) {
            var file = photo[0];
            var fileName = name + surname + ".jpg";
            var parseFile = new Parse.File(fileName, file);
            parseFile.save().then(function() {
                console.log();
                var server = myApp.server();
                myApp.showPreloader("Creando Paciente...");
                server.persistPatient({
                    data: {
                        name: name,
                        surname: surname,
                        phone: phone,
                        photo: parseFile
                    },
                    success: function (patient) {
                        myApp.hidePreloader();
                        console.log(patient);
                    },
                    error: function (patient, error) {
                        console.log(patient, error);
                    }
                });
                //var jobApplication = new Parse.Object("JobApplication");
                //jobApplication.set("applicantName", "Joe Smith");
                //jobApplication.set("applicantResumeFile", parseFile);
                //jobApplication.save();
            }, function(error) {
                console.log(error);
            });
        }
    });
});