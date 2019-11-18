import React from "react";
import "./plugins/sigma.renderers.customShapes/shape-library.js";
import "./plugins/sigma.renderers.customShapes/sigma.renderers.customShapes.js";


class NodeShapes extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.sigma && this.props.default)
      this.props.sigma.settings({ defaultNodeType: this.props.default });
  }
  render = () => null;
}

export default NodeShapes;
