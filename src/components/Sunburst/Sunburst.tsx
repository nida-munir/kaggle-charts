import React, { Component } from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { transform } from "./transformers/transformer";

class Sunburst extends Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    const data = await transform();
    console.log("data to be updated in state:", data);
    this.setState({ data });
  }
  // obj = {
  //   name: "nivo",
  //   children: [
  //     {
  //       name: "viz",
  //       children: [
  //         {
  //           name: "stack",
  //           children: [
  //             {
  //               name: "chart",
  //               loc: 40
  //             },
  //             {
  //               name: "xAxis",
  //               loc: 60
  //             }
  //           ]
  //         },
  //         {
  //           name: "pie",
  //           children: [
  //             {
  //               name: "chart",
  //               children: [
  //                 {
  //                   name: "pie",
  //                   children: [
  //                     {
  //                       name: "outline",
  //                       loc: 40
  //                     },
  //                     {
  //                       name: "slices",
  //                       loc: 60
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   name: "donut",
  //                   loc: 60
  //                 }
  //               ]
  //             },
  //             {
  //               name: "legends",
  //               loc: 40
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       name: "utils",
  //       children: [
  //         {
  //           name: "randomize",
  //           loc: 50
  //         },
  //         {
  //           name: "resetClock",
  //           loc: 30
  //         },
  //         {
  //           name: "dbg",
  //           loc: 20
  //         }
  //       ]
  //     }
  //   ]
  // };
  render() {
    const { data } = this.state;
    // console.log("in state: ", data);
    return (
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
    );
  }
}

export default Sunburst;
