/* ===== Calendar ===== */
myApp.onPageInit("calendar", function(page) {
    myApp.showPreloader();
    $$.getJSON("json/non-working-days.js", function(json) {
        console.log(json);
        myApp.hidePreloader();
        //mainView.router.loadPage('about.html');
        var calendarDateFormat = myApp.calendar({
            input: "#calendar-date-format",
            dateFormat: "DD, dd MM, yyyy",
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            minDate: new Date(),
        });
        ////var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        //var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        //var calendarInline = myApp.calendar({
        //    container: "#ks-calendar-inline-container",
        //    value: [new Date()],
        //    weekHeader: false,
        //    toolbarTemplate:
        //        "<div class=\"toolbar calendar-custom-toolbar\">" +
        //            "<div class=\"toolbar-inner\">" +
        //            "<div class=\"left\">" +
        //            "<a href=\"#\" class=\"link icon-only\"><i class=\"icon icon-back\"></i></a>" +
        //            "</div>" +
        //            "<div class=\"center\"></div>" +
        //            "<div class=\"right\">" +
        //            "<a href=\"#\" class=\"link icon-only\"><i class=\"icon icon-forward\"></i></a>" +
        //            "</div>" +
        //            "</div>" +
        //            "</div>",
        //    onOpen: function(p) {
        //        $$(".calendar-custom-toolbar .center").text(monthNames[p.currentMonth] + ", " + p.currentYear);
        //        $$(".calendar-custom-toolbar .left .link").on("click", function() {
        //            calendarInline.prevMonth();
        //        });
        //        $$(".calendar-custom-toolbar .right .link").on("click", function() {
        //            calendarInline.nextMonth();
        //        });
        //    },
        //    onMonthYearChangeStart: function(p) {
        //        $$(".calendar-custom-toolbar .center").text(monthNames[p.currentMonth] + ", " + p.currentYear);
        //    },
        //    onChange: function(p, values, displayValues) {
        //        console.log(p);
        //        console.log(values);
        //        console.log(displayValues);
        //    }
        //});
        var today = new Date();
        var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var pickerInline = myApp.picker({
            input: "#picker-date",
            container: "#picker-date-container",
            toolbar: false,
            rotateEffect: true,
            //dateFormat: "DD, dd MM, yyyy",
            monthNames: monthNames,
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            minDate: new Date(),

            //value: [today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes())],
            value: [today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), "00"],

            onChange: function(picker, values, displayValues) {
                var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
                if (values[1] > daysInMonth) {
                    picker.cols[1].setValue(daysInMonth);
                }
            },

            formatValue: function(p, values, displayValues) {
                return values[3] + ":" + values[4] + ", " + values[1] + " de " + displayValues[0] + " de " + values[2];
            },

            cols: [
                // Months
                {
                    values: ("0 1 2 3 4 5 6 7 8 9 10 11").split(" "),
                    //displayValues: ('January February March April May June July August September October November December').split(' '),
                    displayValues: monthNames,
                    textAlign: "left"
                },
                // Days
                {
                    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                },
                // Years
                {
                    values: (function() {
                        var arr = [];
                        for (var i = 1950; i <= 2030; i++) {
                            arr.push(i);
                        }
                        return arr;
                    })(),
                },
                // Space divider
                {
                    divider: true,
                    content: "  "
                },
                // Hours
                {
                    values: (function() {
                        var arr = [];
                        for (var i = 0; i <= 23; i++) {
                            arr.push(i);
                        }
                        return arr;
                    })(),
                },
                // Divider
                {
                    divider: true,
                    content: ":"
                },
                // Minutes
                {
                    values: (function() {
                        var arr = [];
                        //for (var i = 0; i <= 59; i++) {
                        for (var i = 0; i <= 59; i=i+5) {
                            arr.push(i < 10 ? "0" + i : i);
                        }
                        return arr;
                    })(),
                }
            ]
        });
    });
});