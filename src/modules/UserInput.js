import React from 'react';

function UserInput(props) {
    return (
        <React.Fragment>
            <input onChange={props.onChange} />
            <p>{props.input}</p>
        </React.Fragment>
    );
}

export default UserInput