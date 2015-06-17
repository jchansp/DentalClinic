var uri = "http://localhost:1777/api/";
$$(".login-screen").find(".list-button").on("click", function() {
    myApp.showPreloader();
    var username = $$(".login-screen").find("input[name=\"username\"]").val();
    var password = $$(".login-screen").find("input[name=\"password\"]").val();
    myApp.getJSON(uri + "/" + id)
        .done(function(data) {
            $("#product").text(formatItem(data));
        })
        .fail(function(jqXHR, textStatus, err) {
            $("#product").text("Error: " + err);
        });
    //setTimeout(function() {
    //    myApp.hidePreloader();
    //    myApp.alert("Username: " + username + ", password: " + password, function() {
    //        myApp.closeModal(".login-screen");
    //    });
    //}, 500);
});