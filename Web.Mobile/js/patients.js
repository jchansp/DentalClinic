myApp.onPageInit("patients", function(page) {
    myApp.showPreloader();
    var query = "https://api.parse.com/1/classes/Patient";
    $$.ajax({
        url: query,
        headers: { "X-Parse-Application-Id": applicationId, "X-Parse-REST-API-Key": restApiKey },
        type: "GET",
        success: function(data, textStatus) {
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
                height: 63,
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            myApp.hidePreloader();
            myApp.alert("Error");
        }
    });

    var items = [];
    for (var i = 0; i < 10000; i++) {
        items.push({ title: "Item " + i, subtitle: "Subtitle " + i });
    }
    var virtualList = myApp.virtualList($$(page.container).find(".virtual-list"), {
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
        height: 63,
    });
});