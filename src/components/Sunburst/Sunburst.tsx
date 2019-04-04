import React, { Component } from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";

class Sunburst extends Component {
  obj = {
    name: "nivo",
    color: "hsl(258, 70%, 50%)",
    children: [
      {
        name: "viz",
        color: "hsl(234, 70%, 50%)",
        children: [
          {
            name: "stack",
            color: "hsl(217, 70%, 50%)",
            children: [
              {
                name: "chart",
                color: "hsl(342, 70%, 50%)",
                loc: 34483
              },
              {
                name: "xAxis",
                color: "hsl(34, 70%, 50%)",
                loc: 44209
              },
              {
                name: "yAxis",
                color: "hsl(319, 70%, 50%)",
                loc: 86900
              },
              {
                name: "layers",
                color: "hsl(323, 70%, 50%)",
                loc: 148749
              }
            ]
          },
          {
            name: "pie",
            color: "hsl(160, 70%, 50%)",
            children: [
              {
                name: "chart",
                color: "hsl(267, 70%, 50%)",
                children: [
                  {
                    name: "pie",
                    color: "hsl(122, 70%, 50%)",
                    children: [
                      {
                        name: "outline",
                        color: "hsl(135, 70%, 50%)",
                        loc: 172478
                      },
                      {
                        name: "slices",
                        color: "hsl(95, 70%, 50%)",
                        loc: 33805
                      },
                      {
                        name: "bbox",
                        color: "hsl(199, 70%, 50%)",
                        loc: 104322
                      }
                    ]
                  },
                  {
                    name: "donut",
                    color: "hsl(179, 70%, 50%)",
                    loc: 99952
                  },
                  {
                    name: "gauge",
                    color: "hsl(188, 70%, 50%)",
                    loc: 85165
                  }
                ]
              },
              {
                name: "legends",
                color: "hsl(177, 70%, 50%)",
                loc: 19685
              }
            ]
          }
        ]
      },
      {
        name: "colors",
        color: "hsl(310, 70%, 50%)",
        children: [
          {
            name: "rgb",
            color: "hsl(73, 70%, 50%)",
            loc: 43740
          },
          {
            name: "hsl",
            color: "hsl(65, 70%, 50%)",
            loc: 99066
          }
        ]
      },
      {
        name: "utils",
        color: "hsl(79, 70%, 50%)",
        children: [
          {
            name: "randomize",
            color: "hsl(308, 70%, 50%)",
            loc: 75661
          },
          {
            name: "resetClock",
            color: "hsl(283, 70%, 50%)",
            loc: 92717
          },
          {
            name: "noop",
            color: "hsl(286, 70%, 50%)",
            loc: 130813
          },
          {
            name: "tick",
            color: "hsl(86, 70%, 50%)",
            loc: 28482
          },
          {
            name: "forceGC",
            color: "hsl(103, 70%, 50%)",
            loc: 68728
          },
          {
            name: "stackTrace",
            color: "hsl(252, 70%, 50%)",
            loc: 199885
          },
          {
            name: "dbg",
            color: "hsl(272, 70%, 50%)",
            loc: 24300
          }
        ]
      },
      {
        name: "generators",
        color: "hsl(191, 70%, 50%)",
        children: [
          {
            name: "address",
            color: "hsl(181, 70%, 50%)",
            loc: 178593
          },
          {
            name: "city",
            color: "hsl(354, 70%, 50%)",
            loc: 142673
          },
          {
            name: "animal",
            color: "hsl(327, 70%, 50%)",
            loc: 147095
          },
          {
            name: "movie",
            color: "hsl(242, 70%, 50%)",
            loc: 134975
          },
          {
            name: "user",
            color: "hsl(98, 70%, 50%)",
            loc: 39978
          }
        ]
      },
      {
        name: "set",
        color: "hsl(60, 70%, 50%)",
        children: [
          {
            name: "clone",
            color: "hsl(277, 70%, 50%)",
            loc: 197801
          },
          {
            name: "intersect",
            color: "hsl(75, 70%, 50%)",
            loc: 90014
          },
          {
            name: "merge",
            color: "hsl(127, 70%, 50%)",
            loc: 115032
          },
          {
            name: "reverse",
            color: "hsl(231, 70%, 50%)",
            loc: 157250
          },
          {
            name: "toArray",
            color: "hsl(60, 70%, 50%)",
            loc: 730
          },
          {
            name: "toObject",
            color: "hsl(125, 70%, 50%)",
            loc: 5627
          },
          {
            name: "fromCSV",
            color: "hsl(33, 70%, 50%)",
            loc: 114855
          },
          {
            name: "slice",
            color: "hsl(234, 70%, 50%)",
            loc: 194664
          },
          {
            name: "append",
            color: "hsl(340, 70%, 50%)",
            loc: 187550
          },
          {
            name: "prepend",
            color: "hsl(85, 70%, 50%)",
            loc: 183310
          },
          {
            name: "shuffle",
            color: "hsl(14, 70%, 50%)",
            loc: 106642
          },
          {
            name: "pick",
            color: "hsl(348, 70%, 50%)",
            loc: 100587
          },
          {
            name: "plouc",
            color: "hsl(117, 70%, 50%)",
            loc: 133750
          }
        ]
      },
      {
        name: "text",
        color: "hsl(159, 70%, 50%)",
        children: [
          {
            name: "trim",
            color: "hsl(55, 70%, 50%)",
            loc: 194454
          },
          {
            name: "slugify",
            color: "hsl(195, 70%, 50%)",
            loc: 150696
          },
          {
            name: "snakeCase",
            color: "hsl(51, 70%, 50%)",
            loc: 21296
          },
          {
            name: "camelCase",
            color: "hsl(267, 70%, 50%)",
            loc: 32500
          },
          {
            name: "repeat",
            color: "hsl(171, 70%, 50%)",
            loc: 834
          },
          {
            name: "padLeft",
            color: "hsl(314, 70%, 50%)",
            loc: 19216
          },
          {
            name: "padRight",
            color: "hsl(77, 70%, 50%)",
            loc: 140318
          },
          {
            name: "sanitize",
            color: "hsl(150, 70%, 50%)",
            loc: 85102
          },
          {
            name: "ploucify",
            color: "hsl(33, 70%, 50%)",
            loc: 60588
          }
        ]
      },
      {
        name: "misc",
        color: "hsl(164, 70%, 50%)",
        children: [
          {
            name: "whatever",
            color: "hsl(98, 70%, 50%)",
            children: [
              {
                name: "hey",
                color: "hsl(330, 70%, 50%)",
                loc: 69896
              },
              {
                name: "WTF",
                color: "hsl(40, 70%, 50%)",
                loc: 80114
              },
              {
                name: "lol",
                color: "hsl(354, 70%, 50%)",
                loc: 41162
              },
              {
                name: "IMHO",
                color: "hsl(277, 70%, 50%)",
                loc: 32301
              }
            ]
          },
          {
            name: "other",
            color: "hsl(350, 70%, 50%)",
            loc: 161178
          },
          {
            name: "crap",
            color: "hsl(277, 70%, 50%)",
            children: [
              {
                name: "crapA",
                color: "hsl(258, 70%, 50%)",
                loc: 162765
              },
              {
                name: "crapB",
                color: "hsl(307, 70%, 50%)",
                children: [
                  {
                    name: "crapB1",
                    color: "hsl(11, 70%, 50%)",
                    loc: 147853
                  },
                  {
                    name: "crapB2",
                    color: "hsl(174, 70%, 50%)",
                    loc: 156085
                  },
                  {
                    name: "crapB3",
                    color: "hsl(263, 70%, 50%)",
                    loc: 80740
                  },
                  {
                    name: "crapB4",
                    color: "hsl(204, 70%, 50%)",
                    loc: 31534
                  }
                ]
              },
              {
                name: "crapC",
                color: "hsl(60, 70%, 50%)",
                children: [
                  {
                    name: "crapC1",
                    color: "hsl(191, 70%, 50%)",
                    loc: 132087
                  },
                  {
                    name: "crapC2",
                    color: "hsl(259, 70%, 50%)",
                    loc: 8032
                  },
                  {
                    name: "crapC3",
                    color: "hsl(100, 70%, 50%)",
                    loc: 179918
                  },
                  {
                    name: "crapC4",
                    color: "hsl(41, 70%, 50%)",
                    loc: 160001
                  },
                  {
                    name: "crapC5",
                    color: "hsl(296, 70%, 50%)",
                    loc: 156044
                  },
                  {
                    name: "crapC6",
                    color: "hsl(158, 70%, 50%)",
                    loc: 124535
                  },
                  {
                    name: "crapC7",
                    color: "hsl(197, 70%, 50%)",
                    loc: 88374
                  },
                  {
                    name: "crapC8",
                    color: "hsl(349, 70%, 50%)",
                    loc: 107212
                  },
                  {
                    name: "crapC9",
                    color: "hsl(323, 70%, 50%)",
                    loc: 65449
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  render() {
    return (
      <ResponsiveSunburst
        data={this.obj}
        margin={{
          top: 40,
          right: 20,
          bottom: 20,
          left: 20
        }}
        identity="name"
        value="loc"
        cornerRadius={2}
        borderWidth={1}
        borderColor="white"
        colors="nivo"
        colorBy="id"
        childColor="inherit"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
      />
    );
  }
}

export default Sunburst;
