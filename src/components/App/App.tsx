import React, { Component } from "react";
import "./App.css";
import { Pie } from "./components/Pie/Pie";
import Sunburst from "./components/Sunburst/Sunburst";
import { ResponsiveSankey } from "@nivo/sankey";
import Sankey from "./components/Sankey/Sankey";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="app">
          <div id="content">
            <Pie />
            <Sunburst />
            <Sankey />
          </div>
          <footer id="footer">Created by Nida M.</footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
