$$("#patients").on("show", function() {
    var pageContainer = $$("#patients .page");
    var virtualList = null;
    var server = myApp.server();

    function patientsToItems(patients) {
        var items = [];
        patients.forEach(function(patient) {
            items.push({
                id: patient.objectId,
                icon: patient.photo ?
                    "<img src=\"" + patient.photo.url + "\" width=\"44\" />" :
                    "<div>" + patient.name.charAt(0) + patient.surname.charAt(0) + "</div>",
                firstName: patient.name,
                lastName: patient.surname,
                subtitle: patient.phone || "(Sin teléfono)",
                letter: patient.name.charAt(0),
            });
        });
        return items;
    }

    function removeTitleDuplicates() {
        var groupTitles = pageContainer.find(".list-group-title");
        var letters = [];
        for (var i = 0; i < groupTitles.length; i++) {
            var letter = $$(groupTitles[i]).text();
            if (letters.indexOf(letter) !== -1) {
                $$(groupTitles[i]).remove();
            } else {
                letters.push(letter);
            }
        }
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
        //template: "<li class=\"swipeout\" data-id=\"{{id}}\">" +
        //template: "<li class=\"list-group-title\">A</li>" +
        template: "<div>" +
            "  <li class=\"list-group-title {{letter}}\">{{letter}}</li>" +
            "  <li class=\"contact-item\" data-id=\"{{id}}\">" +
            "    <a href=\"patient.html?id={{id}}\" class=\"item-link\">" +
            //"      <div class=\"swipeout-content item-content\">" +
            "      <div class=\"item-content\">" +
            //"        <div class=\"item-media circle\">" +
            //"          {{icon}}" +
            //"        </div>" +
            "        <div class=\"item-media\">" +
            //"          <img src=\"img/cats/{{picId}}.png\" width=\"44\" />" +
            "          {{icon}}" +
            "        </div>" +
            "        <div class=\"item-inner\">" +
            //"          <div class=\"item-title\">" +
            //"            {{name}}" +
            //"            <strong>{{surname}}</strong>" +
            //"          </div>" +
            //"          <div class=\"item-subtitle\">{{subtitle}}</div>" +
            "          <div class=\"item-title-row\">" +
            "            <div class=\"item-title\">{{firstName}} {{lastName}}</div>" +
            "          </div>" +
            "          <div class=\"item-subtitle\">{{subtitle}}</div>" +
            "        </div>" +
            "      </div>" +
            //"      <div class=\"swipeout-actions-right\">" +
            //"        <a href=\"#\" class=\"swipeout-delete\" data-confirm=\"¿Seguro que quieres borrar este paciente?\" data-confirm-title=\"¿Borrar?\">Borrar</a>" +
            //"        </div>" +
            //"      </div>" +
            "    </a>" +
            "  </li>" +
            "</div>",
        //    template: "{{#.}}
        //        <li class="list-group-title">{{letter}}</li>
        //            {{#each list}}
        //	            <li data-id="{{id}}" class="contact-item">
        //		            <a href="contact.html?id={{id}}" class="item-link">
        //			            <div class="item-content">
        //				            <div class="item-media"><img src="img/cats/{{picId}}.png" width="44"></div>
        //				            <div class="item-inner">
        //					            <div class="item-title-row">
        //						            <div class="item-title">{{firstName}} {{lastName}}</div>
        //					            </div>
        //					            <div class="item-subtitle">{{company}}</div>
        //				            </div>
        //			            </div>
        //		            </a>
        //	            </li>
        //        {{/each}}
        //{{/.}}"
        //height: 63,
        //cache: false,
    });

    removeTitleDuplicates();

    //function deleted(e) {
    //    server.deletePatient($$(e.srcElement).attr("data-id"), {
    //        success: function(patient) {
    //            myApp.alert(patient.attributes.name + " " + patient.attributes.surname + " borrado correctamente");
    //        },
    //        error: function(patient, error) {
    //            console.log(patient, error);
    //        }
    //    });
    //}

    pageContainer.find(".pull-to-refresh-content").on("refresh", function(e) {
        server.retrievePatients({
            success: function(results) {
                console.log(results);
                server.setPatients(results);
                virtualList.replaceAllItems(patientsToItems(server.getPatients()));
                removeTitleDuplicates();
                //virtualList.update();
                myApp.pullToRefreshDone();
                //pageContainer.find(".swipeout").on("deleted", deleted);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });

    //pageContainer.find(".swipeout").on("deleted", function(e) {
    //    deleted(e);
    //});

    pageContainer.find(".searchbar-cancel").css("margin-right", "-65px");
    pageContainer.find(".virtual-list > ul").css("height", "100%");
});