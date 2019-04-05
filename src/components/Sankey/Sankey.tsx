// lib
import React, { Component } from "react";
import { ResponsiveSankey } from "@nivo/sankey";
// src
import { readFile } from "./utils/transform";

class Sankey extends Component<{}, {}> {
  state = {
    data: { nodes: [], links: [] }
  };
  async componentDidMount() {
    const data = await readFile();
    this.setState({ data });
    console.log("Transfomed sankey data", data);
  }

  render() {
    const { data } = this.state;

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
      return <p>no nodes</p>;
    }
  }
}

export default Sankey;
