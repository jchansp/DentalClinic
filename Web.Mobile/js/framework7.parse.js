Framework7.prototype.plugins.parse = function(app) {
    "use strict";

    var Parse = function(params) {
        var self = this;
        var $$ = Dom7;
        var defaults = {
            applicationId: "C7xD9l2BrBM4y8n4H2kMSHlipUTkKu4v5JeoWnLG",
            restApiKey: "epEUYTX3LBpapTgTXF7xcBLZHB5wIaUCcZj0QMcp",
        };
        params = params || {};
        for (var def in defaults) {
            if (typeof params[def] === "undefined") {
                params[def] = defaults[def];
            }
        }
        self.params = params;
        $$.ajaxSetup({
            headers: {
                "X-Parse-Application-Id": self.params.applicationId,
                "X-Parse-REST-API-Key": self.params.restApiKey
            }
        });
        self.retrievePatients = function(params) {
            return $$.ajax({
                url: "https://api.parse.com/1/classes/Patient",
                method: "GET",
                success: params.success,
                dataType: "json"
            });
        };
        self.getPatients = function() {
            return JSON.parse(window.localStorage.getItem("Patients"));
        };
        self.setPatients = function(patients) {
            window.localStorage.setItem("Patients", JSON.stringify(patients));
        };
        self.persistPatient = function (params) {
            return $$.ajax({
                url: "https://api.parse.com/1/classes/Patient",
                method: "POST",
                //contentType: "application/json",
                data: JSON.stringify(params.data),
                success: params.success,
                //dataType: "json"
            });
        };
        return self;
    };

    app.parse = function() {
        return new Parse();
    };

    return {
        hooks: {
            appInit: function() {
                var parse = app.parse();
                console.log("appInit");
                app.showPreloader("Cargando Pacientes...");
                parse.retrievePatients({
                    success: function(data, textStatus) {
                        app.hidePreloader();
                        console.log(data, textStatus);
                        parse.setPatients(data.results);
                    }
                });
            },
            navbarInit: function(navbar, pageData) {
                //console.log("navbarInit", navbar, pageData);
            },
            pageInit: function(pageData) {
                //console.log("pageInit", pageData);
            },
            pageBeforeInit: function(pageData) {
                //console.log("pageBeforeInit", pageData);
            },
            pageBeforeAnimation: function(pageData) {
                //console.log("pageBeforeAnimation", pageData);
            },
            pageAfterAnimation: function(pageData) {
                //console.log("pageAfterAnimation", pageData);
            },
            pageBeforeRemove: function(pageData) {
                //console.log("pageBeforeRemove", pageData);
            },
            addView: function(view) {
                //console.log("addView", view);
            },
            loadPage: function(view, url, content) {
                //console.log("loadPage", view, url, content);
            },
            goBack: function(view, url, preloadOnly) {
                //console.log("goBack", view, url, preloadOnly);
            },
            swipePanelSetTransform: function(views, panel, percentage) {
                //console.log("swipePanelSetTransform", views, panel, percentage);
            }
        }
    };
};