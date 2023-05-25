frappe.ui.form.on("PaperMachine Lost Time", {
    onload: function(frm) {
        remove_column_configure_button();
        frappe.ui.toolbar.toggle_full_width();
    },
});
