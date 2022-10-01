import './Signup.css'
import {Post} from './RESTRequest';
import Form from './components/InputForm';

function SignupForm(){
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

    async function submit(formData){
        const responseText = document.getElementById("Signup-response");

        await Post("user/register", formData).then(response => responseText.textContent = response.data);
    }

    return (
        <div className="Signup-container">
            <h1>Signup Page</h1>
            <Form inputs={fields} submitName="Sign up" onSubmit={submit}/>
            <p id="Signup-response"/>
        </div>
    );
}

export default SignupForm;