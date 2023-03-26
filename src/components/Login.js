import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../Firebase';
import "./Login.css";
// import Board from './Board';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const history = useHistory();

useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('boards/' + user.uid).once('value', (snapshot) => {
            const boardData = snapshot.val();
            if (boardData) {
                // const board = Object.values(boardData);
                // setBoard(board);
            }
        });
    }
});
return () => unsubscribe();
}, []);

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/board');
    } catch (error) {
        setError(error.message);
    }
};

return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Log In</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
 };
 
 export default Login;



        // import React, { useState } from 'react';
        // import { useHistory } from 'react-router-dom';
        // import firebase from '../Firebase';
        
        // const Login = () => {
        //   const [email, setEmail] = useState('');
        //   const [password, setPassword] = useState('');
        //   const [error, setError] = useState(null);
        
        //   const history = useHistory();
        
        //   const handleEmailChange = (e) => setEmail(e.target.value);
        //   const handlePasswordChange = (e) => setPassword(e.target.value);
        
        //   const handleSubmit = (e) => {
        //     e.preventDefault();
        //     firebase.auth().signInWithEmailAndPassword(email, password)
        //       .then(() => {
        //         history.push('/board');
        //       })
        //       .catch((error) => {
        //         setError(error.message);
        //       });
        //   };
        
        //   return (
        //     <form onSubmit={handleSubmit}>
        //       <div>
        //         <label htmlFor="email">Email</label>
        //         <input type="email" id="email" value={email} onChange={handleEmailChange} />
        //       </div>
        //       <div>
        //         <label htmlFor="password">Password</label>
        //         <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        //       </div>
        //       {error && <div>{error}</div>}
        //       <button type="submit">Log In</button>
        //     </form>
        //   );
        // };
        
        // export default Login;