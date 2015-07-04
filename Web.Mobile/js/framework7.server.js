Framework7.prototype.plugins.server = function(app) {
    "use strict";
    var Server = function(params) {
        var self = this;
        var defaults = {
            applicationId: "C7xD9l2BrBM4y8n4H2kMSHlipUTkKu4v5JeoWnLG",
            javascriptKey: "cqkluJZ5Cuwy2lkluihgjxfIWCQqceaNg5DxZgsK",
        };
        params = params || {};
        for (var def in defaults) {
            if (typeof params[def] === "undefined") {
                params[def] = defaults[def];
            }
        }
        self.params = params;
        Parse.initialize(self.params.applicationId, self.params.javascriptKey);
        var Patient = Parse.Object.extend("Patient");

        self.retrievePatients = function(params) {
            new Parse.Query(Patient).find({
                success: params.success,
                error: params.error
            });
        };

        self.getPatients = function() {
            return JSON.parse(window.localStorage.getItem("Patients"));
        };

        self.setPatients = function(patients) {
            window.localStorage.setItem("Patients", JSON.stringify(patients));
        };

        self.persistPatient = function(params) {
            new Patient().save(params.data, {
                success: params.success,
                error: params.error,
            });
        };

        self.deletePatient = function(objectId, params) {
            new Parse.Query(Patient).get(objectId, {
                success: function(patient) {
                    patient.destroy({
                        success: params.success,
                        error: params.error,
                    });
                },
                error: function(object, error) {
                    console.log(object, error);
                }
            });
        };

        return self;
    };

    app.server = function() {
        return new Server();
    };

    return {
        hooks: {
            appInit: function() {
                var server = app.server();
                console.log("appInit");
                server.retrievePatients({
                    success: function(results) {
                        console.log(results);
                        server.setPatients(results);
                    },
                    error: function(error) {
                        console.log(error);
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