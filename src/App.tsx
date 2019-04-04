import React, { Component } from "react";
import "./App.css";
import { Pie } from "./components/Pie/Pie";
import Sunburst from "./components/Sunburst/Sunburst";
import { ResponsiveSankey } from "@nivo/sankey";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pie />
        <Sunburst />
      </div>
    );
  }
}

export default App;
