/**
 * Eight Queens chess game
 * Title box
 */
import dynamic from "next/dynamic";
import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className="EightQueens-title">
        <a href={this.props.gameHome} target="_blank" rel="noopener noreferrer">
          {this.props.gameName}
          <br />
        </a>
      </div>
    );
  }
}

export default dynamic(() => Promise.resolve(Title), { ssr: false });
