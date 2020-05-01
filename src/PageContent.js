import React, { Component } from "react";

class PageContent extends Component {
  render() {
    const styles = {
      backgroundColor: "#444",
      width: "100%",
      height: "100vw",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
