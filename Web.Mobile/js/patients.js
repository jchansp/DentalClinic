myApp.onPageInit("patients", function(page) {
    function init() {
        var items = [];
        myApp.parse().getPatients().forEach(function(patient) {
            items.push({
                title: patient.name + " " + patient.surname,
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
            template: "<li>" +
                "<a href=\"#\" class=\"item-link item-content\">" +
                "<div class=\"item-inner\">" +
                "<div class=\"item-title-row\">" +
                "<div class=\"item-title\">{{title}}</div>" +
                "</div>" +
                "<div class=\"item-subtitle\">{{subtitle}}</div>" +
                "</div>" +
                "</a>" +
                "</li>",
            //height: 63,
        });
    }

    //function onError(xhr, textStatus, errorThrown) {
    //    myApp.hidePreloader();
    //    myApp.alert("Error");
    //}

    //function onSuccess(data, textStatus) {
    //    myApp.hidePreloader();
    //    data = JSON.parse(data);
    //    if (!data.results) {
    //        myApp.alert("Error");
    //        return;
    //    }
    //    var items = [];
    //    data.results.forEach(function(patient) {
    //        items.push({
    //            title: patient.name,
    //            subtitle: "",
    //        });
    //    });
    //    myApp.virtualList($$(page.container).find(".virtual-list"), {
    //        items: items,
    //        searchAll: function(query, items) {
    //            var found = [];
    //            for (var i = 0; i < items.length; i++) {
    //                if (items[i].title.indexOf(query) >= 0 || query.trim() === "")
    //                    found.push(i);
    //            }
    //            return found;
    //        },
    //        template: "<li>" + "<a href=\"#\" class=\"item-link item-content\">" + "<div class=\"item-inner\">" + "<div class=\"item-title-row\">" + "<div class=\"item-title\">{{title}}</div>" + "</div>" + "<div class=\"item-subtitle\">{{subtitle}}</div>" + "</div>" + "</a>" + "</li>",
    //        //height: 63,
    //    });
    //}
    init();
    $$(page.container).find(".pull-to-refresh-content").on("refresh", function(e) {
        var parse = myApp.parse();
        myApp.showPreloader("Cargando Pacientes...");
        parse.retrievePatients({
            success: function(data, textStatus) {
                myApp.hidePreloader();
                console.log(data, textStatus);
                parse.setPatients(data.results);
                init();
                myApp.pullToRefreshDone();
            }
        });
        //// Emulate 2s loading
        //setTimeout(function() {
        //    // Random image
        //    var picURL = "http://hhhhold.com/88/d/jpg?" + Math.round(Math.random() * 100);
        //    // Random song
        //    var song = songs[Math.floor(Math.random() * songs.length)];
        //    // Random author
        //    var author = authors[Math.floor(Math.random() * authors.length)];
        //    // List item html
        //    var itemHTML = "<li class=\"item-content\">" +
        //        "<div class=\"item-media\"><img src=\"" + picURL + "\" width=\"44\"/></div>" +
        //        "<div class=\"item-inner\">" +
        //        "<div class=\"item-title-row\">" +
        //        "<div class=\"item-title\">" + song + "</div>" +
        //        "</div>" +
        //        "<div class=\"item-subtitle\">" + author + "</div>" +
        //        "</div>" +
        //        "</li>";
        //    // Prepend new list element
        //    ptrContent.find("ul").prepend(itemHTML);
        //    // When loading done, we need to reset it
        //    myApp.pullToRefreshDone();
        //}, 2000);
    });
});