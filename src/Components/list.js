import React, { Component } from 'react';
import '../../db.json';
class List extends Component{

    state={
        name:'ABC',
        roll: 11,
        list:[]
    }

    onListHandler(){
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <input 
                type="submit"
                value="ShowMe"
                onClick={ this.onListHandler.bind(this)} />
            </div>
        )
    }
}

export default List;