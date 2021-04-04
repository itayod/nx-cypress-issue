# Prefix issue

## Current Behavior
When generating a component under a project that is not the default project the project setting (e.g. the component's prefix) used to generate the component are taken from the default one.

## Expected Behavior
The schematics should recognize the correct project.

Worth mention it used to work perfectly in version 10.

## Steps to Reproduce

* Create a new workspace with a default app called "test".
* Create another new app "abc" `$ nx generate @nrwl/angular:app abc`.
* Change the prefix in `angular.json` to "abc".
* Generate a component under abc app
* The new component's prefix should be "abc".
