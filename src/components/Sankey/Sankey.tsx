import React, { Component } from "react";
import { ResponsiveSankey } from "@nivo/sankey";
type Props = {};
type State = {};
class Sankey extends React.Component<Props, State> {
  data = {
    nodes: [
      {
        id: "John",
        color: "hsl(244, 70%, 50%)"
      },
      {
        id: "Raoul",
        color: "hsl(198, 70%, 50%)"
      },
      {
        id: "Jane",
        color: "hsl(157, 70%, 50%)"
      },
      {
        id: "Marcel",
        color: "hsl(82, 70%, 50%)"
      },
      {
        id: "Ibrahim",
        color: "hsl(78, 70%, 50%)"
      },
      {
        id: "Junko",
        color: "hsl(346, 70%, 50%)"
      }
    ],
    links: [
      {
        source: "Raoul",
        target: "Junko",
        value: 171
      },
      {
        source: "Raoul",
        target: "Marcel",
        value: 152
      },
      {
        source: "Raoul",
        target: "Jane",
        value: 61
      },
      {
        source: "Raoul",
        target: "John",
        value: 179
      },
      {
        source: "Raoul",
        target: "Ibrahim",
        value: 49
      },
      {
        source: "John",
        target: "Marcel",
        value: 128
      },
      {
        source: "John",
        target: "Ibrahim",
        value: 82
      },
      {
        source: "John",
        target: "Jane",
        value: 11
      },
      {
        source: "Junko",
        target: "John",
        value: 84
      },
      {
        source: "Ibrahim",
        target: "Jane",
        value: 66
      },
      {
        source: "Jane",
        target: "Marcel",
        value: 147
      }
    ]
  };
  render() {
    return (
      <ResponsiveSankey
        data={this.data}
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
    );
  }
}

export default Sankey;
