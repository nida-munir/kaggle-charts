// lib
import React, { Component } from "react";
// src
import { ResponsiveSunburst } from "@nivo/sunburst";
import { PieProps } from "../../types/types";
import { transform } from "./utils/getSunburstData";
export class SunburstChart extends Component<PieProps, {}> {
  state = {
    data: {}
  };
  async componentDidUpdate(prevProps: PieProps) {
    if (this.props.isLoading != prevProps.isLoading) {
      if (!this.props.isLoading) {
        const data = transform(this.props.data);
        //   console.log("Transformed sankey copy data ", data);
        console.log("sunburst data", data);
        this.setState({ data });
      }
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div id="sunburst-chart">
        <ResponsiveSunburst
          data={data}
          margin={{
            top: 40,
            right: 20,
            bottom: 20,
            left: 20
          }}
          identity="name"
          value="value"
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
      </div>
    );
  }
}
