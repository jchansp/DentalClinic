$$("#patients").on("show", function() {
    //myApp.onPageInit("patients", function(page) {
    var pageContainer = $$("#patients .page");
    var virtualList = null;
    var server = myApp.server();

    function patientsToItems(patients) {
        var items = [];
        patients.forEach(function(patient) {
            items.push({
                id: patient.objectId,
                icon: patient.photo ?
                    "<img src=\"" + patient.photo.url + "\" />" :
                    "<div class=\"circle-inner\">" + patient.name.charAt(0) + patient.surname.charAt(0) + "</div>",
                name: patient.name,
                surname: patient.surname,
                subtitle: patient.phone || "(Sin teléfono)",
            });
        });
        return items;
    }

    virtualList = myApp.virtualList(pageContainer.find(".virtual-list"), {
        items: patientsToItems(server.getPatients()),
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
            "    <div class=\"item-media circle\">" +
            "      {{icon}}" +
            "    </div>" +
            "    <div class=\"item-inner\">" +
            //"      <div class=\"item-title\">" +
            "        {{name}}" +
            "        <strong>{{surname}}</strong>" +
            //"      </div>" +
            "      <div class=\"item-subtitle\">{{subtitle}}</div>" +
            "    </div>" +
            "  </div>" +
            "  <div class=\"swipeout-actions-right\">" +
            "    <a href=\"#\" class=\"swipeout-delete\" data-confirm=\"¿Seguro que quieres borrar este paciente?\" data-confirm-title=\"¿Borrar?\">Borrar</a>" +
            "    </div>" +
            "  </div>" +
            "</li>",
        height: 57,
        //cache: false,
    });

    function deleted(e) {
        server.deletePatient($$(e.srcElement).attr("data-id"), {
            success: function(patient) {
                myApp.alert(patient.attributes.name + " " + patient.attributes.surname + " borrado correctamente");
            },
            error: function(patient, error) {
                console.log(patient, error);
            }
        });
    }

    pageContainer.find(".pull-to-refresh-content").on("refresh", function(e) {
        server.retrievePatients({
            success: function(results) {
                console.log(results);
                server.setPatients(results);
                virtualList.replaceAllItems(patientsToItems(server.getPatients()));
                virtualList.update();
                myApp.pullToRefreshDone();
                pageContainer.find(".swipeout").on("deleted", deleted);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });

    pageContainer.find(".swipeout").on("deleted", function(e) {
        deleted(e);
    });

    $$(".searchbar-cancel").css("margin-right", "-65px");
});