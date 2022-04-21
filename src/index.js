// 1. Import the React and ReactDOM libraries
import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

// 2. Create React Components


const App = () => {

    const buttonText = {text: 'Submit'};
    const style = {backgroundColor: 'blue', color: 'white'};
            
    const labelText = 'Enter name:'

    return (
        <div><label className="label" htmlFor="name">
            {labelText}
        </label>
        <input id="name" type="text"/>
        <button style={style}>
            {buttonText.text}
        </button>
        </div>
    );
}


// 3. Take the React Components and show it on the screen
// Old Way:
// ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.createRoot(document.querySelector('#root')).render(<App />);