import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1 : '0',
            number2 : '1',
            sum: null
        }
    }

    handleChange1(val){
        this.setState( {number1:val} );  
    }
    handleChange2(val){
        this.setState( {number2:val} )
    }

    sumValues(){
        this.setState({
            sum: parseInt(this.state.number1) + parseInt(this.state.number2)
        })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleChange1(e.target.value)}></input>
                <input className="inputLine" onChange={(e) => this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.sumValues()}>Check</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum; 