export async function transform() {
  let data: any = [];
  await fetch("http://localhost:5000/api/csvToJson")
    .then(response => response.json())
    .then(response => {
      //   console.log("csv to json", response);
      const query = "cp";
      const groupedData = getItems(response, query);

      console.log(groupedData);
      data = getDataForPieChart(groupedData);
      console.log("returned data", data);
    });
  console.log("returning data", data);
  return data;
}
function getItems(input: any, query: string) {
  var result = Object.keys(input).reduce(function(acc: any, key) {
    // for each key in the data object
    var cp: any = input[key][query];
    if (acc[cp]) acc[cp]++;
    else acc[cp] = 1;
    return acc;
  }, {});
  return result;
}

function getDataForPieChart(groupedData: any) {
  const data: any = [];
  Object.keys(groupedData).reduce(function(acc: any, key) {
    acc = {
      id: key,
      label: key,
      value: groupedData[key]
    };
    data.push(acc);
    // acc = {};
    // console.log("data transformed", data);
  }, {});
  return data;
}
