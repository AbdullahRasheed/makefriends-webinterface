import './MainButton.css';

export default function MainButton(properties){
    return (
        <button type="button" className="main-button" 
        id={properties.id} onClick={properties.onClick}>{properties.children}</button>
    );
}