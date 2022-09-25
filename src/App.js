import './App.css';
import SignupForm from './Signup';
import LoginForm from './Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MakeFriends</h1>
      </header>
      <LoginForm className="login-form"/>
      <SignupForm className="signup-form"/>
    </div>
  );
}

export default App;
