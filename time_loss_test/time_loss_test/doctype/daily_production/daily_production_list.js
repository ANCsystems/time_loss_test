frappe.listview_settings['Daily Production'] = {

    //get the beginning of the current month and the end of the current month
    onload: function(listview) {
        frappe.route_options = {
            "date": ["between", [frappe.datetime.month_start(), frappe.datetime.month_end()]]
        };
        frappe.ui.toolbar.toggle_full_width();
    },
    
    
    style: `
        .list-row-head .list-item__title {
            white-space: normal;
            overflow: visible;
        }
    `,
    formatters: {
        papermachine_reel_speed(val) {
            if (window.papermachine_min_val && window.papermachine_max_val) {
                const minVal = window.papermachine_min_val;
                const maxVal = window.papermachine_max_val;

                if (val < minVal || val > maxVal) {
                    return `<span style="color: red; font-weight: bold;">${val}</span>`;
                }

                return `<span style="color: green; font-weight: bold;">${val}</span>`;
            }
        },
    },
};



frappe.call({
    method: 'frappe.client.get',
    args: {
        doctype: 'Thresholds',
        filters: {
            name: 'papermachine_reel_speed_DP',
        },
    },
    callback: function (response) {
        if (response.message) {
            window.papermachine_min_val = response.message.min_value - 100;
            window.papermachine_max_val = response.message.max_value + 100;
        }
    },
});

frappe.ui.ready(function () {
    frappe.defaults.set_default('sidebar_collapse', 1);
});
