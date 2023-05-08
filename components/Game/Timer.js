import dynamic from "next/dynamic";
import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().valueOf(),
      startTime: new Date().valueOf(),
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000); // 1 second
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ currentTime: new Date().valueOf() });
  }

  render() {
    if (this.props.gameStatus === "solved") {
      clearInterval(this.timer);
    }

    const seconds = Math.floor(
      (this.state.currentTime - this.state.startTime) / 1000
    );

    return (
      <div className="EightQueens-timer">
        <small>{this.props.gameStatus}</small>
        <br />
        <b>{seconds}</b>
        <br />
        <small>ثانیه</small>
      </div>
    );
  }
}

export default dynamic(() => Promise.resolve(Timer), { ssr: false });
