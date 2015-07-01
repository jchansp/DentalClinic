myApp.onPageInit("patients", function(page) {

    var virtualList;
    var backend = myApp.backend();

    function patientsToItems(patients) {
        var items = [];
        patients.forEach(function(patient) {
            items.push({
                id: patient.objectId,
                title: patient.name + " " + patient.surname,
                subtitle: "",
            });
        });
        return items;
    }

    virtualList = myApp.virtualList($$(page.container).find(".virtual-list"), {
        items: patientsToItems(backend.getPatients()),
        searchAll: function(query, items) {
            var found = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].title.indexOf(query) >= 0 || query.trim() === "")
                    found.push(i);
            }
            return found;
        },
        template: "<li class=\"swipeout\" data-id=\"{{id}}\">" +
            "  <div class=\"swipeout-content item-content\">" +
            "    <div class=\"item-media\">...</div>" +
            "    <div class=\"item-inner\">" +
            "      <div class=\"item-title\">{{title}}</div>" +
            "      <div class=\"item-subtitle\">{{subtitle}}</div>" +
            "    </div>" +
            "  </div>" +
            "  <div class=\"swipeout-actions-right\">" +
            "    <a href=\"#\" class=\"swipeout-delete\" data-confirm=\"¿Seguro que quieres borrar este paciente?\" data-confirm-title=\"¿Borrar?\">Borrar</a>" +
            "    </div>" +
            "  </div>" +
            "</li>",
        //height: 63,
        cache: false,
    });

    function deleted(e) {
        backend.deletePatient($$(e.srcElement).attr("data-id"), {
            success: function(patient) {
                myApp.alert(patient.attributes.name + " " + patient.attributes.surname + " borrado correctamente");
            },
            error: function(patient, error) {
                console.log(patient, error);
            }
        });
    }

    $$(page.container).find(".pull-to-refresh-content").on("refresh", function(e) {
        backend.retrievePatients({
            success: function(results) {
                console.log(results);
                backend.setPatients(results);
                virtualList.replaceAllItems(patientsToItems(backend.getPatients()));
                virtualList.update();
                myApp.pullToRefreshDone();
                $$(page.container).find(".swipeout").on("deleted", deleted);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });

    $$(page.container).find(".swipeout").on("deleted", function(e) {
        deleted(e);
    });
});