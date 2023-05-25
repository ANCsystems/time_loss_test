function applyFieldColor(frm, field, minValue, maxValue) {
    var speed = parseFloat(frm.doc[field]);
    var tolerance = (maxValue - minValue) * 0.05;

    // Apply highlighting based on the speed value with tolerance
    if (speed >= minValue - tolerance && speed <= maxValue + tolerance) {
        frm.get_field(field).$input.css('background-color', '#c6f5d6'); // Light green
    } else {
        frm.get_field(field).$input.css('background-color', '#f5c6c6'); // Light red
    }
}

frappe.ui.form.on("Daily Production", {
    refresh: function(frm) {
        // Fetch the threshold values from the "Thresholds" doctype
        frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'Thresholds',
                name: 'papermachine_reel_speed_DP'
            },
            callback: function(response) {
                if (response.message) {
                    var thresholds = response.message;
                    var minValue = parseFloat(thresholds.min_value) - 100;
                    var maxValue = parseFloat(thresholds.max_value) + 100;
                    applyFieldColor(frm, 'papermachine_reel_speed', minValue, maxValue);
                }
            }
        });
    },
    papermachine_reel_speed: function(frm) {
        // Fetch the threshold values from the "Thresholds" doctype
        frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'Thresholds',
                name: 'papermachine_reel_speed_DP'
            },
            callback: function(response) {
                if (response.message) {
                    var thresholds = response.message;
                    var minValue = parseFloat(thresholds.min_value) - 100;
                    var maxValue = parseFloat(thresholds.max_value) + 100;
                    applyFieldColor(frm, 'papermachine_reel_speed', minValue, maxValue);
                }
            }
        });
    }
});


