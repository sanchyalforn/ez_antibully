import React, { Component } from "react";

import { Sigma } from "react-sigma";
import SigmaLoader from "./Loader";
import NodeShapes from "./NodeShapes";
import loadingGif from "../../images/loading.gif";

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
        minNodeSize: 1,
        maxNodeSize: 20,
        minArrowSize: 2,
        minEdgeSize: 0.5,
        maxEdgeSize: 2,
        defaultNodeBorderColor: "#000",
        defaultHoverLabelBGColor: "transparent",
        labelHoverColor: "transparent",
        defaultLabelSize: 16,
        autoRescale: true
      },
      style: {
        maxWidth: window.screen.width,
        height: window.screen.height
      },
      loading: true
    };
  }

  componentWillMount() {
    api
      .get("/getGraph")
      .then(resp => {
        console.log(resp.data);
        this.setState({ graphData: resp.data });
        this.setState({ loading: false });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      });
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
        {this.state.loading ? (
          <img
            src={loadingGif}
            alt="spinner"
            style={{ width: 1000, textAlign: 'center', marginLeft: 250 }}
          />
        ) : (
          <Sigma
            renderer="canvas"
            settings={this.state.settings}
            style={this.state.style}
          >
            <SigmaLoader graph={this.state.graphData}>
              <NodeShapes defult="cross" />
            </SigmaLoader>
          </Sigma>
        )}
      </div>
    );
  }
}

export default Graph;
