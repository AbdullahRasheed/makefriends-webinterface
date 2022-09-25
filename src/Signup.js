import './Signup.css'
import Post from './RESTRequest';

function SignupForm(){
    return (
        <form>
            <h1>Signup Page</h1>
            <input type="text" placeholder="Username" className="signup-text-input" id="signup-username-input"/>
            <input type="password" placeholder="Password" className="signup-text-input" id="signup-password-input"/>
            <button type="button" className="signup-button" onClick={signupSubmit}>Sign up</button>
            <label id="signup-response" />
        </form>
    );
}

async function signupSubmit() {
    var usernameInput = document.getElementById("signup-username-input");
    var passwordInput = document.getElementById("signup-password-input");
    var signupResponse = document.getElementById("signup-response");
  
    await Post("user/register", {
      "username": usernameInput.value,
      "password": passwordInput.value
    }).then(response => signupResponse.textContent = response);
}

export default SignupForm;