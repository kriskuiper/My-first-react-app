import React from 'react';

function Intro(props) {
    return (
        <p className="App-intro">
            {props.introMessage}
        </p>
    );
}
export default Intro;