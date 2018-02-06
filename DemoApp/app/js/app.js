'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize']); //dependant modules are loaded before the current module, so that anything it is using is accessible by the time this one is laoded. dependant ones are in the [] array.
