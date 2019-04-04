import { Children } from "react";

export async function transform() {
  const obj: any = {
    name: "nivo",
    children: []
  };
  await fetch("http://localhost:5000/api/csvToJson")
    .then(response => response.json())
    .then(response => {
      const genderObject = getGenderObject(response);

      // separate data according to males and females
      const FbsMales = getFbs(genderObject.males);
      const FbsFemales = getFbs(genderObject.females);

      // separate data according to high and low blood sugar in males
      const highFbsMalesCpTypes = getChestPainTypes(FbsMales.high);
      const lowFbsMalesCpTypes = getChestPainTypes(FbsMales.low);

      // separate data according to high and low blood sugar in females
      const highFbsFemalesCpTypes = getChestPainTypes(FbsFemales.high);
      const lowFbsFemalesCpTypes = getChestPainTypes(FbsFemales.low);

      // combining males data and their children values here
      const malesData: any = {
        name: "males",
        children: []
      };
      const malesHighFbs = getFbsType(highFbsMalesCpTypes, "high blood sugar");
      malesData.children.push(malesHighFbs);
      const malesLowFbs = getFbsType(lowFbsMalesCpTypes, "low blood sugar");
      malesData.children.push(malesLowFbs);

      // combining females data and their children values here
      const femalesData: any = {
        name: "females",
        children: []
      };
      const femalesHighFbs = getFbsType(
        highFbsFemalesCpTypes,
        "high blood sugar"
      );
      const femalesLowFbs = getFbsType(lowFbsFemalesCpTypes, "low blood sugar");
      femalesData.children.push(femalesHighFbs);
      femalesData.children.push(femalesLowFbs);

      // combine final object with males & females properties and return
      obj.children.push(malesData);
      obj.children.push(femalesData);

      console.log("Data for sunburst: ", obj);
    });
  return obj;
}
// function getMalesData(input: any, name: string) {
//   const malesData: any = {
//     name: name,
//     children: []
//   };
//   getFbsType(input, name);
// }
// function getGenderData(input: any, name: string) {
//   const malesData: any = {
//     name: "males",
//     children: []
//   };
//   //   const malesHighFbs = getFbsType(highFbsMalesCpTypes, "high blood sugar");
//   //   malesData.children.push(malesHighFbs);
//   //   const malesLowFbs = getFbsType(lowFbsMalesCpTypes, "low blood sugar");
//   //   malesData.children.push(malesLowFbs);

//   //   console.log("males data,", malesData);
//   Object.keys(input).forEach(key => {
//     const highFbsMalesCpTypes = getChestPainTypes(input[key]);
//     console.log("highFbsMalesCpTypes", highFbsMalesCpTypes["cp"]);
//     //   const exValues = getExAnValues(input[key], "exang");
//     //   // console.log("prob i", exValues);
//     //   const cpType = getChestPainTypesWithChildren(exValues, key);
//     //   fbsType.children.push(cpType);
//   });

//   // return fbsType;
// }

// separate according to gender
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

// separate according to low and high blood sugar
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
//
// separate according to chest pain types
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

// get values for exercise induced angina
function getExAnValues(input: any, query: string) {
  var result = Object.keys(input).reduce(function(acc: any, key) {
    // for each key in the data object
    var cp: any = input[key][query];
    if (acc[cp]) acc[cp]++;
    else acc[cp] = 1;
    return acc;
  }, {});
  return result;
}

// combine results here, chest pain types and their children values
function getChestPainTypesWithChildren(input: any, type: string) {
  const cpType: any = {
    name: type,
    children: []
  };
  //   console.log("Input", input);
  Object.keys(input).forEach(key => {
    cpType.children.push({
      name: key,
      value: input[key]
    });
  });
  //   console.log("type", cpType);
  return cpType;
}
// combine results here, low/high blood sugar with their children values
function getFbsType(input: any, name: string) {
  const fbsType: any = {
    name: name,
    children: []
  };
  Object.keys(input).forEach(key => {
    const exValues = getExAnValues(input[key], "exang");
    const cpType = getChestPainTypesWithChildren(exValues, key);
    fbsType.children.push(cpType);
  });

  return fbsType;
}

// function getExerciseInducedAngina(input: any) {
//   // 1 = yes, 0 = no
//   let yes: any = [],
//     no: any = [];
//   input.forEach((item: any) => {
//     if (item["exang"] == "1") {
//       yes.push(item);
//     } else if (item["exang"] == "0") {
//       no.push(item);
//     }
//   });
//   return {
//     yes,
//     no
//   };
// }