const assert = require("assert");
const { Given, When, Then } = require("cucumber");
let app = require("../../../src/app");

Given("today is {string}", function(givenDay) {
  this.today = givenDay;
});

When("I ask whether it's Friday yet", function() {
  this.actualAnswer = app.isItFriday(this.today);
});

Then("I should be told {string}", function(expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
