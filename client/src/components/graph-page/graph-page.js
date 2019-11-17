import React, { Component } from "react";

import { Sigma } from "react-sigma";
import SigmaLoader from "./Loader";
import NodeShapes from "./NodeShapes";

import api from "../../api/axios";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphData: { nodes: [], edges: [] },
      settings: {
        batchEdgesDrawing: true,
        drawEdges: true,
        drawLabels: true,
        drawEdgeLabels: true,
        hideEdgesOnMove: false,
        animationsTime: 3000,
        clone: false,
        doubleClickEnabled: true,
        mouseWheelEnabled: true,
        minNodeSize: 5,
        maxNodeSize: 10,
        minArrowSize: 2,
        minEdgeSize: 0.5,
        maxEdgeSize: 1,
        defaultNodeBorderColor: "#000",
        defaultHoverLabelBGColor: "transparent",
        labelHoverColor: "transparent",
        defaultLabelSize: 11
      },
      style: {
        maxWidth: "1200px",
        height: "600px"
      }
    };
  }

  componentWillMount() {
    /*api.get("/getGraph").then(resp => {console.log(resp)}).catch(error => {if (error.response) {
            console.log(error.response);
          }})*/

    const test = {
      nodes: [
        { id: 1, label: "joan", color: [229, 0, 0, 1], x: 0, y: 0, size: 104 },
        { id: 2, label: "Elena", color: [229, 0, 0, 1], x: 1, y: 0, size: 104 },
        {
          id: 3,
          label: "Tesert",
          color: [178, 0, 0, 1],
          x: 1,
          y: 1,
          size: 105
        },
        { id: 4, label: "test", color: [255, 0, 0, 1], x: 2, y: 1, size: 100 },
        { id: 5, label: "test2", color: [255, 0, 0, 1], x: 2, y: 2, size: 100 },
        { id: 6, label: "Andreu", color: [255, 0, 0, 1], x: 3, y: 2, size: 100 }
      ],
      edges: [
        { id: 0, source: 2, target: 1 },
        { id: 1, source: 3, target: 4 }
      ]
    };
    this.setState({ graphData: test });
  }

  render() {
    return (
      <div className="App">
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: 30,
            marginTop: 20
          }}
        >
          DEPENDENCY GRAPH
        </h1>
        <Sigma
          renderer="canvas"
          settings={this.state.settings}
          style={this.state.style}
        >
          <SigmaLoader graph={this.state.graphData}>
            <NodeShapes defult="cross" />
          </SigmaLoader>
        </Sigma>
      </div>
    );
  }
}

export default Graph;
