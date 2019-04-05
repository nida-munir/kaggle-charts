// lib
import React, { Component } from "react";
// src
import { ResponsivePie } from "@nivo/pie";
import { transform } from "./transformers/getPieChartData";
import { readFile } from "../App/utils";
import { PieProps } from "../../types/types";

export class PieChart extends Component<PieProps, {}> {
  state = {
    data: []
  };

  async componentDidUpdate(prevProps: PieProps) {
    // console.log("Is Pie data ", this.props.data);
    // console.log("Reading csv file");
    // const fileData = await readFile();
    // console.log("csv file reading complete");
    // console.log("Transforming Pie data");
    if (this.props.isLoading != prevProps.isLoading) {
      const data = transform(this.props.data);
      //   console.log("Transformed pie copy data ", data);
      this.setState({ data });
    }
  }
  // getData = () => {
  //   return transform(this.props.data);
  // // };
  // updateQuery = (e:H)=>{
  //   console.log();
  // }
  render() {
    const data = this.state.data;
    // console.log("Is Pie Loading", this.props.isLoading);
    if (this.props.isLoading) return <p>Loading</p>;
    else
      return (
        <React.Fragment>
          <div id="pie-chart">
            <h3>
              This pie chart shows four types of chest pains and the respective
              no. of patients who have it
            </h3>
            {/* <button onClick={this.updateQuery()}>Chest pain</button> */}
            <ResponsivePie
              data={data}
              margin={{
                top: 40,
                right: 80,
                bottom: 80,
                left: 80
              }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors="nivo"
              colorBy="id"
              borderWidth={1}
              borderColor="inherit:darker(0.2)"
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor="inherit"
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
              fill={[
                {
                  match: {
                    id: "ruby"
                  },
                  id: "dots"
                },
                {
                  match: {
                    id: "c"
                  },
                  id: "dots"
                },
                {
                  match: {
                    id: "go"
                  },
                  id: "dots"
                },
                {
                  match: {
                    id: "python"
                  },
                  id: "dots"
                },
                {
                  match: {
                    id: "scala"
                  },
                  id: "lines"
                },
                {
                  match: {
                    id: "lisp"
                  },
                  id: "lines"
                },
                {
                  match: {
                    id: "elixir"
                  },
                  id: "lines"
                },
                {
                  match: {
                    id: "javascript"
                  },
                  id: "lines"
                }
              ]}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  symbolSize: 18,
                  symbolShape: "circle",
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
        </React.Fragment>
      );
  }
}