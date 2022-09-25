import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import LoginForm from './Login';
import SignupForm from './Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<TitlePage />} />
        <Route exact path='/login' element={<LoginForm />} />
        <Route exact path='/signup' element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

function TitlePage(){
  return (
    <div className="title-page">
      <LeftMainContent />
      <RightMainContent />
    </div>
  );
}

function LeftMainContent() {
  return (
    <div className="leftside">
      <div>
        <h1 className="title">MakeFriends</h1>
        <p className="title-support">Something cool here</p>
      </div>
    </div>
  );
}

function RightMainContent() {
  const navigate = useNavigate();

  return (
    <div className="rightside">
      <div className="main-right-content">
        <h1>Join now!</h1>
        <div className="cont-form">
          <button type="button" onClick={() => navigate("/login")}>Log in</button>
          <button type="button" onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
