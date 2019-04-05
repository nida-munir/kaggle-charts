import React, { Component } from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import { readFile } from "./transformers/transform";
type Props = {};
type State = {};
class Sankey extends React.Component<Props, State> {
  state = {
    data: { nodes: [], links: [] }
  };
  async componentDidMount() {
    const data = await readFile();
    console.log("data to be updated in state:", data);
    this.setState({ data });
  }
  dat2a = {
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
  render() {
    const { data } = this.state;
    console.log(data);
    console.log(this.dat2a);

    if (data.nodes.length > 0) {
      return (
        <div id="my-sankey-chart">
          <ResponsiveSankey
            data={data}
            // margin={{
            //   top: 40,
            //   right: 160,
            //   bottom: 40,
            //   left: 50
            // }}
            align="justify"
            // colors="category10"
            nodeOpacity={1}
            nodeThickness={18}
            nodeInnerPadding={3}
            nodeSpacing={24}
            nodeBorderWidth={0}
            nodeBorderColor="inherit:darker(0.8)"
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            enableLinkGradient={true}
            labelPosition="outside"
            labelOrientation="vertical"
            labelPadding={16}
            labelTextColor="inherit:darker(1)"
            // animate={true}
            // motionStiffness={140}
            // motionDamping={13}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                translateX: 130,
                itemWidth: 100,
                itemHeight: 14,
                itemDirection: "right-to-left",
                itemsSpacing: 2,
                itemTextColor: "#999",
                symbolSize: 14,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000"
                    }
                  }
                ]
              }
            ]}
          />
        </div>
      );
    } else {
      console.log("length is zero ", data.nodes.length > 0);
      return <p>no nodes</p>;
    }
  }
}

export default Sankey;
