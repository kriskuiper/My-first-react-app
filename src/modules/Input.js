import React from 'react';
import UserInput from './UserInput'

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            input: '',
        }
    }

    // Change the h1 on inputChange
    handleInput = e =>  {
        this.setState({input: e.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <UserInput 
                    input={this.state.input}
                    onChange={this.handleInput}
                />
            </React.Fragment>
        );
    }
}

export default Input;