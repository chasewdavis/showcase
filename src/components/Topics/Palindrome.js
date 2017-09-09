import React, { Component } from 'react';

class Palindrome extends Component {

    constructor(){
        super();
        this.state = {
            userInput : '',
            palindrome : ''
        }
    }

    handleChange(val){
        this.setState( { userInput:val } )
    }

    checkPalindrome(){
        var reverse = this.state.userInput.split('').reverse();
        var forward = this.state.userInput.split('')
        var result;
        forward.join('') === reverse.join('') ? result = 'true' : result = 'false'
        this.setState( 
            { 
                palindrome : result
            } 
        )
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange( e.target.value ) }></input>
                <button className="confirmationButton" onClick={ () => this.checkPalindrome() }>Check</button>
                <span className="resultsBox"> {this.state.palindrome} </span>
            </div>
        )
    }
}

export default Palindrome;