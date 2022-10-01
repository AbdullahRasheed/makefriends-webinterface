import React from "react";
import './ImageChooser.css';
import {Post} from '../RESTRequest';

export default function ImageChooser(){
    const image = new FormData();

    function selectImage(event){
        image.append("file", event.target.files[0], event.target.files[0].name);
    }

    async function submit(){
        await Post("avatar/upload", image).then(response => console.log(response));
    }

    return (
        <div>
            <label className="ImageChooser-label">
                <input type="file" accept=".png,.jpg" className="ImageChooser" onChange={selectImage}/>
                <button type="button" onClick={submit}>Submit</button>
            </label>
        </div>
    );
}