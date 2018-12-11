import React, { Component } from 'react';

class Controlled extends Component{
    constructor(props){
        super(props)

        this.state={
            name: 'ABC',
            lname: 'XYZ'
        }
        this.handlefNameChange = this.handlefNameChange.bind(this)
    }
    handlefNameChange = (event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handlelNameChange = (event)=>{
        this.setState({
            lname:event.target.value
        })
    }
    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name : </label>
                        <input 
                            type="text"
                            placeholder={this.state.name}
                            value={this.state.name}
                            onChange={this.handlefNameChange}
                        />
                    </div>

                    <div className="form_element">
                        <label>Enter Name : </label>
                        <input 
                            type="text"
                            placeholder={this.state.lname}
                            value={this.state.lname}
                            onChange={this.handlelNameChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Controlled;