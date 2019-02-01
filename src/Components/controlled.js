import React, { Component } from 'react';

class Controlled extends Component{
    constructor(props){
        super(props)

        this.state={
            name: '',
            email: ''
        }
        this.handlefNameChange = this.handlefNameChange.bind(this)
    }
    handlefNameChange = (event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handleEmailChange = (event)=>{
        this.setState({
            email:event.target.value
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
                            // placeholder={this.state.name}
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handlefNameChange}
                        />
                    </div>

                    <div className="form_element">
                        <label>Enter Email : </label>
                        <input 
                            type="text"
                            // placeholder={this.state.email}
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>
                    <button>Button</button>
                </form>
            </div>
        )
    }
}

export default Controlled;