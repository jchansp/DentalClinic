$$(".login-screen").find(".list-button").on("click", function() {
    myApp.showPreloader();
    var username = $$(".login-screen").find("input[name=\"username\"]").val();
    var password = $$(".login-screen").find("input[name=\"password\"]").val();
    var query = "https://api.parse.com/1/login?username=" + username + "&password=" + password;
    $$.ajax({
        url: query,
        headers: { "X-Parse-Application-Id": applicationId, "X-Parse-REST-API-Key": restApiKey },
        type: "GET",
        success: function(data, textStatus) {
            myApp.hidePreloader();
            data = JSON.parse(data);
            if (!data.username) {
                return;
            }
            var username = data.username;
            myApp.alert("Username: " + username + ", password: " + password, function() {
                myApp.closeModal(".login-screen");
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            myApp.hidePreloader();
            myApp.alert("Login was unsuccessful, please verify username and password and try again");
            $$("#login-email").val("");
            $$("#login-password").val("");
        }
    });
});