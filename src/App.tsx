import React, { Component } from "react";
import "./App.css";
import { Pie } from "./components/Pie/Pie";
import Sunburst from "./components/Sunburst/Sunburst";
import { ResponsiveSankey } from "@nivo/sankey";
import Sankey from "./components/Sankey/Sankey";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pie />
        <Sunburst />
        {/* <Sankey /> */}
      </div>
    );
  }
}

export default App;
