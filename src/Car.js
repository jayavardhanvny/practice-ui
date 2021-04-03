import React, { Component } from 'react';
class Car extends Component{
    constructor(props){
        super(props);
        this.state = {showMessage: false}
    }
    
    showMessage = () => {
        this.setState({showMessage: !this.state.showMessage}) 
    }
    render(){
        return <div>
            <button onClick={this.showMessage}>Click on Me!</button>
            {this.state.showMessage && <h1>Hi, I am Car Component {new Date().toLocaleTimeString()}</h1>}
        </div>
    }
    
}
export default Car;