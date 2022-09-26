import './Login.css';
import InputForm from './components/InputForm';
import Post from './RESTRequest';

function LoginForm(){
    const fields = [
        {
            "type": "text",
            "name": "username",
            "placeholder": "Username"
        },
        {
            "type": "password",
            "name": "password",
            "placeholder": "Password"
        }
    ];

    async function submit(formData) {
        const responseText = document.getElementById("Login-response");

        await Post("user/login", formData)
            .then(response => responseText.textContent = response);
    }

    return (        
        <div className="Login-container">
            <h1>Login Page</h1>
            <InputForm inputs={fields} submitName="Login" onSubmit={submit}/>
            <p id="Login-response"/>
        </div>
    );
}

export default LoginForm;