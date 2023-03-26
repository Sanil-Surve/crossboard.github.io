import React from "react";
import "./CrossBoard.css";




const CrossBoard = ({ setBoard }) => {
  //   const board = new Array(20).fill(new Array(20).fill(null));
  const board = new Array(20).fill(new Array(20).fill({ value: null }));

  const handleCellChange = (rowIndex, cellIndex, e) => {
    const newValue = e.target.value;
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[rowIndex][cellIndex].value = newValue;
      return newBoard;
    });
  };
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="cell">
              {/* {cell} */}
              <input type="text" value={cell.value} onChange={(e) => handleCellChange(rowIndex, cellIndex, e)} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CrossBoard;
