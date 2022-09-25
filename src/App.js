import './App.css';

function App() {
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
  return (
    <div className="rightside">
      <div className="main-right-content">
        <h1>Join now!</h1>
        <div className="cont-form">
          <button type="button">Log in</button>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
