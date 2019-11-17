import React, { Component } from "react";

import { Sigma } from "react-sigma";

import api from "../../api/axios";

class Graph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            graphData: { nodes: [], edges: [] },
        }
    }

    componentWillMount() {
        api.get("/getGraph").then(resp => {console.log(resp)}).catch(error => {if (error.response) {
            console.log(error.response);
          }})
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
        </Sigma>
      </div>
    );
  }
}

export default Graph;
