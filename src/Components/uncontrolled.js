import React, { Component } from 'react';

class Uncontrolled extends Component{
    state={

    }
    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name : </label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                        />
                    </div>

                    <div className="form_element">
                        <label>Enter Email : </label>
                        <input 
                            type="text"
                            placeholder="Enter Email"
                            
                        />
                    </div>
                    <button>Button</button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;