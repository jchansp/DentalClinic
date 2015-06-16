$$(".login-screen").find(".list-button").on("click", function() {
    myApp.showPreloader();
    var username = $$(".login-screen").find("input[name=\"username\"]").val();
    var password = $$(".login-screen").find("input[name=\"password\"]").val();
    setTimeout(function() {
        myApp.hidePreloader();
        myApp.alert("Username: " + username + ", password: " + password, function() {
            myApp.closeModal(".login-screen");
        });
    }, 500);
});