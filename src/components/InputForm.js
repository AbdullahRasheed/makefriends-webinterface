import React from "react";
import './InputForm.css';
import MainButton from "./MainButton";

export default function InputForm(properties) {
    const target = {}
    const formInputs = properties.inputs.map((input, i) => {
        Object.assign(target, {[input.name]: ""});
        return <input onChange={handleChange} key={i} className="InputForm-input" {...input}></input>
    })

    const [formData, setFormData] = React.useState(target);

    function handleChange(event){
        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form className="InputForm-form">
            {formInputs}
            <MainButton id="InputForm-submit" onClick={() => properties.onSubmit(formData)}>{properties.submitName}</MainButton>
        </form>
    )
}