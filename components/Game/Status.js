/**
 * Eight Queens chess game
 * Status box
 */
import dynamic from "next/dynamic";
import React, { Component } from "react";

class Status extends Component {
  render() {
    const numberQueensNeeded = 8 - this.props.queensOnBoard;
    let gameStatus = numberQueensNeeded + " وزیر";
    if (numberQueensNeeded > 1) {
      gameStatus += "های";
    }
    gameStatus += " باقی مانده";

    let statusClass = "EightQueens-playing";

    if (!numberQueensNeeded) {
      gameStatus = "حل نشد";
      statusClass = "EightQueens-not";
    }

    if (this.props.queensOnBoard === 8 && this.props.queensUnderAttack === 0) {
      gameStatus = "😃 برنده شدید";
      statusClass = "EightQueens-win";
    }

    return (
      <div className="EightQueens-status">
        <b>{this.props.queensOnBoard}</b> وزیر های روی صفحه
        <br />
        <b>{this.props.queensUnderAttack}</b> وزیر های مورد حمله
        <br />
        <div className={statusClass}>{gameStatus}</div>
      </div>
    );
  }
}

export default dynamic(() => Promise.resolve(Status), { ssr: false });
