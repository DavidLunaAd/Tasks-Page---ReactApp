import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            age : 32
        }
    }

    render() {
        return (
            <div>
                <p>Saludos!! { this.props.name }</p>
                <p>Tienes {this.state.age} años</p>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) =>(
            {
                age: prevState.age + 1
            }
        ))
    }
}

Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;
