// Initialize your app
var myApp = new Framework7({
    modalTitle: "Cl&iacute;nica Dental",
    modalPreloaderTitle: "Cargando...",
    onAjaxStart: function(xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function(xhr) {
        myApp.hideIndicator();
    },
    parse: true,
});

// Export selectors engine
var $$ = Dom7;

// Add view
//var mainView = myApp.addView(".view-main", {
//    // Because we use fixed-through navbar we can enable dynamic navbar
//    dynamicNavbar: true
//});

// Add views
var view1 = myApp.addView("#view-1");
var view2 = myApp.addView("#view-2", {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView("#patients", {
    dynamicNavbar: true
});
var view4 = myApp.addView("#view-4");

$$("#tab1").on("show", function() {
    myApp.alert("Tab 1 is visible");
});

$$("#tab2").on("show", function() {
    myApp.alert("Tab 2 is visible");
});

$$("#tab3").on("show", function() {
    myApp.alert("Tab 3 is visible");
});