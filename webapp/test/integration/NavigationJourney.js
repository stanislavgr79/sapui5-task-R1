/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Main"
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("Should open the Hello dialog", (Given, When, Then) => {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "dummy.firstapp"
			}
		});

		//Actions
		When.onTheMainPage.iPressTheSayHelloWithDialogButton();

		// Assertions
		Then.onTheMainPage.iShouldSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});
