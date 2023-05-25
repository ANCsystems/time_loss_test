from frappe.model.document import Document
from frappe.model.naming import getseries
import frappe

class DailyProduction(Document):
    def autoname(self):
        # Get the current date
        current_date = frappe.utils.nowdate()

        # Check if a record with the current name exists
        if frappe.db.exists(self.doctype, current_date):
            # If a record exists, append "-v1"
            version = 1
            while frappe.db.exists(self.doctype, f"{current_date}-v{version}"):
                version += 1
            self.name = f"{current_date}-v{version}"
        else:
            self.name = current_date
