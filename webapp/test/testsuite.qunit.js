sap.ui.define(() => {
    "use strict";
    return {
        name: "QUnit test suite for dummy.firstapp",
        defaults: {
            page: "ui5://test-resources/dummy/firstapp/Test.qunit.html?testsuite={suite}&test={name}",
            qunit: {
                version: 2
            },
            ui5: {
                theme: "sap_horizon"
            },
            loader: {
                paths: {
                    "dummy/firstapp": "../"
                }
            }
        },
        tests: {
            "unit/unitTests": {
                title: "dummy.firstapp - Unit Tests"
            },
            "integration/opaTests": {
                title: "dummy.firstapp - Integration Tests"
            }
        }
    };
});