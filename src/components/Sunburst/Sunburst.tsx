// lib
import React, { Component } from "react";
// src
import { ResponsiveSunburst } from "@nivo/sunburst";
import { transform } from "./utils/getDataForSunburstChart";

class Sunburst extends Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    const data = await transform();
    console.log("Transformed sunburst data", data);

    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div id="my-sunburst-chart">
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

export default Sunburst;
