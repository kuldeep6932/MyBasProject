/*global QUnit*/

sap.ui.define([
	"data_test/controller/Table.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Table Controller");

	QUnit.test("I should test the Table controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
