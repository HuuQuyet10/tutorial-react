import React, { Component } from "react";
import Text from "./Text";

class ListText extends Component {
  render() {
    return (
      <div>
        {this.props.name && this.props.name}
        <Text name={this.props.name} />
      </div>
    );
  }
}

export default ListText;
