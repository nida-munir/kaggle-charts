export function transform() {
  fetch("http://localhost:5000/api/csvToJson")
    .then(response => response.json())
    .then(response => {
      console.log("csv to json", response);
      const query = "cp";
      console.log(getItems(response, query));
    });
  const csv = require("csvtojson");
}
function getItems(input: any, query: string) {
  var result = Object.keys(input).reduce(function(acc: any, key) {
    // for each key in the data object
    var cp: any = input[key][query]; // get the cpiliate of the according object
    if (acc[cp]) acc[cp]++;
    // if we already have have a counter for this cpiliate (cp) then increment the value from the accumulator acc
    else acc[cp] = 1; // otherwise start a counter for this affiliate (initialized with 1)
    return acc;
  }, {});
  return result;
  //   const arr = input;
  //   const obj: any = {};
  //   for (var i = 0; i < arr.length; i++) {
  //     let name = arr[i].name;
  //     if (!obj[name]) {
  //       obj[arr[i].name] = 1;
  //     } else if (obj[arr[i].name]) {
  //       obj[arr[i].name] += 1;
  //     }
  //   }
  //   return obj;
}
// example use
// console.log(getItems(order_contents)); // outputs entire object
// console.log(getItems(order_contents)["product 1"]); // outputs 10
