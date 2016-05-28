// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by redux-meteorware.js.
import { name as packageName } from "meteor/redux-meteorware";

// Write your tests here!
// Here is an example.
Tinytest.add('redux-meteorware - example', function (test) {
  test.equal(packageName, "redux-meteorware");
});
