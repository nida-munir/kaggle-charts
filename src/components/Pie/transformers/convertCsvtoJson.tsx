export async function readFile() {
  let data: any = [];
  await fetch("http://localhost:5000/api/csvToJson")
    .then(response => response.json())
    .then(response => {
      console.log(response);
      data = transform(response);
    });
  return data;
}
export function transform(response: any) {
  const query = "cp";
  const groupedData = getCount(response, query);
  return getDataForPieChart(groupedData);
}
// get count of patients for each chest pain type
function getCount(input: any, query: string) {
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
  let cpType = "";
  Object.keys(groupedData).forEach(key => {
    if (key == "0") {
      cpType = "typical angina";
    }
    if (key == "1") {
      cpType = "atypical angina";
    }
    if (key == "2") {
      cpType = "non-anginal pain";
    }
    if (key == "3") {
      cpType = "asymptomatic";
    }
    const temp = {
      id: cpType,
      label: cpType,
      value: groupedData[key]
    };
    data.push(temp);
  });

  return data;
}
