import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'
function App() {
   const [user] = useAuthState(auth)
  // var user = firebase.auth().currentUser;
  return (
    <>
    {console.log(user)}
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
