import * as attack from "./UnderAttack.js";
import * as helpers from "./helpers.js";
import React, { Component } from "react";
import Status from "./Status.js";
import Timer from "./Timer.js";
import Title from "./Title.js";
import dynamic from "next/dynamic.js";
import Link from "next/link.js";

const Chessboard = dynamic(() => import("chessboardjsx"), { ssr: false });

const gameName = "۸ وزیر";
const gameHome = "https://github.com/amir-96";

class EightQueens extends Component {
  /**
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      attacked: [], // Array of queens under attack
      position: {}, // Object of current board position
      gameStatus: "در حال بازی",
      queensOnBoard: 0,
      queensUnderAttack: 0,
      showAttackPaths: false,
      attackedSquares: 0,
    };
    this.onSquareClick = this.onSquareClick.bind(this);
    this.toggleAttackPaths = this.toggleAttackPaths.bind(this);
  }

  /**
   * Player clicked on the chessboard
   *
   * @param square
   */
  onSquareClick = (square) => {
    let position = this.state.position; // Get the current board position
    if (position[[square]]) {
      delete position[[square]]; // Clicked on a Queen, delete it
    } else {
      if (Object.keys(position).length === 8) {
        return; // Max 8 queens on board
      }
      position[[square]] = "wQ"; // Clicked on an empty square, add a Queen
    }

    const attacked = attack.underAttack(position); // get array of Queens under attack

    Object.keys(position).forEach(function (square) {
      // For each queen on board
      if (attacked.includes(square) && square !== "bQ") {
        // if Queen is under attack
        position[square] = "bQ"; // Flip Queen under attack
      } else if (square !== "wQ") {
        // If Queen is no longer under attack
        position[square] = "wQ"; // Queen at peace
      }
    });

    let queensOnBoard = Object.keys(position).length;
    let queensUnderAttack = 0;
    if (attacked) {
      queensUnderAttack = attacked.length;
    }
    let gameStatus = "در حال اجرا";
    if (queensOnBoard === 8 && queensUnderAttack === 0) {
      gameStatus = "جایگذاری بصورت صحیح انجام شد";
    }

    this.setState({
      attacked: attacked,
      position: position,
      queensOnBoard: queensOnBoard,
      queensUnderAttack: queensUnderAttack,
      attackedSquares: attack.attackedSquares(position),
      gameStatus: gameStatus,
    });
  };

  /**
   * Play clicked the Attack Paths button
   */
  toggleAttackPaths() {
    const showAttackPaths = !this.state.showAttackPaths;
    let attackedSquares = this.state.attackedSquares;
    if (!showAttackPaths) {
      attackedSquares = attack.attackedSquares(this.state.position);
    }
    this.setState({
      showAttackPaths: showAttackPaths,
      attackedSquares: attackedSquares,
    });
  }

  /**
   * @returns {*}
   */
  render() {
    // force board refresh by using FEN string in _position_ and _key_ Chessboard props
    const fenPosition = helpers.objToFen(this.state.position);

    // Highlight squares under attack
    let squareStyles = {};
    let showAttackPathsText = "Show";
    if (this.state.showAttackPaths) {
      showAttackPathsText = "Hide";
      if (this.state.attackedSquares.length) {
        this.state.attackedSquares.forEach(function (square) {
          squareStyles[square] = {
            background: "radial-gradient(circle, orange, transparent 50%)",
          };
        });
      }
    }

    return (
      <div className="EightQueens">
        <div className="EightQueens-header">
          <Title gameName={gameName} gameHome={gameHome} />
          <Status
            queensOnBoard={this.state.queensOnBoard}
            queensUnderAttack={this.state.queensUnderAttack}
          />
          <Timer gameStatus={this.state.gameStatus} />
        </div>
        <Chessboard
          id="EightQueens"
          position={fenPosition}
          key={fenPosition}
          sparePieces={false}
          draggable={false}
          calcWidth={({ screenWidth }) => (screenWidth < 500 ? 350 : 480)}
          onSquareClick={this.onSquareClick}
          squareStyles={squareStyles}
          pieces={{
            bQ: ({ squareWidth, isDragging }) => (
              <img
                style={{
                  width: isDragging ? squareWidth * 1.75 : squareWidth,
                  height: isDragging ? squareWidth * 1.75 : squareWidth,
                }}
                src="/images/UnderAttack.svg"
                alt={"Under Attack"}
              />
            ),
          }}
        />
        <div className="EightQueens-instructions">
          - ۸ وزیر را طوری قرار دهید که مورد حمله قرار نگیرند
          <br />- برای قرار دادن وزیر روی خانه مورد نظر کلیک کنید
        </div>
        <div className="EightQueens-header">
          <button className="EightQueens-restart">
            <Link className="rounded border shadow" href="/game">
              شروع مجدد
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default dynamic(() => Promise.resolve(EightQueens), { ssr: false });
