export async function readFile() {
  let data: any = {};
  await fetch("http://localhost:5000/api/csvToJson")
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const genderObject = getGenderObject(response);
      const fbsObject = getFbsObject(response);
      const maleFbsCount = getCount(genderObject.males, "fbs");
      const femaleFbsCount = getCount(genderObject.females, "fbs");
      const highBsCpTypes = getCount(fbsObject.high, "cp");
      const lowBsCpTypes = getCount(fbsObject.low, "cp");

      const links = generateLinks(
        maleFbsCount,
        femaleFbsCount,
        highBsCpTypes,
        lowBsCpTypes
      );
      data = {
        links,
        nodes: [
          {
            id: "male"
          },
          {
            id: "female"
          },
          {
            id: "high"
          },
          {
            id: "low"
          },
          {
            id: "cpType1"
          },
          {
            id: "cpType2"
          },
          {
            id: "cpType3"
          },
          {
            id: "cpType4"
          }
        ]
      };
    });
  return data;
}
function generateLinks(
  maleFbsCount: any,
  femaleFbsCount: any,
  highBsCpTypes: any,
  lowBsCpTypes: any
) {
  return {
    nodes: [
      {
        id: "male"
      },
      {
        id: "female"
      },
      {
        id: "high"
      },
      {
        id: "low"
      },
      {
        id: "cpType1"
      },
      {
        id: "cpType2"
      },
      {
        id: "cpType3"
      },
      {
        id: "cpType4"
      }
    ],
    links: [
      {
        source: "male",
        target: "high",
        value: 171
      },
      {
        source: "male",
        target: "low",
        value: 152
      },
      {
        source: "female",
        target: "high",
        value: 61
      },
      {
        source: "female",
        target: "low",
        value: 179
      },
      {
        source: "high",
        target: "cpType1",
        value: 49
      },
      {
        source: "high",
        target: "cpType2",
        value: 128
      },
      {
        source: "high",
        target: "cpType3",
        value: 82
      },
      {
        source: "high",
        target: "cpType4",
        value: 11
      },
      {
        source: "low",
        target: "cpType1",
        value: 84
      },
      {
        source: "low",
        target: "cpType2",
        value: 66
      },
      {
        source: "low",
        target: "cpType3",
        value: 147
      },
      {
        source: "low",
        target: "cpType4",
        value: 147
      }
    ]
  };
  const links = [
    {
      source: "male",
      target: "high",
      value: maleFbsCount[0]
    },
    {
      source: "male",
      target: "low",
      value: maleFbsCount[1]
    },
    {
      source: "female",
      target: "high",
      value: femaleFbsCount[0]
    },
    {
      source: "female",
      target: "low",
      value: femaleFbsCount[1]
    },
    ,
    {
      source: "high",
      target: "cpType1",
      value: highBsCpTypes[0]
    },
    {
      source: "high",
      target: "cpType2",
      value: highBsCpTypes[1]
    },
    {
      source: "high",
      target: "cpType3",
      value: highBsCpTypes[2]
    },
    {
      source: "high",
      target: "cpType4",
      value: highBsCpTypes[3]
    },
    {
      source: "low",
      target: "cpType1",
      value: lowBsCpTypes[0]
    },
    {
      source: "low",
      target: "cpType2",
      value: lowBsCpTypes[1]
    },
    {
      source: "low",
      target: "cpType3",
      value: lowBsCpTypes[2]
    },
    {
      source: "low",
      target: "cpType4",
      value: lowBsCpTypes[3]
    }
  ];

  return links;
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

function getFbsObject(input: any) {
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
