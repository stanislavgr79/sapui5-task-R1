sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
	"use strict";

	return Controller.extend("dummy.firstapp.controller.InvoiceList", {
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR",
				defaultStatus: "All" // По умолчанию выбран "All"
			});
			this.getView().setModel(oViewModel, "view");

		},

        _applyFilters() {
            const aFilters = [];

            const oSearchField = this.byId("invoiceList").getParent().getHeaderToolbar().getContent()[2];
            const sQuery = oSearchField.getValue();
            if (sQuery) {
                aFilters.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            const oStatusFilter = this.byId("statusFilter");
            const sSelectedKey = oStatusFilter.getSelectedKey();
            if (sSelectedKey && sSelectedKey !== "All") {
                aFilters.push(new Filter("Status", FilterOperator.EQ, sSelectedKey));
            }

            const oList = this.byId("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilters);
        },

        onFilterInvoices() {
            this._applyFilters();
        },

        onFilterByStatus() {
            this._applyFilters();
        },

		onPress(oEvent) {
			const oItem = oEvent.getSource();
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substring(1))
			});
		}
	});
});