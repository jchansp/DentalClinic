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
var mainView = myApp.addView(".view-main", {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

myApp.getPatients = function() {
    var query = "https://api.parse.com/1/classes/Patient";
    var ignoreCache = false;
    var callback = function() {
        console.log(args);
    };
    myApp.get("https://api.parse.com/1/classes/Patient", mainView, ignoreCache, callback);
    $$.ajax({
        url: query,
        headers: { "X-Parse-Application-Id": applicationId, "X-Parse-REST-API-Key": restApiKey },
        type: "GET",
        success: function(data, textStatus) {
            myApp.trigger("success");
            myApp.hidePreloader();
            data = JSON.parse(data);
            if (!data.results) {
                myApp.alert("Error");
                return;
            }
            var items = [];
            data.results.forEach(function(patient) {
                items.push({
                    title: patient.firstName,
                    subtitle: "",
                });
            });
            myApp.virtualList($$(page.container).find(".virtual-list"), {
                items: items,
                searchAll: function(query, items) {
                    var found = [];
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].title.indexOf(query) >= 0 || query.trim() === "")
                            found.push(i);
                    }
                    return found;
                },
                template: "<li>" + "<a href=\"#\" class=\"item-link item-content\">" + "<div class=\"item-inner\">" + "<div class=\"item-title-row\">" + "<div class=\"item-title\">{{title}}</div>" + "</div>" + "<div class=\"item-subtitle\">{{subtitle}}</div>" + "</div>" + "</a>" + "</li>",
                //height: 63,
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            myApp.hidePreloader();
            myApp.alert("Error");
        }
    });
};
//myApp.onPageInit("index", function(page) {
//    myApp.getPatients();
//}).trigger();


//// Callbacks to run specific code for specific pages, for example for About page:
//myApp.onPageInit("about", function(page) {
//    // run createContentPage func after link was clicked
//    $$(".create-page").on("click", function() {
//        createContentPage();
//    });
//});

//// Generate dynamic page
//var dynamicPageIndex = 0;

//function createContentPage() {
//    mainView.router.loadContent(
//        "<!-- Top Navbar-->" +
//        "<div class=\"navbar\">" +
//        "  <div class=\"navbar-inner\">" +
//        "    <div class=\"left\"><a href=\"#\" class=\"back link\"><i class=\"icon icon-back\"></i><span>Back</span></a></div>" +
//        "    <div class=\"center sliding\">Dynamic Page " + (++dynamicPageIndex) + "</div>" +
//        "  </div>" +
//        "</div>" +
//        "<div class=\"pages\">" +
//        "  <!-- Page, data-page contains page name-->" +
//        "  <div data-page=\"dynamic-pages\" class=\"page\">" +
//        "    <!-- Scrollable page content-->" +
//        "    <div class=\"page-content\">" +
//        "      <div class=\"content-block\">" +
//        "        <div class=\"content-block-inner\">" +
//        "          <p>Here is a dynamic page created on " + new Date() + " !</p>" +
//        "          <p>Go <a href=\"#\" class=\"back\">back</a> or go to <a href=\"services.html\">Services</a>.</p>" +
//        "        </div>" +
//        "      </div>" +
//        "    </div>" +
//        "  </div>" +
//        "</div>"
//    );
//    return;
//}