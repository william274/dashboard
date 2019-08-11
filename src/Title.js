import React from 'react';
import './App.css';

class Title extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <div>
                <h1 className="h1">{this.props.value}</h1>
            </div>
        );
    }
}

export default Title;