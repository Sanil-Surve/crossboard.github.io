// import React from 'react';
// import firebase from '../Firebase';
// import CrossBoard from './CrossBoard';

// const Board = () => {
//   const handleLogout = () => {
//     firebase.auth().signOut();
//   };

//   return (
//     <div>
//       <h1>Cross Board</h1>
//       <button onClick={handleLogout}>Log Out</button>
//       <CrossBoard />
//     </div>
//   );
// };

// export default Board;

import { useState } from 'react';
import firebase from '../Firebase';
import CrossBoard from './CrossBoard';

const Board = () => {
  const [board, setBoard] = useState(() => {
    const emptyBoard = new Array(20).fill(new Array(20).fill({ value: null }));
    return emptyBoard;
  });

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const handleSaveBoard = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      firebase.database().ref('boards/' + user.uid).set(board);
    }
  };

  return (
    <div>
      <h1>Cross Board</h1>
      <button onClick={handleLogout}>Log Out</button>
      <CrossBoard board={board} setBoard={setBoard} />
      <button onClick={handleSaveBoard}>Save</button>
    </div>
  );
};

export default Board;

