import './Login.css';
import MainButton from './components/MainButton';
import Post from './RESTRequest';

function LoginForm(){
    return (
        <form className="login-form">
            <h1>Login Page</h1>
            <input type="text" placeholder="Username" className="login-text-input" id="username-input"/>
            <input type="password" placeholder="Password" className="login-text-input" id="password-input"/>
            <MainButton id="login-submit" onClick={loginSubmit}>Login</MainButton>
            <label id="login-response" />
        </form>
    );
}

async function loginSubmit() {
    var usernameInput = document.getElementById("username-input");
    var passwordInput = document.getElementById("password-input");
    var signupResponse = document.getElementById("login-response");
  
    await Post("user/login", {
      "username": usernameInput.value,
      "password": passwordInput.value
    }).then(response => signupResponse.textContent = response);
}

export default LoginForm;