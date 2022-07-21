var plow = require("fs");
plow.writeFile("example.txt", "this is an example", (err) => {
  if (err) {
    console.log("opps!!! something went wrong");
  } else {
    console.log("Congrats!!! operation was successful");
  }
});
var flow = require("fs");
flow.appendFile(
  "example.js",
  "I am currently at the Etihad stadium in Manchester",
  (err) => {
    if (err) {
      console.log("error has occured once more");
    } else {
      console.log("Whoolala");
    }
  }
);
// const fold = require("node:path");
// const sugar = fold.normalize('C:\Users\HP\projects\osayande\logger.js')
// console.log(sugar)
const blem = require("os");
const vlog = blem.release();
console.log(vlog)
