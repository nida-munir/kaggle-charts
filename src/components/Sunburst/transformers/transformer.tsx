import { Children } from "react";

export async function transform() {
  let data: any = [];
  await fetch("http://localhost:5000/api/csvToJson")
    .then(response => response.json())
    .then(response => {
      //   console.log("csv to json", response);
      //   const groupedData = getItems(response, query);
      const genderObject = getGenderObject(response);
      console.log(genderObject);
      const FbsMales = getFbs(genderObject.males);

      console.log("get fbs of males", FbsMales);
      const FbsFemales = getFbs(genderObject.females);
      console.log("get fbs of females", FbsFemales);
      const highFbsMalesCpTypes = getChestPainTypes(FbsMales.high);
      const lowFbsMalesCpTypes = getChestPainTypes(FbsMales.low);
      const highFbsFemalesCpTypes = getChestPainTypes(FbsFemales.high);
      const lowFbsFemalesCpTypes = getChestPainTypes(FbsFemales.low);

      console.log("cp males high : ", highFbsMalesCpTypes);
      console.log("cp males low : ", lowFbsMalesCpTypes);
      console.log("cp females high : ", highFbsFemalesCpTypes);
      console.log("cp females low : ", lowFbsFemalesCpTypes);

      //   const exForHighFbsMalesWithAta = getExerciseInducedAngina(
      //     highFbsMalesCpTypes.aTypicalAngina
      //   );
      //   const exForHighFbsMalesWithAsym = getExerciseInducedAngina(
      //     highFbsMalesCpTypes.asymptomatic
      //   );
      //   const exForHighFbsMalesWithTa = getExerciseInducedAngina(
      //     highFbsMalesCpTypes.typicalAngina
      //   );
      //   const exForHighFbsMalesWithNap = getExerciseInducedAngina(
      //     highFbsMalesCpTypes.nonAnginalPain
      //   );

      //   console.log("exForHighFbsMalesWithAta", exForHighFbsMalesWithAta);

      //   console.log("exForHighFbsMalesWithAsym", exForHighFbsMalesWithAsym);

      //   console.log("exForHighFbsMalesWithTa", exForHighFbsMalesWithTa);

      //   console.log("exForHighFbsMalesWithNap", exForHighFbsMalesWithNap);
      const aTypicalAnginaExValues = getExAnValues(
        highFbsMalesCpTypes.aTypicalAngina,
        "exang"
      );
      const cp0 = getChestPainTypesWithChildren(
        aTypicalAnginaExValues,
        "aTypicalAngina"
      );
      const asymtomaticExValues = getExAnValues(
        highFbsMalesCpTypes.asymptomatic,
        "exang"
      );
      const cp1 = getChestPainTypesWithChildren(
        asymtomaticExValues,
        "asymptomatic"
      );

      const nonAnginalPainExValues = getExAnValues(
        highFbsMalesCpTypes.nonAnginalPain,
        "exang"
      );
      const cp2 = getChestPainTypesWithChildren(
        nonAnginalPainExValues,
        "nonAnginalPain"
      );

      const typicalAnginaExValues = getExAnValues(
        highFbsMalesCpTypes.typicalAngina,
        "exang"
      );
      const cp3 = getChestPainTypesWithChildren(
        typicalAnginaExValues,
        "typicalAngina"
      );

      const fbsType: any = {
        name: "highfbs",
        children: {
          cp0,
          cp1,
          cp2,
          cp3
        }
      };
      console.log(fbsType);
    });
  return data;
}

function getFbsType(input: any, name: string) {
  const fbsType: any = {
    name: name,
    children: []
  };
  fbsType.children.push(input);
  console.log("high gbs", fbsType);
}
function getChestPainTypesWithChildren(input: any, type: string) {
  const cpType: any = {
    name: type,
    children: []
  };
  Object.keys(input).forEach(key => {
    cpType.children.push({
      name: key,
      value: input[key]
    });
  });
  console.log("type", cpType);
  return cpType;
}

function getGenderObject(input: any) {
  let males: any = [],
    females: any = [];
  input.forEach((item: any) => {
    if (item["sex"] == "1") {
      males.push(item);
    }
    if (item["sex"] == "0") {
      females.push(item);
    }
  });
  return {
    males,
    females
  };
}
function getFbs(input: any) {
  let high: any = [],
    low: any = [];
  input.forEach((item: any) => {
    if (item["fbs"] == "1") {
      high.push(item);
    }
    if (item["fbs"] == "0") {
      low.push(item);
    }
  });
  return {
    high,
    low
  };
}
function getExerciseInducedAngina(input: any) {
  // 1 = yes, 0 = no
  let yes: any = [],
    no: any = [];
  input.forEach((item: any) => {
    if (item["exang"] == "1") {
      yes.push(item);
    } else if (item["exang"] == "0") {
      no.push(item);
    }
  });
  return {
    yes,
    no
  };
}
function getChestPainTypes(input: any) {
  let typicalAngina: any = [], // 0
    nonAnginalPain: any = [], // 1
    aTypicalAngina: any = [], // 2
    asymptomatic: any = []; // 3
  input.forEach((item: any) => {
    if (item["cp"] == "0") {
      typicalAngina.push(item);
    }
    if (item["cp"] == "1") {
      nonAnginalPain.push(item);
    }
    if (item["cp"] == "2") {
      aTypicalAngina.push(item);
    } else if (item["cp"] == "3") {
      asymptomatic.push(item);
    }
  });
  return {
    typicalAngina,
    nonAnginalPain,
    aTypicalAngina,
    asymptomatic
  };
}
function getExAnValues(input: any, query: string) {
  //   const yes: any = [],
  //     no: any = [];

  //   Object.keys(input).forEach(key => {
  //     let obj: any = {};
  //     // 0 = yes,  1 = no
  //     obj = {
  //       value: input[key]
  //     };
  //     if (key == "0") {
  //       obj.name = "yes";
  //       yes.push();
  //     } else if (key == "1") {
  //       obj.name = "no";
  //       no.push();
  //     }
  //     data.children.push(obj);
  //   });
  //   return data;
  //   const data: any = {
  //     name: "male",
  //     children: []
  //   };
  var result = Object.keys(input).reduce(function(acc: any, key) {
    // for each key in the data object
    var cp: any = input[key][query];
    if (acc[cp]) acc[cp]++;
    else acc[cp] = 1;
    return acc;
  }, {});
  return result;
}

// function getGenderDataForSunburstChart(groupedData: any) {
//   const males: any = [],
//     females: any = [];
//   const data: any = {
//     name: "nivo",
//     children: []
//   };
//   Object.keys(groupedData).forEach(key => {
//     let obj: any = {};
//     // 1 = male,  0 = female
//     obj = {
//       value: groupedData[key]
//     };
//     if (key == "1") {
//       obj.name = "Male";
//       males.push();
//     } else if (key == "0") {
//       obj.name = "Female";
//     }
//     data.children.push(obj);
//   });
//   return data;
// }
