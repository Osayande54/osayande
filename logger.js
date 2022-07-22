const Vlog = require("fs");
const hunger = Vlog.mkdir("input.txt", (data, err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("this was done succesfully");
  }
});
const read = require("fs");
const shop = read.readFile("example.txt", (err, data) => {
  if (err) {
    console.log("Something went wrong");
  } else {
    console.log("Operation read the file was succesful");
  }
});
console.log(__filename);
console.log(__dirname);
function printHello(){
  console.log("We go de alright na just time e go take")
}
setTimeout(printHello, 7000); 

