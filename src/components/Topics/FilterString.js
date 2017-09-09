import React, { Component } from 'react';

class FilterString extends Component {

    constructor(){
        super();
        this.state = {
            unfilteredArray : ['one','two','three','four','five'],
            userInput : '',
            filteredArray : [],          
        }
    }

    handleChange(val){
        this.setState( { userInput : val } );
        console.log(this.state.userInput);
    }

    filterArray(){
        this.setState( { filteredArray : this.state.unfilteredArray.filter( (e) => e.match(this.state.userInput) ) } )
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> { JSON.stringify( this.state.unfilteredArray ) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick={ () => this.filterArray() }> Filter </button>
                <br/>
                <br/>
                <span className="resultBox filterStringRB"> { JSON.stringify( this.state.filteredArray ) } </span>
            </div>
        )
    }
}

export default FilterString;