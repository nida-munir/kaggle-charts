// lib
import React, { Component } from "react";
import { Pie } from "../Pie/Pie";
// src
import Sunburst from "../Sunburst/Sunburst";
import Sankey from "../Sankey/Sankey";
// styles
import "./App.css";
import { readFile } from "./utils";

class App extends Component {
  // state = {
  //   fileData: {},
  //   isLoading: false
  // };
  // async componentWillMount() {
  //   this.setState({ isLoading: true });
  //   console.log("Reading csv file");
  //   const fileData = await readFile();
  //   console.log("csv file reading complete");

  //   this.setState({ fileData, isLoading: false });
  // }
  render() {
    // const { fileData: data, isLoading } = this.state;
    // console.log("Passing props and rendering charts..", data);
    return (
      <React.Fragment>
        <div id="app">
          <div id="content">
            <Pie />
            <Sunburst />
            <Sankey />
          </div>
          <footer id="footer">Created by Nida Munir.</footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
